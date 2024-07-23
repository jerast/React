import { useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { toast } from 'sonner'

import { AuthContext } from '@auth/context/AuthContext'

export const LoginPage = () => {
  const { auth, login } = useContext(AuthContext)

  // Form fields states
  const [formValues, setFormValues] = useState({
    email: '',
    password: '',
    rememberMe: false,
  })
  const [formRequired] = useState({
    email: true,
    password: true,
    rememberMe: false,
  })

  // if user is in localStorag
  useEffect(() => {
    const savedEmail = localStorage.getItem('socket-chat-email')
    if (savedEmail) {
      setFormValues({
        ...formValues,
        email: savedEmail,
        rememberMe: true,
      })
    }
  }, [])

  const onChangeForm = ({ target }) => {
    const { name, value } = target
    setFormValues({ 
      ...formValues,
      [name]: value
    })
  }

  const onClickCheckBox = () => {
    setFormValues({ 
      ...formValues,
      rememberMe: !formValues.rememberMe
    })
  }

  const onSubmitForm = async (event) => {
    event.preventDefault()

    if (onDisableSubmit()) return

    (formValues.rememberMe) 
      ? localStorage.setItem('socket-chat-email', formValues.email)
      : localStorage.removeItem('socket-chat-email')

    const { email, password } = formValues
    const response = await login(email, password)

    if (!response.ok) 
      toast.error(response.error)
  }

  const onDisableSubmit = () => 
    !formValues.email || 
    !formValues.password || 
    auth.isChecking

  
  return (
    <form 
      className="login100-form validate-form flex-sb flex-w"
      onSubmit={onSubmitForm}
    >
      <span className="login100-form-title mb-3">
        Chat - Ingreso
      </span>
      
      <div className="wrap-input100 validate-input mb-3">
        <input 
          className="input100" 
          type="email" 
          name="email" 
          placeholder="Email"
          autoComplete="off"
          required={formRequired.email}
          value={formValues.email}
          onChange={onChangeForm}
        />
        <span className="focus-input100"></span>
      </div>
      
      
      <div className="wrap-input100 validate-input mb-3">
        <input 
          className="input100" 
          type="password" 
          name="password"
          placeholder="Password"
          autoComplete="off"
          required={formRequired.email}
          value={formValues.password}
          onChange={onChangeForm}
        />
        <span className="focus-input100"></span>
      </div>
      
      <div className="row mb-3">
        <div className="col">
          <input 
            className="input-checkbox100" 
            id="ckb1" 
            type="checkbox" 
            name="rememberMe" 
            checked={formValues.rememberMe}
            onClick={onClickCheckBox}
            required={formRequired.rememberMe}
            readOnly
          />
          <label className="label-checkbox100" htmlFor="ckb1">
            Recordarme
          </label>
        </div>

        <div className="col text-end">
          <Link className="txt1" to="/auth/signin">
            Nueva cuenta?
          </Link>
        </div>
      </div>

      <div className="container-login100-form-btn m-t-17">
        <button 
          className="login100-form-btn" 
          type="submit"
          disabled={onDisableSubmit()}
        >
          Ingresar
        </button>
      </div>

    </form>
  )
}

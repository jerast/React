import { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import { toast } from 'sonner'

import { AuthContext } from '@auth/context/AuthContext'

export const SigninPage = () => {
  const { auth, signin } = useContext(AuthContext)

  // Form fields states
  const [formValues, setFormValues] = useState({
    name: '',
    email: '',
    password: '',
  })
  const [formRequired] = useState({
    name: true,
    email: true,
    password: true,
  })

  const onChangeForm = ({ target }) => {
    const { name, value } = target
    setFormValues({ 
      ...formValues,
      [name]: value
    })
  }

  const onSubmitForm = async (event) => {
    event.preventDefault()

    if (onDisableSubmit()) return

    const { name, email, password } = formValues
    const response = await signin(name, email, password)

    if (!response.ok) {
      toast.error(response.error)
      return
    }
  }

  const onDisableSubmit = () => 
    !formValues.name || 
    !formValues.email || 
    !formValues.password || 
    auth.isChecking

  
  return (
    <form 
      className="login100-form validate-form flex-sb flex-w"
      onSubmit={onSubmitForm}
    >
      <span className="login100-form-title mb-3">
        Chat - Registro
      </span>

      <div className="wrap-input100 validate-input mb-3">
        <input 
          className="input100" 
          type="text" 
          name="name" 
          placeholder="Nombre"
          autoComplete="off"
          required={formRequired.name}
          value={formValues.name}
          onChange={onChangeForm}
        />
        <span className="focus-input100"></span>
      </div>

      
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
          required={formRequired.password}
          value={formValues.password}
          onChange={onChangeForm}
        />
        <span className="focus-input100"></span>
      </div>
      
      <div className="row mb-3">
        <div className="col text-end">
          <Link className="txt1" to="/auth/login">
            Ya tienes cuenta?
          </Link>
        </div>
      </div>

      <div className="container-login100-form-btn m-t-17">
        <button 
          className="login100-form-btn"
          type="submit"
          disabled={onDisableSubmit()}
        >
          Crear cuenta
        </button>
      </div>

    </form>
  )
}

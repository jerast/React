import { useEffect } from 'react'
import Swal from 'sweetalert2'
import 'sweetalert2/dist/sweetalert2.min.css'
import { useAuthStore, useForm } from '@/hooks'

const loginFormFields = {
	loginEmail: '',
	loginPassword: '',
}

const signFormFields = {
	signName: '',
	signEmail: '',
	signPassword: '',
	signPassword2: '',
}

export const LoginPage = () => {

	const { startLogin, startSignin, errorMessage } = useAuthStore()

	const { formState: loginFormState, onFormChange: onLoginFormChange, } = useForm( loginFormFields )

	const { formState: signFormState, onFormChange: onSignFormChange, } = useForm( signFormFields )

	const onLoginFormSubmit = async ( event ) => {
		event.preventDefault()

		await startLogin({
			email: loginFormState.loginEmail,
			password: loginFormState.loginPassword,
		})
	}

	const onSignFormSubmit = async ( event ) => {
		event.preventDefault()

		await startSignin({
			name: signFormState.signName,
			email: signFormState.signEmail,
			password: signFormState.signPassword,
			password2: signFormState.signPassword2,
		})
	}

	useEffect(
		() => {
			(errorMessage) && Swal.fire( '¡Login failed!', errorMessage, 'error' )
		}, 
	[errorMessage])

	return (
		<div className="container login-container">
			<div className="row">
				<div className="col-md-6 login-form-1">
					<h3>Ingreso</h3>
					<form onSubmit={ onLoginFormSubmit }>
						<div className="form-group mb-2">
							<input 
								type="email"
								className="form-control"
								placeholder="Correo"
								name="loginEmail"
								value={ loginFormState.loginEmail }
								onChange={ onLoginFormChange }
							/>
						</div>
						<div className="form-group mb-2">
							<input
								type="password"
								className="form-control"
								placeholder="Contraseña"
								name="loginPassword"
								value={ loginFormState.loginPassword }
								onChange={ onLoginFormChange }
							/>
						</div>
						<div className="form-group mb-2">
							<input 
								type="submit"
								className="btnSubmit"
								value="Login" 
							/>
						</div>
					</form>
				</div>

				<div className="col-md-6 login-form-2">
					<h3>Registro</h3>
					<form onSubmit={ onSignFormSubmit }>
						<div className="form-group mb-2">
							<input
								type="text"
								className="form-control"
								placeholder="Nombre"
								name="signName"
								value={ signFormState.signName }
								onChange={ onSignFormChange }
							/>
						</div>
						<div className="form-group mb-2">
							<input
								type="email"
								className="form-control"
								placeholder="Correo"
								name="signEmail"
								value={ signFormState.signEmail }
								onChange={ onSignFormChange }
							/>
						</div>
						<div className="form-group mb-2">
							<input
								type="password"
								className="form-control"
								placeholder="Contraseña"
								name="signPassword"
								value={ signFormState.signPassword }
								onChange={ onSignFormChange }
							/>
						</div>

						<div className="form-group mb-2">
							<input
								type="password"
								className="form-control"
								placeholder="Repita la contraseña" 
								name="signPassword2"
								value={ signFormState.signPassword2 }
								onChange={ onSignFormChange }
							/>
						</div>

						<div className="form-group mb-2">
							<input 
								type="submit" 
								className="btnSubmit" 
								value="Crear cuenta" 
							/>
						</div>
					</form>
				</div>
			</div>
		</div>
	)
}
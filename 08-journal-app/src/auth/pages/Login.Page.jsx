import { useMemo, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link as RouterLink } from 'react-router-dom'
import { Alert, Button, Grid, Link, TextField } from '@mui/material';
import { Google } from '@mui/icons-material';

import { startGoogleSignIn, startLoginWithEmailPassword } from '@/store/auth/auth.Thunks';
import { AuthLayout } from '@/auth/layout';
import { useForm } from '@/hooks/useForm';


const formData = {
	email: '',
	password: '',
}

const formValidations = {
	email: [(value) => value.includes('@'), 'El correo debe tener un @'],
	password: [(value) => value.length >= 6, 'La contraseña debe tener 6 o más caracteres'],
}

export const LoginPage = () => {

	const [ formSubmitting, setFormSubmitting ] = useState(false);

	const { status, errorMessage } = useSelector( (state) => state.auth );
	const dispatch = useDispatch();

	const { 
		formState, email, password, 
		isFormValid, emailValid, passwordValid, 
		onFormChange 
	} = useForm( formData, formValidations );

	const isChecking = useMemo(
		() => status !== "checking", 
	[status]);

	const onFormSubmit = (event) => {
		event.preventDefault();

		setFormSubmitting(true);

		if (!isFormValid) return;

		dispatch( startLoginWithEmailPassword(formState) );
	};

	const onGoogleSignIn = () => {
		dispatch( startGoogleSignIn() );
	};

	return (
		<AuthLayout title="Login">
			<form onSubmit={ onFormSubmit } role="form">
				<Grid container sx={{ mb: 2 }}>

					<Grid item xs={ 12 } sx={{ my: 1 }}>
						<TextField 
							label="Email"
							type="email"
							name="email"
							value={ email }
							onChange={ onFormChange }
							error={ !!emailValid && formSubmitting }
							helperText={ formSubmitting && emailValid }
							fullWidth
						/>
					</Grid>
					<Grid item xs={ 12 } sx={{ my: 1 }}>
						<TextField 
							label="Password"
							type="password"
							name="password"
							value={ password }
							onChange={ onFormChange }
							error={ !!passwordValid && formSubmitting }
							helperText={ formSubmitting && passwordValid }
							fullWidth
							inputProps={{
								'data-testid': 'password'
							}}
						/>
					</Grid>

					<Grid item xs={ 12 } sx={{ my: 2 }} display={ !!errorMessage ? '' : 'none' }>
						<Alert severity='error'>
							{ errorMessage }
						</Alert>
					</Grid>

					<Grid container spacing={ 2 } sx={{ my: 1 }} >
						<Grid item xs={ 12 } sm={ 6 }>
							<Button 
								variant="contained" 
								type="submit" 
								fullWidth
								disabled={ !isChecking }
							>
								Login
							</Button>
						</Grid>
						<Grid item xs={ 12 } sm={ 6 }>
							<Button 
								variant="contained" 
								fullWidth 
								onClick={ onGoogleSignIn }
								disabled={ !isChecking }
								role="google-btn"
							>
								<Google sx={{ mr: 1 }}/>
								Google
							</Button>
						</Grid>
					</Grid>

					<Grid container direction="row" justifyContent="end">
						<Link component={ RouterLink } to="/auth/register">
							Create an account
						</Link>
					</Grid>

				</Grid>
			</form>
		</AuthLayout>
	);
};

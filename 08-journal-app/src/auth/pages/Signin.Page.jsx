import { useMemo, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link as RouterLink } from 'react-router-dom'
import { Alert, Button, Grid, Link, TextField, Typography } from '@mui/material';

import { startCreatingUserWithEmailPassword } from '@/store/auth';
import { AuthLayout } from '@/auth/layout';
import { useForm } from '@/hooks';

const formData = {
	displayName: '',
	email: '',
	password: '',
};

const formValidations = {
	displayName: [(value) => value.length >= 1, 'El nombre es obligatorio.'],
	email: [(value) => value.includes('@'), 'El correo debe tener un @'],
	password: [(value) => value.length >= 6, 'La contraseña debe tener 6 o más caracteres'],
}

export const SigninPage = () => {
	
	const [ formSubmitting, setFormSubmitting ] = useState(false);

	const { status, errorMessage } = useSelector( (state) => state.auth );
	const dispatch = useDispatch();
	
	const { 
		formState, displayName, email, password, 
		isFormValid, displayNameValid, emailValid, passwordValid, 
		onFormChange 
	} = useForm( formData, formValidations );
	
	const isChecking = useMemo(
		() => status !== "checking", 
	[status]);
	
	const onFormSubmit = (event) => {
		event.preventDefault();

		setFormSubmitting(true);

		if (!isFormValid) return;
		
		dispatch( startCreatingUserWithEmailPassword(formState) );
	};

	return (
		<AuthLayout title="Sign In">
			<form onSubmit={ onFormSubmit }>
				<Grid container sx={{ mb: 2 }}>

					<Grid item xs={ 12 } sx={{ my: 1 }}>
						<TextField 
							label="FullName"
							type="text"
							name="displayName"
							value={ displayName }
							onChange={ onFormChange }
							error={ !!displayNameValid && formSubmitting }
							helperText={ formSubmitting && displayNameValid }
							fullWidth
						/>
					</Grid>
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
						/>
					</Grid>

					<Grid item xs={ 12 } sx={{ my: 2 }} display={ !!errorMessage ? '' : 'none' }>
						<Alert severity='error'>
							{ errorMessage }
						</Alert>
					</Grid>

					<Grid item xs={ 12 } sx={{ my: 2 }} >
						<Button 
							variant="contained" 
							fullWidth 
							type="submit" 
							disabled={ !isChecking }
						>
							Sign In
						</Button>
					</Grid>

					<Grid container direction="row" justifyContent="end">
						<Typography sx={{ mr: 1 }}>Do you have an account?</Typography>
						<Link component={ RouterLink } to="/auth/login">
							Login
						</Link>
					</Grid>

				</Grid>
			</form>
		</AuthLayout>		
	);
};

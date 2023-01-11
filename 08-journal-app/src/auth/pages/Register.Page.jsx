import { Button, Grid, Link, TextField, Typography } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom'
import { AuthLayout } from '@/auth';

export const RegisterPage = () => {
	return (
		<AuthLayout title="Register">
			<form>
				<Grid container sx={{ mb: 2 }}>

					<Grid item xs={ 12 } sx={{ my: 1 }}>
						<TextField 
							label="FullName"
							type="text"
							placeholder="FullName"
							fullWidth
						/>
					</Grid>
					<Grid item xs={ 12 } sx={{ my: 1 }}>
						<TextField 
							label="Email"
							type="email"
							placeholder="user@domain.com"
							fullWidth
						/>
					</Grid>
					<Grid item xs={ 12 } sx={{ my: 1 }}>
						<TextField 
							label="Password"
							type="password"
							placeholder="password"
							fullWidth
						/>
					</Grid>

					<Grid item xs={ 12 } sx={{ my: 2 }} >
						<Button variant="contained" fullWidth>
							Login
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

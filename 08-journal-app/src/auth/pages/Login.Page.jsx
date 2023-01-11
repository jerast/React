import { Link as RouterLink } from 'react-router-dom'
import { Button, Grid, Link, TextField } from '@mui/material';
import { Google } from '@mui/icons-material';
import { AuthLayout } from '@/auth';

export const LoginPage = () => {
	return (
		<AuthLayout title="Login">
			<form>
				<Grid container sx={{ mb: 2 }}>

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

					<Grid container spacing={ 2 } sx={{ my: 1 }} >
						<Grid item xs={ 12 } sm={ 6 }>
							<Button variant="contained" fullWidth>
								Login
							</Button>
						</Grid>
						<Grid item xs={ 12 } sm={ 6 }>
							<Button variant="contained" fullWidth>
								<Google sx={{ mr: 1 }}/>Google
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

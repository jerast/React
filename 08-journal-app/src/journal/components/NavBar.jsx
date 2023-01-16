import { useDispatch } from 'react-redux';
import { LogoutOutlined, MenuOutlined } from '@mui/icons-material';
import { AppBar, Grid, IconButton, Toolbar, Typography } from '@mui/material';
import { startLogOut } from '@/store/auth';

export const NavBar = ({ drawerWidth = 240, setMobile }) => {

	const dispatch = useDispatch();

	const onLogout = () => {
		dispatch( startLogOut() );
	};

	return (
		<AppBar 
			position="fixed" 
			sx={{ 
				width: { md: `calc(100% - ${ drawerWidth }px)` },
				ml: { md: `${ drawerWidth }` }
			}}>
			<Toolbar>
				<Grid
					container
					direction="row"
					justifyContent="space-between"
					alignItems="center"
				>
					<IconButton 
						color="inherit"
						onClick={ () => setMobile( state => !state ) }
						sx={{ 
							mr: 2,
							display: { md: 'none' } }}
					>
						<MenuOutlined />
					</IconButton>

					<Typography
						variant="h6"
						noWrap
						component="div"
						sx={{ 
							display: 'block', flexGrow: 1 }}
					>
						JournalApp
					</Typography>
					<IconButton color="inherit" onClick={ onLogout }>
						<LogoutOutlined />
					</IconButton>
				</Grid>
			</Toolbar>
		</AppBar>
	);
};

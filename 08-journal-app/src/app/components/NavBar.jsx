import { useDispatch } from 'react-redux';
import { LogoutOutlined, MenuOutlined } from '@mui/icons-material';
import { AppBar, Grid, IconButton, Toolbar, Typography } from '@mui/material';
import { startLogOut } from '@/store';

export const NavBar = ({ drawerWidth = 240 }) => {

	const dispatch = useDispatch();

	const onLogout = () => {
		dispatch( startLogOut() );
	};

	return (
		<AppBar 
			position="fixed" 
			sx={{ 
				width: { sm: `calc(100% - ${ drawerWidth }px)` },
				ml: { sm: `${ drawerWidth }` }
			}}>
			<Toolbar>
				<IconButton 
					color="inherit"
					sx={{ 
						mr: 2,
						display: { sm: 'none' } }}
				>
					<MenuOutlined />
				</IconButton>

				<Grid
					container
					direction="row"
					justifyContent="space-between"
					alignItems="center"
				>
					<Typography
						variant="h6"
						noWrap
						component="div"
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

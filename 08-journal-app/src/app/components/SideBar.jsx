import { TurnedInNot } from '@mui/icons-material';
import { Box, Divider, Drawer, Grid, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Toolbar, Typography } from '@mui/material';

export const SideBar = ({ drawerWidth = 240 }) => {
	return (
		<Box
			component="nav"
			sx={{
				width: { sm: drawerWidth },
				flexShrink: { sm: 0 }
			}}
		>
			<Drawer
				variant="permanent" // temporary
				open
				sx={{
					display: { xs: 'block' },
					'& .MuiDrawer-paper': { 
						boxSizing: 'border-box',
						width: drawerWidth
					}
				}}
			>
				<Toolbar>
					<Typography
						variant="h6"
						noWrap
						component="div"
					>
						Jose Romero
					</Typography>
				</Toolbar>

				<Divider />

				<List>
					{
						['Enero', 'Febrero', 'Marzo', 'Abril'].map( item => (
							<ListItem key={ item } disablePadding>
								<ListItemButton>
									<ListItemIcon>
										<TurnedInNot />
									</ListItemIcon>
									<Grid container>
										<ListItemText primary={ item } />
										<ListItemText secondary={ 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe, aliquid.' } />
									</Grid>
								</ListItemButton>
							</ListItem>
						))
					}
				</List>
			</Drawer>
		</Box>
	);
};


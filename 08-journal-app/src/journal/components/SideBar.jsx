import { useSelector } from 'react-redux';
import { Box, Divider, Drawer, List, Toolbar, Typography } from '@mui/material';
import { SideBarItem } from '@/journal/components';

export const SideBar = ({ drawerWidth = 240, mobile, setMobile, window }) => {

	const { displayName } = useSelector( state => state.auth );
	const { notes = [] } = useSelector( state => state.journal );

	const drawerContent = (
		<>
			<Toolbar>
				<Typography
					variant="h6"
					noWrap
					component="div"
				>
					{ displayName }	
				</Typography>
			</Toolbar>
			<Divider />
			<List>
				{
					notes.map( note => 
						<SideBarItem key={ note.id } { ...note } /> 
					)
				}
			</List>
		</>
	);

	const container = window !== undefined 
		? () => window().document.body 
		: undefined;

	return (
		<Box
			component="nav"
			sx={{
				width: { md: drawerWidth },
				flexShrink: { md: 0 }
			}}
		>
			<Drawer
				container={ container }
				variant="temporary" // temporary
				open={ mobile }
				onClose={ () => setMobile( !mobile ) }
				ModalProps={{
					keepMounted: true, // Better open performance on mobile.
				}}
				sx={{
					display: { xs: 'block', md: 'none' },
					'& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth }
				}}
			>
				{ drawerContent }
			</Drawer>
			<Drawer
				id="drawer"
				variant="persistent" // temporary
				open
				ModalProps={{
					keepMounted: true, // Better open performance on mobile.
				}}
				sx={{
					display: { xs: 'none', md: 'block' },
					'& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth }
				}}
			>
				{ drawerContent }
			</Drawer>
		</Box>
	);
};


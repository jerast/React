import { useState } from 'react';
import { Box, Toolbar } from '@mui/material';
import { NavBar, NewNoteButton, SideBar } from '@/journal/components';

const drawerWidth = 300;

export const JournalLayout = ({ children }) => {

	const [ movile, setMobile ] = useState( false );

	return (
		<Box sx={{ display: 'flex' }} className="animate__animated animate__fadeIn animate__faster">

			<NavBar drawerWidth={ drawerWidth } setMobile={ setMobile } />
			<SideBar drawerWidth={ drawerWidth } setMobile={ setMobile } mobile={ movile } />

			<Box component="main" sx={{ flexGrow: 1, p: 3 }} >
				<Toolbar />

				{ children }

				<NewNoteButton />
			</Box>
			
		</Box>
	);
};

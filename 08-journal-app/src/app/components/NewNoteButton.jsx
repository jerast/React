import { useDispatch, useSelector } from 'react-redux';
import { AddOutlined } from '@mui/icons-material';
import { IconButton } from '@mui/material';

import { startNewNote } from '@/store';

export const NewNoteButton = () => {

   const { isSaving } = useSelector( state => state.journal );
   const dispatch = useDispatch()

   const onClickNewNote = () => {
      dispatch( startNewNote() );
   }

	return (
		<IconButton
         onClick={ onClickNewNote }
         disabled={ isSaving }
         size="large"
         sx={{
            color: 'white',
            backgroundColor: 'error.main',
            position: 'fixed',
            right: 50,
            bottom: 50,
            ':hover': { 
               backgroundColor: 'error.main',
               opacity: 0.9
            }
         }}
      >
         <AddOutlined sx={{ fontSize: 30 }} />
      </IconButton>
	);
};

import { useDispatch } from 'react-redux';
import { Grid, ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material';
import { TurnedInNot } from '@mui/icons-material';
import { setActiveNote } from '@/store/journal';

export const SideBarItem = ({ id, title, body, date, imageURLs }) => {

   const distpatch = useDispatch();

   const onClickItem = () => {
      distpatch( setActiveNote({ id, title, body, date, imageURLs }) );
   }

   return (
      <ListItem disablePadding className="animate__animated animate__fadeIn animate__faster">
         <ListItemButton onClick={ onClickItem }>
            <ListItemIcon>
               <TurnedInNot />
            </ListItemIcon>
            <Grid container>
               <ListItemText 
                  primary={ title }
                  sx={{ 
                     '& > span': { 
                        width: '200px', 
                        overflow: 'hidden', 
                        whiteSpace: 'nowrap', 
                        textOverflow: 'ellipsis'
                     } 
                  }}
               />
               <ListItemText secondary={ body } />
            </Grid>
         </ListItemButton>
      </ListItem>
   );
};
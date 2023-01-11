import { createTheme } from '@mui/material';
import { red } from '@mui/material/colors';

export const purpleTheme = createTheme({

	// TODO: implement dark mode
	// find resource at: https://mui.com/material-ui/customization/dark-mode/

	palette: {
		// mode: 'dark', 
		primary: {
			main: '#262254'
		},
		secondary: {
			main: '#543884'
		},
		error: {
			main: red.A400
		}
	}

});
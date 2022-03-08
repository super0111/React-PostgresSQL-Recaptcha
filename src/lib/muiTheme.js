import { createTheme, responsiveFontSizes } from '@mui/material/styles';

let muiTheme = createTheme({
  typography: {
    fontFamily: ['Poppins', 'Arial', 'sans-serif'].join(','),
  },
  palette: {
    mode: 'dark',
  },
});

muiTheme = responsiveFontSizes(muiTheme);

export default muiTheme;

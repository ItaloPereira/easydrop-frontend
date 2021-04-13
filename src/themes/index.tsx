import { createMuiTheme } from '@material-ui/core/styles';

import { brandColors } from './colors';

export const themeDefault = createMuiTheme({
  palette: {
    primary: {
      main: brandColors.primary,
    },
    coal: {
      100: '#212121',
    },
    common: {
      black: '#000',
      white: '#FFF',
    },
  },
  typography: {
    fontFamily: '"hind_vadodaralight"',
  },
  shape: {
    borderRadius: 4,
  },
  overrides: {
    MuiTextField: {
      root: {
        '& .Mui-focused': {
          '& .MuiInputAdornment-positionStart svg': {
            color: brandColors.primary,
          },
        },
      },
    },
  },
});

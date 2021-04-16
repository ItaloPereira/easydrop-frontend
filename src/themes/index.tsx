import { createMuiTheme } from '@material-ui/core/styles';

import { brandColors, brandVariants } from './colors';

export const themeDefault = createMuiTheme({
  palette: {
    primary: {
      main: brandColors.primary,
      light: brandVariants.primaryLight,
    },
    coal: brandVariants.coal,
    common: {
      black: '#000',
      white: '#FFF',
    },
  },
  typography: {
    fontFamily: '"hind_vadodara"',
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
    MuiButton: {
      containedPrimary: {
        '&.Mui-disabled': {
          backgroundColor: brandVariants.primaryLight,
        },
      },
    },
  },
});

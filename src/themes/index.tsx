import { createMuiTheme } from '@material-ui/core/styles';

import { brandColors, brandVariants, commonColors } from './colors';

export const themeDefault = createMuiTheme({
  palette: {
    primary: {
      main: brandColors.primary,
      light: brandVariants.primaryLight,
    },
    coal: brandVariants.coal,
    common: commonColors,
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
        // '& .MuiFormLabel-root': {
        //   color: brandVariants.coal[90],
        // },

        // '& .MuiInputAdornment-positionStart svg': {
        //   color: brandVariants.coal[90],
        // },

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

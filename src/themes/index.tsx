import { createMuiTheme } from '@material-ui/core/styles';

import { brandColors } from './colors';

export const themeDefault = createMuiTheme({
  palette: {
    primary: {
      main: brandColors.primary,
    },
  },
  typography: {
    fontFamily: '"hind_vadodaralight"',
  },
  shape: {
    borderRadius: 4,
  },
});

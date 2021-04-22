import { Button, withStyles } from '@material-ui/core';

export const ErrorButton = withStyles((theme) => ({
  contained: {
    backgroundColor: theme.palette.error.main,
    color: theme.palette.common.white,

    '&:hover': {
      backgroundColor: theme.palette.error.dark,
    },
  },
}))(Button);

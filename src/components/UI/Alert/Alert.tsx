import { withStyles } from '@material-ui/core';
import { Alert } from '@material-ui/lab';

const CustomAlert = withStyles((theme) => ({
  root: {
    borderRadius: theme.shape.borderRadius * 1,
    padding: theme.spacing(2),

    '&.MuiAlert-filledError': {
      borderRadius: theme.shape.borderRadius * 1,
    },
  },
  icon: {
    padding: 0,
    marginRight: theme.spacing(1),
  },
  message: {
    padding: 0,

    '& p': {
      color: theme.palette.marble[100],
    },
  },
}))(Alert);

export default CustomAlert;

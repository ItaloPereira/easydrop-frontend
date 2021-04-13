import { withStyles } from '@material-ui/core';
import { Alert } from '@material-ui/lab';

const CustomAlert = withStyles((theme) => ({
  root: {
    borderRadius: theme.shape.borderRadius * 2,
    padding: theme.spacing(1, 2),
  },
  message: {
    padding: 0,
  },
  icon: {
    alignItems: 'center',
  },
}))(Alert);

export const WarningAlert = withStyles((theme) => ({
  root: {
    backgroundColor: '#F6A200',
  },
}))(CustomAlert);

export const SuccessAlert = withStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.success.dark,

    '& p': {},
  },
}))(CustomAlert);

export const ErrorAlert = withStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.error.main,

    '& p': {},
  },
}))(CustomAlert);

import { Outlet } from 'react-router-dom';

import { Grid, makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    height: '100vh',
    width: '100vw',
    backgroundColor: theme.palette.coal[100],
    padding: theme.spacing(2),
    overflowY: 'auto',
    justifyContent: 'center',
    alignItems: 'center',
  },
  content: {
    padding: `${theme.spacing(1)}px 0`,
    width: '448px',
  },
}));

const AuthLayout = () => {
  const classes = useStyles();

  return (
    <Grid container className={classes.root}>
      <Grid item className={classes.content}>
        <Outlet />
      </Grid>
    </Grid>
  );
};

export default AuthLayout;

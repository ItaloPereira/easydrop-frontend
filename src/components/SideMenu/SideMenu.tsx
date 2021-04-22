import type { FunctionComponent } from 'react';

import { Box, Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import PowerSettingsNewIcon from '@material-ui/icons/PowerSettingsNew';

import EasydropLogo from 'assets/images/easydrop.png';
import { useAppDispatch } from 'hooks/redux';
import { AuthActions } from 'store/reducers/auth';

import SideMenuNavigation from './Navigation';

const useStyles = makeStyles((theme) => {
  return {
    root: {
      width: '100%',
      boxShadow: `-2px -1px 13px -3px ${theme.palette.coal[30]}`,
      backgroundColor: theme.palette.common.white,
      display: 'flex',
      flexDirection: 'column',
    },
    navigationContent: {
      padding: theme.spacing(0, 1),
    },
    headerLogo: {
      display: 'block',
      width: 175,
      height: 49,
      margin: `${theme.spacing(4)}px auto`,
    },
    logoutContainer: {
      display: 'flex',
      justifyContent: 'center',
      marginTop: 'auto',
      marginBottom: theme.spacing(2),
      margin: `auto ${theme.spacing(1)}px ${theme.spacing(2)}px`,
    },
  };
});

const SideMenu: FunctionComponent = () => {
  const classes = useStyles();
  const dispatch = useAppDispatch();

  return (
    <Box className={classes.root}>
      <Box component="h1" my={0}>
        <img src={EasydropLogo} alt="Easydrop" className={classes.headerLogo} />
      </Box>
      <Box className={classes.navigationContent}>
        <SideMenuNavigation />
      </Box>
      <Box className={classes.logoutContainer}>
        <Button
          size="large"
          aria-label="botão de sair"
          onClick={() => dispatch(AuthActions.logout())}
          fullWidth
          startIcon={<PowerSettingsNewIcon />}
        >
          Sair
        </Button>
      </Box>
    </Box>
  );
};

export default SideMenu;

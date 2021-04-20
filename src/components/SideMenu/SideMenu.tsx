import type { FunctionComponent } from 'react';

import { Box } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import EasydropLogo from 'assets/images/easydrop.png';

import SideMenuNavigation from './Navigation';

const useStyles = makeStyles((theme) => {
  return {
    root: {
      width: '100%',
      boxShadow: `-2px -1px 13px -3px ${theme.palette.coal[30]}`,
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
  };
});

const SideMenu: FunctionComponent = () => {
  const classes = useStyles();

  return (
    <Box className={classes.root}>
      <Box component="h1" my={0}>
        <img src={EasydropLogo} alt="Easydrop" className={classes.headerLogo} />
      </Box>
      <Box className={classes.navigationContent}>
        <SideMenuNavigation />
      </Box>
    </Box>
  );
};

export default SideMenu;

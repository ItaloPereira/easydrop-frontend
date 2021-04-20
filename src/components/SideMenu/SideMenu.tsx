import type { FunctionComponent } from 'react';

import { Box } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

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
  };
});

const SideMenu: FunctionComponent = () => {
  const classes = useStyles();

  return (
    <Box className={classes.root}>
      <Box className={classes.navigationContent}>
        <SideMenuNavigation />
      </Box>
    </Box>
  );
};

export default SideMenu;

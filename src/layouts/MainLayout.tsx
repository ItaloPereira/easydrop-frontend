import { Outlet } from 'react-router-dom';

import { Box, makeStyles } from '@material-ui/core';

import SideMenu from 'components/SideMenu';
import Typography from 'components/UI/Typography';

const SIDE_NAV_WIDTH = '256px';

const useStyles = makeStyles((theme) => ({
  container: {
    backgroundColor: theme.palette.background.default,
    display: 'flex',
    flexDirection: 'column',
    height: '100vh',
    overflowY: 'auto',
  },
  versionContainer: {
    display: 'flex',
    justifyContent: 'flex-end',
    alignItems: 'center',
    height: '40px',
    padding: theme.spacing(0, 2, 0, 0),
    backgroundColor: theme.palette.primary.main,

    '& span': {
      color: theme.palette.common.white,
    },
  },
  sideNavContainer: {
    width: SIDE_NAV_WIDTH,
    height: '100%',
    display: 'flex',
    position: 'fixed',
  },
  contentContainer: {
    display: 'flex',
    flexGrow: 1,
    borderTopLeftRadius: theme.shape.borderRadius * 5,
    padding: theme.spacing(5, 4),
    marginLeft: SIDE_NAV_WIDTH,
  },
}));

const MainLayout = () => {
  const classes = useStyles();
  return (
    <Box className={classes.container}>
      <Box className={classes.versionContainer}>
        <Typography variant="bodySemibold">v.0.1</Typography>
      </Box>
      <Box display="flex" flexGrow={1}>
        <Box className={classes.sideNavContainer}>
          <SideMenu />
        </Box>
        <Box className={classes.contentContainer}>
          <Outlet />
        </Box>
      </Box>
    </Box>
  );
};

export default MainLayout;

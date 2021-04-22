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
    minHeight: '40px',
    height: '40px',
    padding: theme.spacing(0, 2, 0, 0),
    backgroundColor: theme.palette.primary.main,
    position: 'fixed',
    top: 0,
    right: 0,
    left: 0,
    zIndex: 1,

    '& span': {
      color: theme.palette.common.white,
    },
  },
  sideNavContainer: {
    width: SIDE_NAV_WIDTH,
    height: 'calc(100% - 40px)',
    display: 'flex',
    position: 'fixed',
    marginTop: theme.spacing(5),
  },
  contentMargin: {
    marginLeft: SIDE_NAV_WIDTH,
    width: '100%',
  },
  contentContainer: {
    display: 'flex',
    flexGrow: 1,
    borderTopLeftRadius: theme.shape.borderRadius * 5,
    padding: theme.spacing(5, 4),
    maxWidth: '1125px',
    margin: `${theme.spacing(5)}px auto 0`,
  },
}));

const MainLayout = () => {
  const classes = useStyles();
  return (
    <Box className={classes.container}>
      <Box className={classes.versionContainer}>
        <Typography variant="bodySemibold">v0.1.0</Typography>
      </Box>
      <Box display="flex" flexGrow={1}>
        <Box className={classes.sideNavContainer}>
          <SideMenu />
        </Box>
        <Box className={classes.contentMargin}>
          <Box className={classes.contentContainer}>
            <Outlet />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default MainLayout;

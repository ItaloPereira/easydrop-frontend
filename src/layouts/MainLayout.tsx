import { Outlet } from 'react-router-dom';

import { Box, makeStyles, Typography } from '@material-ui/core';

import SideMenu from 'components/SideMenu';

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
  const styles = useStyles();
  return (
    <Box className={styles.container}>
      <Box display="flex" flexGrow={1}>
        <Box className={styles.sideNavContainer}>
          <SideMenu />
        </Box>
        <Box className={styles.contentContainer}>
          <Outlet />
        </Box>
      </Box>
    </Box>
  );
};

export default MainLayout;

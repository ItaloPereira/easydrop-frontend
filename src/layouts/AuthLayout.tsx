import { Outlet } from 'react-router-dom';

import { Box, makeStyles } from '@material-ui/core';

import authimage from 'assets/images/authImage.png';
import Typography from 'components/UI/Typography';

const useStyles = makeStyles((theme) => ({
  container: {
    backgroundColor: '#0000',
    display: 'flex',
    height: '100vh',
    overflowY: 'auto',
  },
  imageContainer: {
    flex: 1,
    backgroundImage: `url(${authimage})`,
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    [theme.breakpoints.down('sm')]: {
      display: 'none',
    },
  },
  authContainer: {
    backgroundColor: '#0000',
    height: '100vh',
    minWidth: 426,
    flex: 0.5,
    [theme.breakpoints.down('sm')]: {
      flex: 1,
    },
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: theme.spacing(0, 6),
  },
  header: {
    margin: theme.spacing(5, 0),
  },
  content: {
    display: 'flex',
    flex: 1,
    width: '100%',
    justifyContent: 'center',
  },
  footer: {
    borderTop: `1px solid #0000`,
    width: '100%',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: theme.spacing(4, 0),
  },
  footerText: {
    color: '#0000',
    fontSize: '0.875rem',
    lineHeight: '1.125rem',
  },
}));

const AuthLayout = () => {
  const styles = useStyles();
  return (
    <Box className={styles.container}>
      <Box className={styles.imageContainer} />
      <Box className={styles.authContainer}>
        <Box className={styles.header}>LOGO</Box>
        <Box className={styles.content}>
          <Outlet />
        </Box>
        <Box className={styles.footer}>
          <Typography className={styles.footerText} variant="captionWeb">
            Powered by EasyDrop Pagamentos
          </Typography>
          <Typography className={styles.footerText} variant="captionWeb">
            v 0.0.0
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default AuthLayout;

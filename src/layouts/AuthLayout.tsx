import { Outlet } from 'react-router-dom';

import { Box, makeStyles } from '@material-ui/core';

import authimage from 'assets/images/authImage.png';
import { ReactComponent as PayGoLogo } from 'assets/images/paygo-logo.svg';
import Typography from 'components/UI/Typography';

const useStyles = makeStyles((theme) => ({
  container: {
    backgroundColor: theme.palette.carbon[10],
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
    backgroundColor: theme.palette.marble[100],
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
    borderTop: `1px solid ${theme.palette.carbon[35]}`,
    width: '100%',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: theme.spacing(4, 0),
  },
  footerText: {
    color: theme.palette.carbon[35],
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
        <Box className={styles.header}>
          <PayGoLogo />
        </Box>
        <Box className={styles.content}>
          <Outlet />
        </Box>
        <Box className={styles.footer}>
          <Typography className={styles.footerText} variant="captionWeb">
            Powered by PayGo Pagamentos
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

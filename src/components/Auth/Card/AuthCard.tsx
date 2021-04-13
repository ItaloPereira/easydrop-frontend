import type { FunctionComponent } from 'react';

import { Card as MUICard, Box } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import EasydropLogo from 'assets/images/easydrop.png';

const useStyles = makeStyles((theme) => ({
  card: {
    display: 'grid',
    gap: theme.spacing(5),
    padding: theme.spacing(5),
    backgroundColor: theme.palette.common.white,
    borderRadius: 16,
  },
  headerLogo: {
    display: 'block',
    width: 200,
    height: 56,
    margin: '0 auto',
  },
}));

const PublicRouteCard: FunctionComponent = ({ children }) => {
  const classes = useStyles();

  return (
    <MUICard className={classes.card}>
      <Box component="h1" my={0}>
        <img src={EasydropLogo} alt="Easydrop" className={classes.headerLogo} />
      </Box>
      {children}
    </MUICard>
  );
};

export default PublicRouteCard;

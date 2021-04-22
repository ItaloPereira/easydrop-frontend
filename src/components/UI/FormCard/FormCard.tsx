import type { FunctionComponent } from 'react';

import { Card as MUICard } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  card: {
    display: 'grid',
    gap: theme.spacing(5),
    padding: theme.spacing(5),
    backgroundColor: theme.palette.common.white,
    borderRadius: 16,
  },
}));

const PublicRouteCard: FunctionComponent = ({ children }) => {
  const classes = useStyles();

  return <MUICard className={classes.card}>{children}</MUICard>;
};

export default PublicRouteCard;

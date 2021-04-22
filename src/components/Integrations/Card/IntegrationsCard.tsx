import type { FunctionComponent } from 'react';

import { Card as MUICard } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

type Props = {
  disabled?: boolean;
};

const useStyles = makeStyles((theme) => ({
  card: {
    display: 'grid',
    gap: theme.spacing(3),
    padding: theme.spacing(3),
    backgroundColor: theme.palette.common.white,
    borderRadius: 16,
  },
  disabled: {
    pointerEvents: 'none',
    opacity: 0.5,
  },
}));

const IntegrationsCard: FunctionComponent<Props> = ({ children, disabled }) => {
  const classes = useStyles();

  return <MUICard className={`${classes.card} ${disabled && classes.disabled}`}>{children}</MUICard>;
};

export default IntegrationsCard;

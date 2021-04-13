import type { FunctionComponent } from 'react';

import { Box } from '@material-ui/core';
import { makeStyles, useTheme } from '@material-ui/core/styles';

import Typography from 'components/UI/Typography';

const useStyles = makeStyles((theme) => ({
  badge: {
    width: 8,
    height: 8,
    borderRadius: 100,
    marginRight: theme.spacing(1),
  },
}));

type Props = {
  clientsStatsData: any;
};

const HomeClientsStats: FunctionComponent<Props> = ({ clientsStatsData }) => {
  const classes = useStyles();
  const theme = useTheme();
  return (
    <Box display="flex" flexDirection="column">
      <Typography variant="captionWeb">Total: {clientsStatsData.total}</Typography>
      <Box display="flex" flexDirection="column" mt={5}>
        <Typography variant="homeClientsCardHeading">{clientsStatsData.active}</Typography>
        <Box display="flex" alignItems="center">
          <span className={classes.badge} style={{ backgroundColor: theme.palette.primary.light }} />
          <Typography variant="homeCardLabel">Ativos</Typography>
        </Box>
      </Box>
      <Box display="flex" flexDirection="row" justifyContent="space-between" alignItems="center" mt={7}>
        <Box display="flex" alignItems="center">
          <Typography variant="captionWeb">
            <strong>{clientsStatsData.underAnalysis}</strong> em análise
          </Typography>
        </Box>
        <Box display="flex" alignItems="center">
          <span className={classes.badge} style={{ backgroundColor: theme.palette.primary.main }} />
          <Typography variant="captionWeb">
            <strong>{clientsStatsData.inactive}</strong> inativos
          </Typography>
        </Box>
        <Box display="flex" alignItems="center">
          <span className={classes.badge} style={{ backgroundColor: theme.palette.error.main }} />
          <Typography variant="captionWeb">
            <strong>{clientsStatsData.blocked}</strong> bloqueados
          </Typography>
        </Box>
        <Box display="flex" alignItems="center">
          <Typography variant="captionWeb">
            <strong>{clientsStatsData.cancelled}</strong> cancelados
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default HomeClientsStats;

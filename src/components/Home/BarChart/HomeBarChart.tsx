import { FunctionComponent } from 'react';

import { Box } from '@material-ui/core';
import { useTheme, makeStyles } from '@material-ui/core/styles';

import Typography from 'components/UI/Typography';
import helpersFormatters from 'helpers/formatters';
// import { BarChart, Bar, XAxis, YAxis, ResponsiveContainer, CartesianGrid } from 'recharts';

const useStyles = makeStyles((theme) => ({
  legend: {},
  badge: {
    width: 8,
    height: 8,
    borderRadius: 100,
    marginRight: theme.spacing(1),
  },
  chart: {
    marginTop: theme.spacing(3),
  },
}));

type Props = {
  chartData: any;
};

const HomeBarChart: FunctionComponent<Props> = ({ chartData }) => {
  const classes = useStyles();
  const theme = useTheme();
  const renderTick = ({ x, y, payload }: any) => {
    return (
      <text fontFamily="hind_vadodarabold" fontSize="12" x={x - 50} y={y} textAnchor="left">
        {helpersFormatters.formatAmountInFull(payload.value)}
      </text>
    );
  };
  return (
    <Box
      display="flex"
      alignItems="center"
      justifyContent="center"
      flexDirection="column"
      mt={2}
      height={200}
      width="100%"
    >
      <Box display="flex" flexDirection="row" width="100%" justifyContent="flex-end" alignItems="start" mt={-6}>
        <Box display="flex" alignItems="center" marginRight={4}>
          <Typography variant="captionWeb">{chartData.pastYearLabel}</Typography>
        </Box>
        <Box display="flex" alignItems="center">
          <span className={classes.badge} style={{ backgroundColor: theme.palette.primary.main }} />
          <Typography variant="captionWeb">{chartData.actualYearLabel}</Typography>
        </Box>
      </Box>
      {/* <ResponsiveContainer width="98%">
        <BarChart height={200} width={500} data={chartData.data} className={classes.chart}>
          <CartesianGrid vertical={false} />
          <XAxis dataKey="name" />
          <YAxis tickLine={false} axisLine={false} tick={renderTick} tickMargin={4} />
          <Bar dataKey="pastYear" fill={theme.palette.carbon[10]} minPointSize={5} barSize={5} radius={[8, 8, 0, 0]} />
          <Bar
            dataKey="actualYear"
            fill={theme.palette.primary.main}
            minPointSize={5}
            barSize={5}
            radius={[8, 8, 0, 0]}
          />
        </BarChart>
      </ResponsiveContainer> */}
    </Box>
  );
};

export default HomeBarChart;

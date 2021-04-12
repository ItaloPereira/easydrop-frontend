import type { FunctionComponent } from 'react';
import { useCallback, useState } from 'react';

import { Box, List, ListItem, ListItemText } from '@material-ui/core';
import { useTheme, makeStyles } from '@material-ui/core/styles';

// import { Cell, Pie, PieChart, Sector, ResponsiveContainer } from 'recharts';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    width: '75%',
    justifyContent: 'space-between',
    [theme.breakpoints.down('xs')]: {
      justifyContent: 'space-around',
    },
  },
  listContent: {
    display: 'flex',
    flexDirection: 'column',
  },
  badge: {
    width: 8,
    height: 8,
    borderRadius: 100,
    marginRight: theme.spacing(2),
  },
}));

type Props = {
  chartData: any[];
};

const HomePieChart: FunctionComponent<Props> = ({ chartData }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const classes = useStyles();
  const theme = useTheme();
  const COLORS = [
    theme.palette.primary.main,
    theme.palette.carbon[100],
    theme.palette.carbon[60],
    theme.palette.carbon[20],
  ];
  const onPieEnter = useCallback(
    (_, index) => {
      setActiveIndex(index);
    },
    [setActiveIndex],
  );

  const renderActiveShape = (props: any) => {
    const { cx, cy, innerRadius, outerRadius, startAngle, endAngle, fill } = props;

    return (
      <p>eu to trajadin de mengo, tenis da nike no pé e boné da lala vermelho, do rio grande do sul</p>
      // <g>
      //   <Sector
      //     cx={cx}
      //     cy={cy}
      //     cornerRadius={15}
      //     innerRadius={innerRadius}
      //     outerRadius={outerRadius}
      //     startAngle={startAngle}
      //     endAngle={endAngle}
      //     fill={fill}
      //   />
      // </g>
    );
  };

  const renderCustomizedLabel = (props: any) => {
    const { cx, cy, midAngle, innerRadius, outerRadius, percent } = props;

    const RADIAN = Math.PI / 180;
    const radius = innerRadius + (outerRadius - innerRadius) * 2;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);

    return (
      <text x={x} y={y} fill="#242424" fontSize="16px" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
        {`${(percent * 100).toFixed(0)}%`}
      </text>
    );
  };

  return (
    <Box display="flex" className={classes.root} flexDirection="row" height={200} mt={3} alignItems="center">
      {/* <ResponsiveContainer width="75%">
        <PieChart>
          <Pie
            activeIndex={activeIndex}
            activeShape={renderActiveShape}
            cornerRadius={99999}
            paddingAngle={2}
            data={chartData}
            cx={110}
            cy={100}
            innerRadius={68}
            outerRadius={80}
            startAngle={-170}
            endAngle={190}
            dataKey="value"
            onMouseEnter={onPieEnter}
            label={renderCustomizedLabel}
            labelLine={false}
          >
            {chartData.map((entry, index) => (
              <Cell key={entry.key} fill={COLORS[index]} />
            ))}
          </Pie>
        </PieChart>
      </ResponsiveContainer> */}
      <List className={classes.listContent}>
        {chartData.map((entry, index) => (
          <ListItem key={entry.key}>
            <span className={classes.badge} style={{ backgroundColor: COLORS[index] }} />
            <ListItemText primary={entry.name} />
          </ListItem>
        ))}
      </List>
    </Box>
  );
};

export default HomePieChart;

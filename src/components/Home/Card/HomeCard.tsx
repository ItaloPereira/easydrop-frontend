import type { FunctionComponent } from 'react';
import React from 'react';

import { Box, Card } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import HelpOutlineIcon from '@material-ui/icons/HelpOutline';

import Typography from 'components/UI/Typography';

const useStyles = makeStyles((theme) => ({
  '@global': {
    '*::-webkit-scrollbar': {
      width: 4,
    },
    '*::-webkit-scrollbar-track': {
      display: 'none',
    },
    '*::-webkit-scrollbar-thumb': {
      backgroundColor: '#757575',
      borderRadius: 2,
    },
  },
  root: {
    height: 300,
    overflow: 'auto',
    listStyle: 'none',
  },
  titleContainer: {
    display: 'flex',
    alignItems: 'center',
  },
  iconContainer: {
    marginLeft: theme.spacing(1),
    display: 'flex',
    alignItems: 'center',

    '& svg': {
      width: 18,
      height: 18,
    },
  },
}));

type Props = {
  title: string;
};

const HomeCard: FunctionComponent<Props> = ({ children, title }) => {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <Box className={classes.titleContainer}>
        <Typography variant="bodyWeb">{title}</Typography>
        <Box className={classes.iconContainer}>
          <HelpOutlineIcon fontSize="small" />
        </Box>
      </Box>
      <Box>{children}</Box>
    </Card>
  );
};

export default HomeCard;

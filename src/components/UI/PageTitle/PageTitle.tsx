import type { FunctionComponent, ReactElement } from 'react';
import React from 'react';

import { Box } from '@material-ui/core';
import type { SvgIconTypeMap } from '@material-ui/core';
import type { OverridableComponent } from '@material-ui/core/OverridableComponent';
import { makeStyles } from '@material-ui/core/styles';

import Typography from 'components/UI/Typography';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  iconTextContainer: {
    display: 'flex',
    alignItems: 'baseline',
  },
  gridGap: {
    display: 'grid',
    gap: theme.spacing(1, 0),
  },
  leftIcon: {
    marginRight: theme.spacing(3),
  },
  rightContainer: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  notificationContainer: {
    display: 'flex',
    alignSelf: 'flex-end',
  },
  notificationButton: {
    // background: theme.palette.carbon[100],
    width: 32,
    height: 32,
    '&:hover': {
      // background: theme.palette.carbon[100],
    },
    '& svg': {
      // color: theme.palette.marble[100],
    },
  },
}));

type Props = {
  title: string;
  subtitle: string;
  Icon: OverridableComponent<SvgIconTypeMap<{}, 'svg'>>;
};

const PageTitle: FunctionComponent<Props> = ({ title, subtitle, Icon }): ReactElement => {
  const classes = useStyles();

  return (
    <>
      <Box className={classes.root}>
        <Box className={classes.iconTextContainer}>
          <Icon className={classes.leftIcon} />
          <Box className={classes.gridGap}>
            <Box>
              <Typography variant="headerWebBold">{title}</Typography>
            </Box>
            <Box>
              <Typography variant="bodyWeb">{subtitle}</Typography>
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default PageTitle;

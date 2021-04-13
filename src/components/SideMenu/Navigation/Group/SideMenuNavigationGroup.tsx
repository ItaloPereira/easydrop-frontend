import React from 'react';
import type { FunctionComponent } from 'react';

import type { Routes } from '@portal-types/routes';

import { List } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import Typography from 'components/UI/Typography';

import SideMenuNavigationGroupItem from './Item/SideMenuNavigationGroupItem';

type Props = {
  groupName: string;
  routes: Routes;
  location: string;
};

const useStyles = makeStyles((theme) => ({
  subheader: {
    margin: theme.spacing(0, 0, 2, 3),
    // color: theme.palette.carbon[90],
  },
  group: {
    marginBottom: theme.spacing(2),
  },
}));

const SideMenuNavigationGroup: FunctionComponent<Props> = ({ routes, groupName, location }) => {
  const classes = useStyles();
  return (
    <>
      <List disablePadding className={classes.group}>
        <Typography variant="captionWeb" component="header" className={classes.subheader}>
          {groupName}
        </Typography>
        {routes.map((route) => (
          <SideMenuNavigationGroupItem key={route.title} item={route} active={location === route.path} />
        ))}
      </List>
    </>
  );
};

export default SideMenuNavigationGroup;

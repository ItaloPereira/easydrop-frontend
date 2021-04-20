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
    marginBottom: theme.spacing(2),
    display: 'block',
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
        <Typography variant="labelUppercaseMediumBold" className={classes.subheader}>
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

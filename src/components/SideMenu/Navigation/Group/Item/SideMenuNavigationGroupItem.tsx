import type { FunctionComponent } from 'react';
import { Link as RouterLink } from 'react-router-dom';

import type { RouteItem } from '@portal-types/routes';

import { ListItem } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import Typography from 'components/UI/Typography';

const useStyles = makeStyles((theme) => ({
  listItem: {
    position: 'relative',
    padding: 0,
  },
  link: {
    display: 'flex',
    alignItems: 'center',
    borderRadius: theme.shape.borderRadius,
    marginBottom: theme.spacing(1),
    padding: theme.spacing(1, 2),
    width: '100%',
    textDecoration: 'none',
    color: theme.palette.coal[70],

    '&:hover': {
      backgroundColor: theme.palette.coal[10],
    },

    '&[data-active="true"]': {
      backgroundColor: theme.palette.coal[10],
      color: theme.palette.coal[100],

      '& span': {
        color: theme.palette.coal[100],
      },
    },

    '& span': {
      color: theme.palette.coal[70],
    },
  },
  itemIcon: {
    minWidth: 0,
    marginRight: theme.spacing(1),
  },
}));

type Props = {
  item: RouteItem;
  active: boolean;
};

const SideMenuNavigationGroupItem: FunctionComponent<Props> = ({ item, active }) => {
  const { path, title, icon: Icon } = item;
  const classes = useStyles();
  return (
    <ListItem className={classes.listItem}>
      <RouterLink to={path} data-active={active} className={classes.link}>
        <Icon fontSize="small" className={classes.itemIcon} />
        <Typography variant="bodySemibold">{title}</Typography>
      </RouterLink>
    </ListItem>
  );
};

export default SideMenuNavigationGroupItem;

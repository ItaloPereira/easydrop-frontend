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
    borderRadius: `0 ${theme.shape.borderRadius * 2}px ${theme.shape.borderRadius * 2}px 0`,
    color: theme.palette.carbon[90],
    marginBottom: theme.spacing(1),
    padding: theme.spacing(0, 2, 0, 3),
    height: 48,
    width: 224,
    textDecoration: 'none',
    '&:focus': {
      backgroundColor: theme.palette.primary.main,
    },
    '&[data-active="true"]': {
      backgroundColor: theme.palette.primary.main,
      '&::before': {
        position: 'absolute',
        left: 0,
        backgroundColor: theme.palette.carbon[90],
        width: 4,
        height: 48,
        content: '""',
      },
    },
  },
  itemIcon: {
    minWidth: 0,
    marginRight: theme.spacing(1),
    color: theme.palette.carbon[90],
  },
  typography: {
    color: theme.palette.carbon[90],
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
        <Typography className={classes.typography} variant="navigationItemWebBold">
          {title}
        </Typography>
      </RouterLink>
    </ListItem>
  );
};

export default SideMenuNavigationGroupItem;

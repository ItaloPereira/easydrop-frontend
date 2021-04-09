import { FunctionComponent } from 'react';

import { Box, Button, Card, Drawer, IconButton, List, ListItem, ListSubheader, makeStyles } from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';

import Typography from 'components/UI/Typography';
import { formatRelativeDate } from 'helpers/date/date';

// eslint-disable-next-line import/extensions
import data from './mock.json';

const useStyles = makeStyles((theme) => ({
  drawerPaper: {
    borderTopLeftRadius: theme.shape.borderRadius * 4,
    overflow: 'hidden',
  },
  contentContainer: {
    display: 'flex',
    flexDirection: 'column',
    overflow: 'auto',
  },
  notificationTitle: {
    padding: theme.spacing(4, 2, 3, 2),
  },
  notificationList: {
    padding: theme.spacing(0, 2),
    overflow: 'auto',
  },
  notificationGroupList: {
    paddingBottom: theme.spacing(1),
  },
  notificationGroupSubheader: {
    paddingBottom: theme.spacing(1),
    backgroundColor: theme.palette.background.paper,
  },
  notificationContainer: {
    marginBottom: theme.spacing(2),
    padding: 0,
  },
  eraseNotificationButton: {
    height: '0.5rem',
    width: '0.5rem',
    '& > span > svg': {
      fontSize: '1rem',
    },
  },
  notificationCard: {
    width: '100%',
    display: 'grid',
    padding: theme.spacing(3),
    gap: theme.spacing(2),
  },
}));

type Props = {
  open: boolean;
  onClose: () => void;
};

const DrawerNotifications: FunctionComponent<Props> = ({ open, onClose }) => {
  const classes = useStyles();
  return (
    <Drawer onClose={onClose} PaperProps={{ className: classes.drawerPaper }} open={open} anchor="right">
      <Box className={classes.contentContainer}>
        <Box display="flex" marginTop={2} marginLeft={2}>
          <IconButton onClick={onClose}>
            <CloseIcon color="secondary" />
          </IconButton>
        </Box>
        <Box className={classes.notificationTitle}>
          <Typography variant="subtitleWebBold">Central de notificações</Typography>
        </Box>
        <List className={classes.notificationList}>
          {data.groups.map((dayGroup) => {
            return (
              <List
                className={classes.notificationGroupList}
                key={dayGroup.date}
                subheader={
                  <ListSubheader className={classes.notificationGroupSubheader} disableGutters>
                    <Typography variant="homePageNotificationGroupDayTitle">
                      {formatRelativeDate(dayGroup.date)}
                    </Typography>
                  </ListSubheader>
                }
              >
                {dayGroup.notifications.map((notification) => (
                  <ListItem className={classes.notificationContainer} disableGutters key={notification.id}>
                    <Card className={classes.notificationCard} variant="outlined">
                      <Box position="absolute" top={4} right={4}>
                        <IconButton className={classes.eraseNotificationButton}>
                          <CloseIcon color="secondary" />
                        </IconButton>
                      </Box>
                      <Typography variant="homePageNotificationTitle">{notification.title}</Typography>
                      <Typography variant="homePageNotificationContent">{notification.content}</Typography>
                      {notification.action ? (
                        <Box>
                          <Button href={notification.action.link} target="_blank" color="primary" variant="contained">
                            {notification.action.content}
                          </Button>
                        </Box>
                      ) : null}
                    </Card>
                  </ListItem>
                ))}
              </List>
            );
          })}
        </List>
      </Box>
    </Drawer>
  );
};

export default DrawerNotifications;

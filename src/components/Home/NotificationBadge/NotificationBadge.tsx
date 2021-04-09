import { withStyles, createStyles, Badge } from '@material-ui/core';

const NotificationBadge = withStyles((theme) =>
  createStyles({
    badge: {
      width: 10,
      height: 10,
      pointerEvents: 'none',
      backgroundColor: theme.palette.error.main,
      color: theme.palette.error.main,
      boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
      '&::after': {
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        borderRadius: '50%',
        animation: '$ripple 1.2s infinite ease-in-out',
        border: '1px solid currentColor',
        content: '""',
      },
    },
    anchorOriginTopRightCircle: {
      top: '10%',
      right: '22%',
    },
    '@keyframes ripple': {
      '0%': {
        transform: 'scale(.8)',
        opacity: 1,
      },
      '100%': {
        transform: 'scale(2.4)',
        opacity: 0,
      },
    },
  }),
)(Badge);

export default NotificationBadge;

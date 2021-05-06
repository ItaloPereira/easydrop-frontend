import { IconButton, withStyles } from '@material-ui/core';

export const SquareIconButton = withStyles(
  (theme) => ({
    root: {
      borderRadius: theme.shape.borderRadius,
      border: `1px solid ${theme.palette.coal[60]}`,
      padding: theme.spacing(1),
    },
  }),
  { name: 'SquareIconButton' },
)(IconButton);

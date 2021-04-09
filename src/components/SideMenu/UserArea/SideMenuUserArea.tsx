import type { FunctionComponent } from 'react';

import { Avatar, Box } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import Typography from 'components/UI/Typography';
import helpersFormatters from 'helpers/formatters';

const useStyles = makeStyles((theme) => {
  const { carbon } = theme.palette;
  return {
    root: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      textAlign: 'center',
      width: '100%',
    },
    avatar: {
      marginBottom: theme.spacing(1),
    },
    avatarLetters: {
      color: carbon[60],
      fontSize: '1rem',
    },
    typography: {
      color: carbon[90],
    },
  };
});

type Props = {
  userName: string;
  organizationName: string;
  organizationDocument: string;
};

const SideMenuUserArea: FunctionComponent<Props> = ({ userName, organizationName, organizationDocument }) => {
  const classes = useStyles();

  return (
    <Box className={classes.root} data-testid="user-area">
      <Avatar alt={userName} data-testid="user-avatar" className={classes.avatar}>
        <Typography variant="bodyWebBold" className={classes.avatarLetters}>
          {helpersFormatters.userInitials(userName)}
        </Typography>
      </Avatar>
      <Box display="flex" flexDirection="column">
        <Typography variant="bodyWebBold" component="p" className={classes.typography} data-testid="user-name">
          {userName}
        </Typography>
        <Typography variant="captionWeb" data-testid="user-name">
          {`${organizationName} | ${organizationDocument}`}
        </Typography>
      </Box>
    </Box>
  );
};

export default SideMenuUserArea;

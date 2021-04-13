import type { FunctionComponent } from 'react';

import { Box, Link } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import PowerSettingsNewIcon from '@material-ui/icons/PowerSettingsNew';

import Typography from 'components/UI/Typography';

const useStyles = makeStyles((theme) => ({
  linkFooter: {
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 2, 0, 3),
    marginBottom: theme.spacing(1),
    borderRadius: `0 ${theme.shape.borderRadius * 2}px ${theme.shape.borderRadius * 2}px 0`,
    // borderTop: `1px solid ${theme.palette.carbon[10]}`,
    // color: theme.palette.carbon[90],
    height: '100%',
    width: '100%',
    textDecoration: 'none',
    '&:hover': {
      textDecoration: 'none',
    },
  },
  footerIcon: {
    minWidth: 0,
    marginRight: theme.spacing(1),
  },
}));

type Props = {
  title: string;
  onLogout: () => void;
};

const SideMenuFooter: FunctionComponent<Props> = ({ onLogout, title }) => {
  const classes = useStyles();
  return (
    <Box width={224} height={48} display="flex">
      <Link href="/" className={classes.linkFooter} onClick={onLogout} aria-label="link para desconectar do portal">
        <PowerSettingsNewIcon className={classes.footerIcon} fontSize="small" />
        <Typography variant="navigationItemWebBold">{title}</Typography>
      </Link>
    </Box>
  );
};

export default SideMenuFooter;

import type { FunctionComponent } from 'react';
import { useSelector } from 'react-redux';

import { Box } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import { useAppDispatch } from 'hooks/redux';
import { AuthActions, AuthSelectors } from 'store/reducers/auth';

import SideMenuFooter from './Footer';
import SideMenuNavigation from './Navigation';
import SideMenuUserArea from './UserArea';

const useStyles = makeStyles((theme) => {
  return {
    root: {
      width: '100%',
      display: 'grid',
      gap: theme.spacing(5),
      gridTemplateRows: '22px 90px auto 96px',
    },
    logoImage: {
      margin: '0 auto',
    },
  };
});

const SideMenu: FunctionComponent = () => {
  const classes = useStyles();
  const dispatch = useAppDispatch();
  const authData = useSelector(AuthSelectors.authDataSelector)!;

  return (
    <Box className={classes.root}>
      {/* <img src={} className={classes.logoImage} alt=" dashboard logo" /> */}
      <SideMenuUserArea
        userName={authData.name}
        organizationName={authData.businessName}
        organizationDocument={authData.documentNumber}
      />
      <SideMenuNavigation />
      <SideMenuFooter title="Sair da Conta" onLogout={() => dispatch(AuthActions.logout())} />
    </Box>
  );
};

export default SideMenu;

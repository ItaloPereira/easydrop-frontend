import { useEffect, useState } from 'react';

import { Box, Button, CircularProgress } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import AddIcon from '@material-ui/icons/Add';
import CheckIcon from '@material-ui/icons/Check';
import DeleteIcon from '@material-ui/icons/Delete';
import SettingsInputComponentIcon from '@material-ui/icons/SettingsInputComponent';

import cartxLogo from 'assets/images/integrations/cartx-logo.png';
import shopifyLogo from 'assets/images/integrations/shopify-logo.png';
import yampiLogo from 'assets/images/integrations/yampi-logo.png';
import IntegrationsCard from 'components/Integrations/Card';
import PageTitle from 'components/UI/PageTitle';
import { ErrorButton } from 'components/UI/StatusButton';
import { getIntegrations } from 'services/integrations';

import { IntegrationsRequest } from './enums';

const useStyles = makeStyles((theme) => ({
  pageTitleContainer: {
    marginBottom: theme.spacing(6),
  },
  cardsContainer: {
    display: 'grid',
    gridTemplateColumns: 'repeat(12, 1fr)',
    gap: theme.spacing(2),
  },
  cardCell: {
    gridColumnEnd: 'span 3',
  },
  cardImageContainer: {
    '& img': {
      width: '100%',
      height: '40px',
      objectFit: 'contain',
      objectPosition: 'center',
      display: 'block',
    },
  },
  integratedContainer: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  loadingContainer: {
    width: '100%',
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
}));

const HomePage = () => {
  const classes = useStyles();

  const [integrationsData, setIntegrationsData] = useState({ shopify: false, yampi: false });
  const [requestState, setRequestState] = useState(IntegrationsRequest.IDLE);

  const fetchIntegrations = async () => {
    try {
      setRequestState(IntegrationsRequest.PENDING);
      const response = await getIntegrations();
      setIntegrationsData(response);
      setRequestState(IntegrationsRequest.SUCCESS);
    } catch (err) {
      setRequestState(IntegrationsRequest.ERROR);
    }
  };

  useEffect(() => {
    fetchIntegrations();
  }, []);

  const integrateShopify = () => {
    console.log('integrate shopify');

    window.location.href =
      'https://loja-easydrop-1.myshopify.com/admin/oauth/authorize?client_id=8c80422b07337f3a7cf008939fd52d42&scope=write_orders,read_customers&redirect_uri=http://localhost:3000/integrations&state=19239&grant_options[]=per-user';
  };

  return (
    <Box style={{ width: '100%' }}>
      <Box className={classes.pageTitleContainer}>
        <PageTitle
          title="Integrações"
          subtitle="Faça integrações para se conectar com sua loja e sincronizar os pedidos!"
          Icon={SettingsInputComponentIcon}
        />
      </Box>

      {requestState === IntegrationsRequest.PENDING || requestState === IntegrationsRequest.IDLE ? (
        <Box className={classes.loadingContainer}>
          <CircularProgress />
        </Box>
      ) : (
        <Box className={classes.cardsContainer}>
          {/* SHOPIFY */}
          <Box className={classes.cardCell}>
            <IntegrationsCard>
              <Box className={classes.cardImageContainer}>
                <img src={shopifyLogo} alt="shopify logo" />
              </Box>
              {integrationsData.shopify ? (
                <Box className={classes.integratedContainer}>
                  <Button variant="outlined" disabled>
                    <CheckIcon />
                  </Button>
                  <ErrorButton variant="contained" aria-label="Remover integração" title="Remover integração">
                    <DeleteIcon />
                  </ErrorButton>
                </Box>
              ) : (
                <Button variant="outlined" endIcon={<AddIcon />} aria-label="botão de integrar com a Shopify">
                  Integrar
                </Button>
              )}
            </IntegrationsCard>
          </Box>

          {/* YAMPI */}
          <Box className={classes.cardCell}>
            <IntegrationsCard>
              <Box className={classes.cardImageContainer}>
                <img src={yampiLogo} alt="yampi logo" />
              </Box>
              {integrationsData.yampi ? (
                <Box className={classes.integratedContainer}>
                  <Button variant="outlined" disabled>
                    <CheckIcon />
                  </Button>
                  <ErrorButton variant="contained" aria-label="Remover integração" title="Remover integração">
                    <DeleteIcon />
                  </ErrorButton>
                </Box>
              ) : (
                <Button variant="outlined" endIcon={<AddIcon />} aria-label="botão de integrar com a Yampi">
                  Integrar
                </Button>
              )}
            </IntegrationsCard>
          </Box>

          {/* CARTX */}
          <Box className={classes.cardCell}>
            <IntegrationsCard disabled>
              <Box className={classes.cardImageContainer}>
                <img src={cartxLogo} alt="cartx logo" />
              </Box>
              <Button variant="outlined">Em breve</Button>
            </IntegrationsCard>
          </Box>
        </Box>
      )}
    </Box>
  );
};

export default HomePage;

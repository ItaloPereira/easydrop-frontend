import { useNavigate } from 'react-router';

import { Box, Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import AddIcon from '@material-ui/icons/Add';
import SettingsInputComponentIcon from '@material-ui/icons/SettingsInputComponent';

import cartxLogo from 'assets/images/integrations/cartx-logo.png';
import yampiLogo from 'assets/images/integrations/yampi-logo.png';
import IntegrationsCard from 'components/Integrations/Card';
import PageTitle from 'components/UI/PageTitle';

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

const IntegrationsPage = () => {
  const classes = useStyles();
  const navigate = useNavigate();

  return (
    <Box style={{ width: '100%' }}>
      <Box className={classes.pageTitleContainer}>
        <PageTitle
          title="Integrações"
          subtitle="Faça integrações para se conectar com sua loja e sincronizar os pedidos!"
          Icon={SettingsInputComponentIcon}
        />
      </Box>

      <Box className={classes.cardsContainer}>
        {/* YAMPI */}
        <Box className={classes.cardCell}>
          <IntegrationsCard>
            <Box className={classes.cardImageContainer}>
              <img src={yampiLogo} alt="yampi logo" />
            </Box>

            <Button
              variant="outlined"
              endIcon={<AddIcon />}
              aria-label="botão para configurar Yampi"
              onClick={() => navigate('/integrations/yampi')}
            >
              Configurar
            </Button>
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
    </Box>
  );
};

export default IntegrationsPage;

import type { FunctionComponent } from 'react';

import { Box, Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import AddIcon from '@material-ui/icons/Add';

import yampiLogo from 'assets/images/integrations/yampi-logo.png';

import { Props } from './types';

const useStyles = makeStyles((theme) => ({
  integrationPendingRoot: {
    textAlign: 'center',

    '& p': {
      fontSize: '16px',
      fontWeight: '600',
    },

    '& img': {
      width: '100%',
      height: '40px',
      objectFit: 'contain',
      objectPosition: 'center',
      display: 'block',
    },
  },
}));

const WhatsappIntegrationPending: FunctionComponent<Props> = ({ onIntegrate }) => {
  const classes = useStyles();

  return (
    <Box className={classes.integrationPendingRoot}>
      <img src={yampiLogo} alt="yampi logo" />
      <p>Você precisa integrar com a Yampi para poder sincronizar os pedidos.</p>
      <Button
        variant="contained"
        color="primary"
        endIcon={<AddIcon />}
        aria-label="botão para configurar Yampi"
        onClick={() => onIntegrate()}
      >
        Configurar
      </Button>
    </Box>
  );
};

export default WhatsappIntegrationPending;

import React, { FunctionComponent } from 'react';

import { Box, Button, Modal } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import ErrorIcon from '@material-ui/icons/Cancel';
import SuccessIcon from '@material-ui/icons/CheckCircle';
import WarningIcon from '@material-ui/icons/Error';

import Typography from 'components/UI/Typography';

const useStyles = makeStyles((theme) => ({
  modalContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  modalContent: {
    display: 'grid',
    gap: theme.spacing(3),
    padding: theme.spacing(3),
    border: `1px solid ${theme.palette.carbon[10]}`,
    background: theme.palette.common.white,
    borderRadius: 8,
    width: '90%',
    maxWidth: 550,
    overflowY: 'auto',
    outline: 'none',
    height: 'auto',
    maxHeight: '90vh',
    textAlign: 'center',
  },
  content: {
    display: 'grid',
    gap: theme.spacing(4),
  },
  message: {
    whiteSpace: 'pre-wrap',
  },
  successIcon: {
    fontSize: '3rem',
    color: theme.palette.success.main,
    margin: '0 auto',
  },
  warningIcon: {
    fontSize: '3rem',
    color: theme.palette.primary.main,
    margin: '0 auto',
  },
  errorIcon: {
    fontSize: '3rem',
    color: theme.palette.error.main,
    margin: '0 auto',
  },
  buttonContainer: {
    width: 164,
    margin: '0 auto',
  },
}));

type Props = {
  isModalOpen: boolean;
  onClose: () => void;
  status: 'success' | 'warning' | 'error';
};

const StatusModal: FunctionComponent<Props> = ({ isModalOpen, onClose, status }) => {
  const classes = useStyles();

  const icons = {
    success: <SuccessIcon className={classes.successIcon} />,
    warning: <WarningIcon className={classes.warningIcon} />,
    error: <ErrorIcon className={classes.errorIcon} />,
  };

  const titles = {
    success: 'Operação normal',
    warning: 'Operação instável',
    error: 'Operação paralisada',
  };

  const messages = {
    success: 'Todas as operações da PayGo\nestão funcionando normalmente',
    warning: 'As operações da PayGo estão instáveis no momento,\naguarde uns instantes para retornar.',
    error:
      'Estamos passando por instabilidade em nossos provedores,\nnossa equipe está trabalhando nisso e a previsão para\nnormalização é de 3 horas.',
  };

  return (
    <Modal className={classes.modalContainer} open={isModalOpen}>
      <section className={classes.modalContent}>
        {icons[status]}
        <Box className={classes.content}>
          <Typography variant="subtitleWebBold">{titles[status]}</Typography>
          <Typography variant="bodyWeb" className={classes.message}>
            {messages[status]}
          </Typography>
          <Box className={classes.buttonContainer}>
            <Button
              onClick={() => onClose()}
              aria-label="Botão para fechar modal"
              variant="contained"
              color="primary"
              size="small"
              fullWidth
            >
              Entendi
            </Button>
          </Box>
        </Box>
      </section>
    </Modal>
  );
};

export default StatusModal;

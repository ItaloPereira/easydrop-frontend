import { useEffect, useState } from 'react';
import { useForm, Controller } from 'react-hook-form';

import { Box, Button, FormControl, TextField, InputAdornment, CircularProgress, Snackbar } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import LabelIcon from '@material-ui/icons/Label';
import LinkIcon from '@material-ui/icons/Link';
import LockIcon from '@material-ui/icons/Lock';
import SettingsInputComponentIcon from '@material-ui/icons/SettingsInputComponent';
import { Alert } from '@material-ui/lab';

import FormCard from 'components/UI/FormCard';
import PageTitle from 'components/UI/PageTitle';
import { getYampiIntegration, setYampiData } from 'services/integrations';

import { IntegrationYampiRequest } from './enums';
import { IntegrationYampiFormData } from './types';

const useStyles = makeStyles((theme) => ({
  pageTitleContainer: {
    marginBottom: theme.spacing(6),
  },
  cardCell: {
    gridColumnEnd: 'span 3',
  },
  loadingContainer: {
    width: '100%',
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  form: {
    flex: 1,
    alignSelf: 'center',
    maxWidth: '600px',
  },
  formRoot: {
    display: 'grid',
    gap: theme.spacing(4),
    textAlign: 'center',
  },
  formContent: {
    display: 'grid',
    gap: theme.spacing(4),
  },
  inputs: {
    display: 'grid',
    gap: theme.spacing(3),
  },
  inputIcon: {
    fontSize: '1.125rem',
    color: theme.palette.coal[60],
  },
  buttons: {
    textAlign: 'left',
  },
  submitButton: {
    '&:disabled': {
      padding: theme.spacing(1.25, 4),
    },
  },
  loader: {
    color: theme.palette.common.white,
  },
}));

const IntegrationsYampi = () => {
  const classes = useStyles();

  const {
    control,
    watch,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const [yampiIntegrationData, setYampiIntegrationsData] = useState({ alias: '', token: '', secretKey: '' });
  const [getRequestState, setGetRequestState] = useState(IntegrationYampiRequest.IDLE);
  const [setRequestState, setSetRequestState] = useState(IntegrationYampiRequest.IDLE);
  const [showSnackbar, setShowSnackbar] = useState(false);

  const fetchIntegrationYampi = async () => {
    try {
      setGetRequestState(IntegrationYampiRequest.PENDING);
      const response = await getYampiIntegration();
      setYampiIntegrationsData(response);
      setGetRequestState(IntegrationYampiRequest.SUCCESS);
    } catch (err) {
      setGetRequestState(IntegrationYampiRequest.ERROR);
    }
  };

  const postData = async (alias: string, token: string, secretKey: string) => {
    try {
      setSetRequestState(IntegrationYampiRequest.PENDING);
      await setYampiData(alias, token, secretKey);
      setSetRequestState(IntegrationYampiRequest.SUCCESS);
      setShowSnackbar(true);
    } catch (err) {
      setSetRequestState(IntegrationYampiRequest.ERROR);
    }
  };

  const handleSnackbarClose = (event?: React.SyntheticEvent, reason?: string) => {
    if (reason === 'clickaway') {
      return;
    }

    setShowSnackbar(false);
  };

  const onSubmit = (data: IntegrationYampiFormData) => {
    postData(data.alias, data.token, data.secretKey);
  };

  useEffect(() => {
    fetchIntegrationYampi();
  }, []);

  return (
    <Box style={{ width: '100%' }}>
      <Box className={classes.pageTitleContainer}>
        <PageTitle
          title="Configurar Yampi"
          subtitle="Configure a Yampi para sincronizar boletos e carrinhos abandonados"
          Icon={SettingsInputComponentIcon}
        />
      </Box>
      {getRequestState === IntegrationYampiRequest.IDLE || getRequestState === IntegrationYampiRequest.PENDING ? (
        <Box className={classes.loadingContainer}>
          <CircularProgress />
        </Box>
      ) : (
        <form onSubmit={handleSubmit(onSubmit)} noValidate className={classes.form}>
          <FormCard>
            <Box className={classes.formRoot}>
              <Box className={classes.inputs}>
                {/* ALIAS */}
                <FormControl fullWidth>
                  <Controller
                    name="alias"
                    control={control}
                    rules={{
                      required: { value: true, message: 'Este campo é obrigatório' },
                    }}
                    defaultValue={yampiIntegrationData.alias}
                    render={({ field }) => (
                      <TextField
                        {...field}
                        error={Boolean(errors.alias)}
                        type="alias"
                        label="Alias"
                        variant="outlined"
                        id="yampi-alias"
                        autoComplete="alias"
                        autoFocus
                        size="small"
                        disabled={setRequestState === IntegrationYampiRequest.PENDING}
                        helperText={errors.alias && errors.alias.message}
                        inputProps={{
                          'aria-label': 'campo de alias',
                        }}
                        InputProps={{
                          startAdornment: (
                            <InputAdornment position="start">
                              <LabelIcon className={classes.inputIcon} />
                            </InputAdornment>
                          ),
                        }}
                      />
                    )}
                  />
                </FormControl>

                {/* TOKEN */}
                <FormControl fullWidth>
                  <Controller
                    name="token"
                    control={control}
                    rules={{
                      required: { value: true, message: 'Este campo é obrigatório' },
                    }}
                    defaultValue={yampiIntegrationData.token}
                    render={({ field }) => (
                      <TextField
                        {...field}
                        error={Boolean(errors.token)}
                        type="text"
                        label="Token"
                        variant="outlined"
                        id="yampi-token"
                        autoComplete="token"
                        size="small"
                        disabled={setRequestState === IntegrationYampiRequest.PENDING}
                        helperText={errors.token && errors.token.message}
                        inputProps={{
                          'aria-label': 'campo de token',
                        }}
                        InputProps={{
                          startAdornment: (
                            <InputAdornment position="start">
                              <LinkIcon className={classes.inputIcon} />
                            </InputAdornment>
                          ),
                        }}
                      />
                    )}
                  />
                </FormControl>

                {/* SECRET KEY */}
                <FormControl fullWidth>
                  <Controller
                    name="secretKey"
                    control={control}
                    rules={{
                      required: { value: true, message: 'Este campo é obrigatório' },
                    }}
                    defaultValue={yampiIntegrationData.secretKey}
                    render={({ field }) => (
                      <TextField
                        {...field}
                        error={Boolean(errors.secretKey)}
                        type="text"
                        label="Chave secreta"
                        variant="outlined"
                        id="yampi-secretKey"
                        autoComplete="secretKey"
                        size="small"
                        disabled={setRequestState === IntegrationYampiRequest.PENDING}
                        helperText={errors.secretKey && errors.secretKey.message}
                        inputProps={{
                          'aria-label': 'campo de chave secreta',
                        }}
                        InputProps={{
                          startAdornment: (
                            <InputAdornment position="start">
                              <LockIcon className={classes.inputIcon} />
                            </InputAdornment>
                          ),
                        }}
                      />
                    )}
                  />
                </FormControl>
              </Box>
              {/* {formError && (
                <Alert
                  variant="filled"
                  severity="error"
                  icon={<ErrorIcon />}
                  aria-label="caixa com alerta de erro"
                  className={classes.alert}
                >
                  {formError}
                </Alert>
              )} */}
              <Box className={classes.buttons}>
                <Button
                  type="submit"
                  title="Salvar"
                  variant="contained"
                  color="primary"
                  size="medium"
                  aria-label="botão para salvar dados da yampi"
                  disabled={setRequestState === IntegrationYampiRequest.PENDING}
                  classes={{ containedPrimary: classes.submitButton }}
                >
                  {setRequestState === IntegrationYampiRequest.PENDING ? (
                    <CircularProgress size="1rem" className={classes.loader} />
                  ) : (
                    'Salvar'
                  )}
                </Button>
              </Box>
            </Box>
          </FormCard>
        </form>
      )}
      <Snackbar open={showSnackbar} autoHideDuration={6000} onClose={handleSnackbarClose}>
        <Alert onClose={handleSnackbarClose} severity="success" elevation={6} variant="filled">
          Dados alterados com sucesso!
        </Alert>
      </Snackbar>
    </Box>
  );
};

export default IntegrationsYampi;

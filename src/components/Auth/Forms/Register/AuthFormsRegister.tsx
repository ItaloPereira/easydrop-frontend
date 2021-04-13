import type { FunctionComponent } from 'react';
import { useForm, Controller } from 'react-hook-form';
import InputMask from 'react-input-mask';

import { Box, Button, CircularProgress, FormControl, InputAdornment, TextField } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import EmailIcon from '@material-ui/icons/Email';
import ErrorIcon from '@material-ui/icons/Error';
import PersonIcon from '@material-ui/icons/Person';
import WhatsAppIcon from '@material-ui/icons/WhatsApp';
import { Alert } from '@material-ui/lab';

import AuthCard from 'components/Auth/Card';
import Typography from 'components/UI/Typography';
import helpersValidates from 'helpers/validates';

import { RegisterFormData } from './types';

const useStyles = makeStyles((theme) => ({
  form: {
    flex: 1,
    alignSelf: 'center',
  },
  root: {
    display: 'grid',
    gap: theme.spacing(4),
    textAlign: 'center',
  },
  content: {
    display: 'grid',
    gap: theme.spacing(4),
  },
  inputs: {
    display: 'grid',
    gap: theme.spacing(3),
  },
  toggleContainer: {
    height: 24,
  },
  buttons: {
    display: 'grid',
    gap: theme.spacing(2),
  },
  inputIcon: {
    fontSize: '1.125rem',
  },
  loginContainer: {
    textAlign: 'center',
  },
  loginButton: {
    marginLeft: theme.spacing(1),
    color: theme.palette.primary.main,
    cursor: 'pointer',

    '&:hover': {
      textDecoration: 'underline',
    },
  },
  alert: {
    textAlign: 'left',
  },
}));

type Props = {
  onRegister: (arg: { name: string; email: string; whatsapp: string }) => void;
  onLogin: () => void;
  formError?: string;
  loading: boolean;
};

const AuthFormsRegister: FunctionComponent<Props> = ({ onRegister, onLogin, formError, loading = false }) => {
  const classes = useStyles();

  const {
    control,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const onSubmit = (data: RegisterFormData) => {
    onRegister(data);
  };

  if (loading) {
    return (
      <Box display="flex" justifyContent="center" alignSelf="center">
        <CircularProgress color="primary" />
      </Box>
    );
  }
  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate className={classes.form}>
      <AuthCard>
        <Box className={classes.root}>
          <Box>
            <Typography variant="subtitleWebBold">Crie uma conta e teste grátis</Typography>
          </Box>

          <Box className={classes.content}>
            <Box className={classes.inputs}>
              {/* NAME */}
              <FormControl fullWidth>
                <Controller
                  name="name"
                  control={control}
                  rules={{
                    required: { value: true, message: 'Este campo é obrigatório' },
                  }}
                  defaultValue=""
                  render={({ field }) => (
                    <TextField
                      {...field}
                      error={Boolean(errors.name)}
                      label="Nome"
                      variant="outlined"
                      id="register-name"
                      autoComplete="name"
                      autoFocus
                      size="small"
                      helperText={errors.name && errors.name.message}
                      inputProps={{
                        'aria-label': 'campo de nome',
                      }}
                      InputProps={{
                        startAdornment: (
                          <InputAdornment position="start">
                            <PersonIcon className={classes.inputIcon} />
                          </InputAdornment>
                        ),
                      }}
                    />
                  )}
                />
              </FormControl>

              {/* EMAIL */}
              <FormControl fullWidth>
                <Controller
                  name="email"
                  control={control}
                  rules={{
                    required: { value: true, message: 'Este campo é obrigatório' },
                    pattern: {
                      value: helpersValidates.emailPattern,
                      message: 'Este email é inválido',
                    },
                  }}
                  defaultValue=""
                  render={({ field }) => (
                    <TextField
                      {...field}
                      error={Boolean(errors.email)}
                      type="email"
                      label="E-mail"
                      variant="outlined"
                      id="register-email"
                      autoComplete="email"
                      size="small"
                      helperText={errors.email && errors.email.message}
                      inputProps={{
                        'aria-label': 'campo de email',
                      }}
                      InputProps={{
                        startAdornment: (
                          <InputAdornment position="start">
                            <EmailIcon className={classes.inputIcon} />
                          </InputAdornment>
                        ),
                      }}
                    />
                  )}
                />
              </FormControl>

              {/* WHATSAPP */}
              <Controller
                name="whatsapp"
                control={control}
                rules={{
                  required: { value: true, message: 'Este campo é obrigatório' },
                  // pattern: {
                  //   value: helpersValidates.whatsAppPattern,
                  //   message: 'Número inválido',
                  // },
                }}
                defaultValue=""
                render={({ field }) => (
                  <InputMask mask="(99) 99999-9999" {...field}>
                    {(inputMaskProps: any) => (
                      <TextField
                        {...inputMaskProps}
                        error={Boolean(errors.whatsapp)}
                        label="Whatsapp"
                        variant="outlined"
                        id="register-whatsapp"
                        autoComplete="whatsapp"
                        size="small"
                        helperText={errors.whatsapp && errors.whatsapp.message}
                        inputProps={{
                          'aria-label': 'campo de whatsapp',
                        }}
                        InputProps={{
                          startAdornment: (
                            <InputAdornment position="start">
                              <WhatsAppIcon className={classes.inputIcon} />
                            </InputAdornment>
                          ),
                        }}
                      />
                    )}
                  </InputMask>
                )}
              />
            </Box>
            {formError && (
              <Alert
                variant="filled"
                severity="error"
                icon={<ErrorIcon />}
                aria-label="caixa com alerta de erro"
                className={classes.alert}
              >
                {formError}
              </Alert>
            )}
            <Box className={classes.buttons}>
              <Button
                type="submit"
                title="Criar conta"
                fullWidth
                variant="contained"
                color="primary"
                size="large"
                aria-label="botão para criar conta"
              >
                Criar conta
              </Button>

              <Box className={classes.loginContainer}>
                <Typography variant="bodyWebLight" component="span">
                  Já tem conta?
                </Typography>
                <Typography variant="bodyWeb" component="span" className={classes.loginButton} onClick={onLogin}>
                  Entrar
                </Typography>
              </Box>
            </Box>
          </Box>
        </Box>
      </AuthCard>
    </form>
  );
};

export default AuthFormsRegister;

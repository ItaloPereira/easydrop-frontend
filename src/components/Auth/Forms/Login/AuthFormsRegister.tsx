import type { FunctionComponent } from 'react';
import { useForm, Controller } from 'react-hook-form';
import InputMask from 'react-input-mask';

import { Box, Button, CircularProgress, FormControl, InputAdornment, TextField } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import EmailIcon from '@material-ui/icons/Email';
import ErrorIcon from '@material-ui/icons/Error';
import PersonIcon from '@material-ui/icons/Person';
import WhatsAppIcon from '@material-ui/icons/WhatsApp';

import AuthCard from 'components/Auth/Card';
import Alert from 'components/UI/Alert';
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
    gap: theme.spacing(3),
  },
  errorIcon: {
    color: theme.palette.error.main,
  },
  helperTextBox: {
    display: 'flex',
    alignItems: 'center',

    '& span': {
      color: '#E75A5A',
    },

    '& svg': {
      fontSize: '1rem',
      marginRight: '8px',
    },
  },
  helperBox: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: 64,
    margin: '0 auto',
    cursor: 'pointer',

    '& span': {
      color: '#0000',
    },

    '& svg': {
      color: '#0000',
      fontSize: '1rem',
    },
  },
  checkbox: {
    color: '#0000',
  },
  visibilityButton: {
    color: '#0000',
  },
  inputIcon: {
    fontSize: '1.125rem',
  },
}));

type Props = {
  onLogin: (arg: { username: string; password: string; rememberUsername: boolean }) => void;
  onForgotPassword: () => void;
  onHelp: () => void;
  errorMsg?: string;
  isLoading: boolean;
  rememberedUserName?: string | null;
};

const AuthFormsEmail: FunctionComponent<Props> = ({
  onLogin,
  onForgotPassword,
  onHelp,
  errorMsg,
  isLoading = false,
  rememberedUserName,
}) => {
  const classes = useStyles();

  const {
    control,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const onSubmit = (data: RegisterFormData) => {
    console.log(data);
  };

  // window.location.href =
  // 'https://loja-easydrop-1.myshopify.com/admin/oauth/request_grant?client_id=8c80422b07337f3a7cf008939fd52d42&grant_options%5B%5D=per-user&redirect_uri=http://localhost:3000&scope=write_orders%2Cread_customers&state=19239';

  if (isLoading) {
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
            <Typography variant="subtitleWebBold">Crie sua conta e teste grátis</Typography>
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
                      id="login-name"
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
                      id="login-email"
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
                        id="login-whatsapp"
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
            {errorMsg && (
              <Alert variant="filled" severity="error" icon={<ErrorIcon />} aria-label="caixa com alerta de erro">
                <Typography variant="bodyWeb">{errorMsg}</Typography>
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
            </Box>
          </Box>
        </Box>
      </AuthCard>
    </form>
  );
};

export default AuthFormsEmail;

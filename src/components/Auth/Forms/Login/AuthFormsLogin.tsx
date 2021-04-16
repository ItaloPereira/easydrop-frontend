import type { FunctionComponent } from 'react';
import { useState } from 'react';
import { useForm, Controller } from 'react-hook-form';

import { Box, Button, CircularProgress, FormControl, InputAdornment, TextField, IconButton } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import EmailIcon from '@material-ui/icons/Email';
import ErrorIcon from '@material-ui/icons/Error';
import LockIcon from '@material-ui/icons/Lock';
import VisibilityIcon from '@material-ui/icons/Visibility';
import VisibilityOffIcon from '@material-ui/icons/VisibilityOff';
import { Alert } from '@material-ui/lab';

import AuthCard from 'components/Auth/Card';
import Typography from 'components/UI/Typography';
import helpersValidates from 'helpers/validates';

import { LoginFormData } from './types';

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
    color: theme.palette.coal[60],
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
  onRegister: () => void;
  onLogin: (arg: { email: string; password: string }) => void;
  formError?: string;
  loading: boolean;
};

const AuthFormsLogin: FunctionComponent<Props> = ({ onRegister, onLogin, formError, loading = false }) => {
  const classes = useStyles();

  const {
    control,
    watch,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const passwordValue = watch('password');

  const [showPassword, setShowPassword] = useState(false);

  const onSubmit = (data: LoginFormData) => {
    onLogin(data);
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
            <Typography variant="subtitleWebBold">Acesse a plataforma</Typography>
          </Box>

          <Box className={classes.content}>
            <Box className={classes.inputs}>
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
                      placeholder="E-mail"
                      variant="outlined"
                      id="login-email"
                      autoComplete="email"
                      autoFocus
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

              {/* PASSWORD */}
              <FormControl fullWidth>
                <Controller
                  name="password"
                  control={control}
                  rules={{
                    required: { value: true, message: 'Este campo é obrigatório' },
                  }}
                  defaultValue=""
                  render={({ field }) => (
                    <TextField
                      {...field}
                      error={Boolean(errors.password)}
                      type={showPassword ? 'text' : 'password'}
                      placeholder="Senha"
                      variant="outlined"
                      id="login-password"
                      autoComplete="password"
                      size="small"
                      helperText={errors.password && errors.password.message}
                      inputProps={{
                        'aria-label': 'campo de senha',
                      }}
                      InputProps={{
                        startAdornment: (
                          <InputAdornment position="start">
                            <LockIcon className={classes.inputIcon} />
                          </InputAdornment>
                        ),
                        endAdornment: passwordValue && (
                          <InputAdornment position="end">
                            <IconButton
                              aria-label="botão de alternar visibilidade da senha"
                              onClick={() => setShowPassword(!showPassword)}
                              size="small"
                            >
                              {showPassword ? (
                                <VisibilityOffIcon fontSize="small" />
                              ) : (
                                <VisibilityIcon fontSize="small" />
                              )}
                            </IconButton>
                          </InputAdornment>
                        ),
                      }}
                    />
                  )}
                />
              </FormControl>
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
                title="Entrar"
                fullWidth
                variant="contained"
                color="primary"
                size="large"
                aria-label="botão para acessar a conta"
              >
                Entrar
              </Button>

              <Box className={classes.loginContainer}>
                <Typography variant="bodyWebLight" component="span">
                  Não tem conta?
                </Typography>
                <Typography variant="bodyWeb" component="span" className={classes.loginButton} onClick={onRegister}>
                  Experimente grátis!
                </Typography>
              </Box>
            </Box>
          </Box>
        </Box>
      </AuthCard>
    </form>
  );
};

export default AuthFormsLogin;

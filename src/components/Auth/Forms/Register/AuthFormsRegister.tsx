import { FunctionComponent, useState } from 'react';
import { useForm, Controller } from 'react-hook-form';
import InputMask from 'react-input-mask';

import { Box, Button, CircularProgress, FormControl, InputAdornment, TextField, IconButton } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import EmailIcon from '@material-ui/icons/Email';
import ErrorIcon from '@material-ui/icons/Error';
import LockIcon from '@material-ui/icons/Lock';
import PersonIcon from '@material-ui/icons/Person';
import VisibilityIcon from '@material-ui/icons/Visibility';
import VisibilityOffIcon from '@material-ui/icons/VisibilityOff';
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
  submitButton: {
    '&:disabled': {
      padding: theme.spacing(1.625, 4),
    },
  },
  loader: {
    color: theme.palette.common.white,
  },
}));

type Props = {
  onRegister: (arg: { name: string; email: string; whatsapp: string; password: string }) => void;
  onLogin: () => void;
  formError?: string;
  loading: boolean;
};

const AuthFormsRegister: FunctionComponent<Props> = ({ onRegister, onLogin, formError, loading = false }) => {
  const classes = useStyles();

  const {
    control,
    watch,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const passwordValue = watch('password');
  const confirmPasswordValue = watch('confirmPassword');

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const onSubmit = (data: RegisterFormData) => {
    onRegister(data);
  };

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
                      placeholder="Nome"
                      variant="outlined"
                      id="register-name"
                      autoComplete="name"
                      autoFocus
                      size="small"
                      disabled={loading}
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
                      placeholder="E-mail"
                      variant="outlined"
                      id="register-email"
                      autoComplete="email"
                      size="small"
                      disabled={loading}
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
                  <InputMask mask="(99) 99999-9999" {...field} disabled={loading}>
                    {(inputMaskProps: any) => (
                      <TextField
                        {...inputMaskProps}
                        error={Boolean(errors.whatsapp)}
                        placeholder="Whatsapp"
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

              {/* PASSWORD */}
              <FormControl fullWidth>
                <Controller
                  name="password"
                  control={control}
                  rules={{
                    required: { value: true, message: 'Este campo é obrigatório' },
                    minLength: { value: 6, message: 'Sua senha deve conter no mínimo 6 caracteres.' },
                  }}
                  defaultValue=""
                  render={({ field }) => (
                    <TextField
                      {...field}
                      error={Boolean(errors.password)}
                      type={showPassword ? 'text' : 'password'}
                      placeholder="Senha"
                      variant="outlined"
                      id="register-password"
                      autoComplete="password"
                      size="small"
                      disabled={loading}
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

              {/* CONFIRM PASSWORD */}
              <FormControl fullWidth>
                <Controller
                  name="confirmPassword"
                  control={control}
                  rules={{
                    required: { value: true, message: 'Este campo é obrigatório' },
                    validate: (value) => (value === passwordValue ? true : 'As senhas não são iguais.'),
                  }}
                  defaultValue=""
                  render={({ field }) => (
                    <TextField
                      {...field}
                      error={Boolean(errors.confirmPassword)}
                      type={showConfirmPassword ? 'text' : 'password'}
                      placeholder="Confirmar senha"
                      variant="outlined"
                      id="register-confirm-password"
                      size="small"
                      disabled={loading}
                      helperText={errors.confirmPassword && errors.confirmPassword.message}
                      inputProps={{
                        'aria-label': 'campo de confirmar senha',
                      }}
                      InputProps={{
                        startAdornment: (
                          <InputAdornment position="start">
                            <LockIcon className={classes.inputIcon} />
                          </InputAdornment>
                        ),
                        endAdornment: confirmPasswordValue && (
                          <InputAdornment position="end">
                            <IconButton
                              aria-label="botão de alternar visibilidade da senha"
                              onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                              size="small"
                            >
                              {showConfirmPassword ? (
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
                title="Criar conta"
                fullWidth
                variant="contained"
                color="primary"
                size="large"
                aria-label="botão para criar conta"
                disabled={loading}
                classes={{ containedPrimary: classes.submitButton }}
              >
                {loading ? <CircularProgress size="1rem" className={classes.loader} /> : 'Experimente grátis'}
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

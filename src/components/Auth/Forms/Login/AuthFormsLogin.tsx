import type { ChangeEvent, FocusEvent, FormEvent, FunctionComponent } from 'react';
import { useState } from 'react';

import {
  Box,
  Button,
  Checkbox,
  CircularProgress,
  FormControl,
  FormControlLabel,
  FormGroup,
  InputAdornment,
  IconButton,
  TextField,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import ErrorIcon from '@material-ui/icons/Error';
import VisibilityIcon from '@material-ui/icons/Visibility';
import VisibilityOffIcon from '@material-ui/icons/VisibilityOff';

import Alert from 'components/UI/Alert';
import Typography from 'components/UI/Typography';
import helpersValidates from 'helpers/validates';

const useStyles = makeStyles((theme) => ({
  form: {
    flex: 1,
    alignSelf: 'center',
  },
  root: {
    display: 'grid',
    gap: theme.spacing(3),
  },
  content: {
    display: 'grid',
    gap: theme.spacing(4),
  },
  inputs: {
    display: 'grid',
    gap: theme.spacing(4),
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
      color: theme.palette.carbon[60],
    },

    '& svg': {
      color: theme.palette.carbon[60],
      fontSize: '1rem',
    },
  },
  checkbox: {
    color: theme.palette.carbon[60],
  },
  visibilityButton: {
    color: theme.palette.carbon[35],
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
  const [usernameValue, setUsernameValue] = useState(rememberedUserName ?? '');
  const [passwordValue, setPasswordValue] = useState('');
  const [rememberUsername, setRememberUsername] = useState(!!rememberedUserName);

  const [showPassword, setShowPassword] = useState(false);
  const [usernameError, setUsernameError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const classes = useStyles();

  const handleUserChange = (e: ChangeEvent<HTMLInputElement>) => {
    const inputedValue = e.target.value;
    setUsernameValue(inputedValue);
  };

  const handlePasswordChange = (e: ChangeEvent<HTMLInputElement>) => {
    const inputedValue = e.target.value;
    setPasswordValue(inputedValue);
  };

  const handleValidPassword = (e: FocusEvent<HTMLInputElement>) => {
    setPasswordError(!e.target.value);
  };

  const handleValidUsername = (e: FocusEvent<HTMLInputElement>) => {
    setUsernameError(!e.target.value);
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const isValidPassword = !passwordValue;
    setUsernameError(helpersValidates.isEmpty(usernameValue));
    setPasswordError(isValidPassword);

    if (usernameValue.trim() !== '' && !isValidPassword) {
      onLogin({ username: usernameValue, password: passwordValue, rememberUsername });
    }
  };
  if (isLoading) {
    return (
      <Box display="flex" justifyContent="center" alignSelf="center">
        <CircularProgress color="primary" />
      </Box>
    );
  }
  return (
    <form onSubmit={handleSubmit} noValidate className={classes.form}>
      <Box className={classes.root}>
        <Box>
          <Typography variant="subtitleWebBold">Fazer login</Typography>
        </Box>

        <Box className={classes.content}>
          <Box className={classes.inputs}>
            <FormGroup>
              <FormControl fullWidth>
                <TextField
                  error={usernameError}
                  id="login-username"
                  type="email"
                  label="Seu usuário de acesso"
                  variant="standard"
                  value={usernameValue}
                  onChange={handleUserChange}
                  onBlur={handleValidUsername}
                  helperText={
                    usernameError && (
                      <Box className={classes.helperTextBox} component="span">
                        <ErrorIcon />
                        <Typography variant="captionWeb" component="span">
                          Este campo é obrigatório.
                        </Typography>
                      </Box>
                    )
                  }
                  autoFocus
                  autoComplete="username"
                  inputProps={{
                    'aria-label': 'campo de login',
                    'data-testid': 'login-textfield',
                  }}
                />
              </FormControl>
              <FormControlLabel
                className={classes.checkbox}
                control={
                  <Checkbox
                    defaultChecked={!!rememberedUserName}
                    value={rememberUsername}
                    onChange={(e) => setRememberUsername(e.target.checked)}
                    tabIndex={-1}
                    className={classes.checkbox}
                  />
                }
                label="Lembrar usuário"
              />
            </FormGroup>

            <FormControl fullWidth>
              <TextField
                error={passwordError}
                type={showPassword ? 'text' : 'password'}
                id="login-password"
                label="Senha"
                variant="standard"
                value={passwordValue}
                onChange={handlePasswordChange}
                onBlur={handleValidPassword}
                autoComplete="current-password"
                helperText={
                  passwordError && (
                    <Box className={classes.helperTextBox} component="span">
                      <ErrorIcon />
                      <Typography variant="captionWeb" component="span">
                        Este campo é obrigatório.
                      </Typography>
                    </Box>
                  )
                }
                inputProps={{
                  'aria-label': 'campo de senha',
                  'data-testid': 'password-textfield',
                }}
                InputProps={{
                  endAdornment: passwordValue && (
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="alternância da visibilidade do campo de senha"
                        onClick={() => setShowPassword((prevShowPassword) => !prevShowPassword)}
                      >
                        {showPassword ? (
                          <VisibilityOffIcon className={classes.visibilityButton} />
                        ) : (
                          <VisibilityIcon className={classes.visibilityButton} />
                        )}
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
              />
            </FormControl>
          </Box>
          {errorMsg && (
            <Alert
              variant="filled"
              severity="error"
              icon={<ErrorIcon />}
              data-testid="box-error-alert"
              aria-label="caixa com alerta de erro"
            >
              <Typography variant="bodyWeb">{errorMsg}</Typography>
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
              aria-label="botão para enviar email"
            >
              Entrar
            </Button>

            <Button
              type="button"
              title="Esqueci minha senha"
              onClick={onForgotPassword}
              fullWidth
              variant="outlined"
              size="large"
              aria-label="botão para enviar email"
            >
              Esqueci minha senha
            </Button>
          </Box>
        </Box>
      </Box>
    </form>
  );
};

export default AuthFormsEmail;

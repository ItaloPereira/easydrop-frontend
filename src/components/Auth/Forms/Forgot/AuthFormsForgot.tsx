import type { ChangeEvent, FocusEvent, FormEvent, FunctionComponent } from 'react';
import { useState } from 'react';

import { Box, Button, CircularProgress, FormControl, TextField } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import ErrorIcon from '@material-ui/icons/Error';
import ReportProblemIcon from '@material-ui/icons/ReportProblem';
import { Alert } from '@material-ui/lab';

import Typography from 'components/UI/Typography';
import helpersValidates from 'helpers/validates';

const useStyles = makeStyles((theme) => ({
  container: {
    display: 'grid',
    alignSelf: 'center',
    gap: theme.spacing(7),
  },
  textContainer: {
    display: 'grid',
    gap: theme.spacing(4),
  },
  button: {
    marginTop: theme.spacing(3),
  },
  link: {
    color: theme.palette.carbon[60],
    display: 'flex',
    alignItems: 'center',
    '&:hover': {
      textDecoration: 'none',
    },
  },
  icon: {
    marginLeft: theme.spacing(1),
  },
  helperTextBox: {
    display: 'flex',
    alignItems: 'center',

    '& span': {
      color: theme.palette.error.main, // temporária
    },

    '& svg': {
      fontSize: '1rem',
      marginRight: 8,
    },
  },
  helperBox: {
    alignItems: 'center',
    margin: `${theme.spacing(3)} auto`,
    cursor: 'pointer',
    '& span': {
      color: theme.palette.carbon[60],
    },

    '& svg': {
      color: theme.palette.carbon[60],
      fontSize: '1rem',
    },
  },
  alert: {
    marginTop: theme.spacing(2),
    borderRadius: theme.shape.borderRadius * 2,
  },
}));

type Props = {
  onSubmit: (email: string) => void;
  onBack: () => void;
  onHelp: () => void;
  errorMsg?: string;
  isLoading: boolean;
};
const AuthFormsForgot: FunctionComponent<Props> = ({ onSubmit, onBack, onHelp, errorMsg, isLoading = false }) => {
  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState(false);
  const classes = useStyles();
  const handleValueChange = (e: ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
    if (helpersValidates.isValidEmail(e.target.value) || helpersValidates.isEmpty(e.target.value)) {
      setEmailError(false);
    }
  };
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!helpersValidates.isValidEmail(email) || helpersValidates.isEmpty(email)) {
      return setEmailError(true);
    }
    return onSubmit(email);
  };
  const handleValidEmail = (e: FocusEvent<HTMLInputElement>) => {
    setEmailError(!helpersValidates.isValidEmail(e.target.value));
  };

  if (isLoading) {
    return (
      <Box display="flex" justifyContent="center" alignSelf="center">
        <CircularProgress color="primary" />
      </Box>
    );
  }

  return (
    <form onSubmit={handleSubmit} className={classes.container} noValidate>
      <Box className={classes.textContainer}>
        <Typography variant="subtitleWebBold">Esqueceu a senha?</Typography>
        <Typography variant="bodyWeb">
          Para solicitar um nova senha preencha com o seu e-mail de acesso e veja seu e-mail
        </Typography>
      </Box>
      <Box display="flex" flexDirection="column" width="100%">
        <FormControl fullWidth>
          <TextField
            error={emailError}
            onChange={handleValueChange}
            variant="standard"
            type="email"
            label="E-mail"
            value={email}
            onBlur={handleValidEmail}
            autoFocus
            helperText={
              emailError && (
                <Box className={classes.helperTextBox} component="span">
                  <ErrorIcon />
                  <Typography variant="captionWeb" component="span">
                    Encontramos um erro, verifique se seu e-mail está correto.
                  </Typography>
                </Box>
              )
            }
          />
        </FormControl>
        {errorMsg && (
          <Alert
            className={classes.alert}
            variant="filled"
            severity="error"
            icon={<ReportProblemIcon />}
            aria-label="caixa com alerta de erro"
          >
            {errorMsg}
          </Alert>
        )}
        <Button
          className={classes.button}
          aria-label="botao para enviar email"
          type="submit"
          title="Enviar"
          variant="contained"
          size="large"
          color="primary"
        >
          Enviar
        </Button>
        <Box className={classes.helperBox} display="flex" width="100%" justifyContent="space-between" mt={3}>
          <Box className={classes.link} onClick={onBack}>
            <Typography variant="bodyWeb" component="span">
              Voltar para o login
            </Typography>
          </Box>
          {/* <CustomTooltip title="Clique para obter Ajuda" aria-label="Clique para obter Ajuda" placement="top" arrow>
            <Box className={classes.link} onClick={onHelp}>
              <Typography variant="bodyWeb" component="span">
                Ajuda
              </Typography>
              <HelpOutlineIcon className={classes.icon} />
            </Box>
          </CustomTooltip> */}
        </Box>
      </Box>
    </form>
  );
};

export default AuthFormsForgot;

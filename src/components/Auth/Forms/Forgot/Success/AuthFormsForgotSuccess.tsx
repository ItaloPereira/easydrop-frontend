import type { FunctionComponent } from 'react';

import { Box, Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import Typography from 'components/UI/Typography';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'grid',
    gap: theme.spacing(4),
    alignSelf: 'center',
  },
}));

type Props = {
  onBack: () => void;
};

const AuthFormsForgotSuccess: FunctionComponent<Props> = ({ onBack }) => {
  const classes = useStyles();
  return (
    <Box className={classes.root}>
      <Typography variant="subtitleWebBold">Verifique seu e-mail</Typography>
      <Typography variant="bodyWeb">
        Um link para resetar sua senha foi enviado para seu e-mail, verifque e continue.
      </Typography>
      <Button
        onClick={onBack}
        aria-label="botao para voltar para tela de login"
        title="Voltar para o Login"
        variant="contained"
        color="primary"
        size="large"
      >
        Voltar para o Login
      </Button>
    </Box>
  );
};

export default AuthFormsForgotSuccess;

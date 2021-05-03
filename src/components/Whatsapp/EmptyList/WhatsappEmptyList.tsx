import type { FunctionComponent } from 'react';

import { Box } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({}));

const WhatsappEmptyList: FunctionComponent = () => {
  const classes = useStyles();

  return <Box>EmptyList</Box>;
};

export default WhatsappEmptyList;

import type { FunctionComponent } from 'react';

import { Box, Button } from '@material-ui/core';

import { Props } from './types';

const WhatsappTabs: FunctionComponent<Props> = ({ activeTab, tabChanged }) => {
  return (
    <Box>
      <Button>Boleto</Button>
      <Button>Carrinho</Button>
    </Box>
  );
};

export default WhatsappTabs;

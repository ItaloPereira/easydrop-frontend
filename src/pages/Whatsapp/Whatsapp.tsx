import type { FunctionComponent } from 'react';
import { useState } from 'react';

import { WppServices } from '@portal-types/whatsapp/services';

import { Box } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import WhatsAppIcon from '@material-ui/icons/WhatsApp';

import PageTitle from 'components/UI/PageTitle';
import WhatsappTabs from 'components/Whatsapp/Tabs';

const useStyles = makeStyles((theme) => ({
  pageTitleContainer: {
    marginBottom: theme.spacing(6),
  },
}));

const WhatsappPage: FunctionComponent = () => {
  const classes = useStyles();

  const [activeTab, setActiveTab] = useState<WppServices>('billet');

  return (
    <Box>
      <Box className={classes.pageTitleContainer}>
        <PageTitle title="Whatsapp Boleto" subtitle="Envie mensagens de recuperacão de boleto!" Icon={WhatsAppIcon} />
      </Box>
      <Box>
        <WhatsappTabs activeTab={activeTab} tabChanged={setActiveTab} />
      </Box>
    </Box>
  );
};

export default WhatsappPage;

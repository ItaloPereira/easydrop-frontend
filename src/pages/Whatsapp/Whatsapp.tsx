import type { FunctionComponent } from 'react';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router';
import { useSearchParams } from 'react-router-dom';

import { WppServices, WppBilletResponse } from '@portal-types/pages/whatsapp';

import { Box } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import WhatsAppIcon from '@material-ui/icons/WhatsApp';

import PageTitle from 'components/UI/PageTitle';
import WhatsappBilletList from 'components/Whatsapp/BilletList';
import WhatsappIntegrationPending from 'components/Whatsapp/IntegrationPending';
import WhatsappTabs from 'components/Whatsapp/Tabs';
import { useFetchGet } from 'hooks/useFetch';

import { whatsappBilletData } from './__mocks__';
import { pageTitles, pageDescs } from './constants';
import { ContentStep } from './enums';
import type { NullableWppServices } from './types';

const useStyles = makeStyles((theme) => ({
  pageRoot: {
    width: '100%',
    display: 'grid',
    gap: theme.spacing(6),
  },
}));

const defaultFilters: { active: NullableWppServices } = {
  active: 'billet',
};

const getQueryParams = (
  query: URLSearchParams,
): {
  active: NullableWppServices;
} => {
  const activeQuery = query.get('active');

  if (activeQuery !== 'billet' && activeQuery !== 'cart') return defaultFilters;

  return { active: activeQuery };
};

const WhatsappPage: FunctionComponent = () => {
  const classes = useStyles();
  const navigate = useNavigate();

  const [searchParams, setSearchParams] = useSearchParams([['active', 'billet']]);
  const [contentStep, setContentStep] = useState<ContentStep>(ContentStep.BILLET);
  const [filters, setFilters] = useState<{ active: NullableWppServices }>(
    getQueryParams(searchParams) ?? defaultFilters,
  );

  const { response, makeRequest, pending: portfolioPending } = useFetchGet<WppBilletResponse>('a/b');

  const normalizeQuery = () => {
    if (!filters.active) return { active: 'billet' };
    return { active: filters.active };
  };

  const contents = {
    [ContentStep.INTEGRATION]: <WhatsappIntegrationPending onIntegrate={() => navigate('/integrations/yampi')} />,
    [ContentStep.PENDING]: <WhatsappIntegrationPending onIntegrate={() => navigate('/integrations/yampi')} />,
    [ContentStep.BILLET]: <WhatsappBilletList data={whatsappBilletData} />,
    [ContentStep.CART]: <WhatsappIntegrationPending onIntegrate={() => navigate('/integrations/yampi')} />,
  };

  useEffect(() => {
    const normalizedQuery = normalizeQuery();
    setSearchParams(normalizedQuery);
  }, [filters]);

  return (
    <Box className={classes.pageRoot}>
      <Box>
        <PageTitle title={pageTitles[filters.active!]} subtitle={pageDescs[filters.active!]} Icon={WhatsAppIcon} />
      </Box>
      <Box>
        <WhatsappTabs activeTab={filters.active!} tabChanged={(tab: WppServices) => setFilters({ active: tab })} />
      </Box>
      <Box>{contents[contentStep]}</Box>
    </Box>
  );
};

export default WhatsappPage;

import type { FunctionComponent } from 'react';
import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';

import { WppServices } from '@portal-types/whatsapp/services';

import { Box } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import WhatsAppIcon from '@material-ui/icons/WhatsApp';

import PageTitle from 'components/UI/PageTitle';
import WhatsappEmptyList from 'components/Whatsapp/EmptyList';
import WhatsappTabs from 'components/Whatsapp/Tabs';

import { pageTitles, pageDescs } from './constants';
import { NullableWppServices } from './types';

const useStyles = makeStyles((theme) => ({
  pageTitleContainer: {
    marginBottom: theme.spacing(6),
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

  const [searchParams, setSearchParams] = useSearchParams([['active', 'billet']]);
  const [filters, setFilters] = useState<{ active: NullableWppServices }>(
    getQueryParams(searchParams) ?? defaultFilters,
  );

  const normalizeQuery = () => {
    if (!filters.active) return { active: 'billet' };
    return { active: filters.active };
  };

  useEffect(() => {
    const normalizedQuery = normalizeQuery();
    setSearchParams(normalizedQuery);
  }, [filters]);

  return (
    <Box>
      <Box className={classes.pageTitleContainer}>
        <PageTitle title={pageTitles[filters.active!]} subtitle={pageDescs[filters.active!]} Icon={WhatsAppIcon} />
      </Box>
      <Box>
        <WhatsappTabs activeTab={filters.active!} tabChanged={(tab: WppServices) => setFilters({ active: tab })} />
      </Box>
      <Box>
        <WhatsappEmptyList />
      </Box>
    </Box>
  );
};

export default WhatsappPage;

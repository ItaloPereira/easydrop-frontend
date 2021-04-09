import type { FunctionComponent } from 'react';
import { useLocation } from 'react-router';

import { Box } from '@material-ui/core';

import { groupedRoutes } from 'hooks/usePrivateRoutes';

import SideMenuNavigationGroup from './Group/SideMenuNavigationGroup';

const SideMenuNavigation: FunctionComponent = () => {
  const location = useLocation();
  return (
    <Box component="nav" mt={1} display="grid">
      {groupedRoutes.map((group) => (
        <SideMenuNavigationGroup
          key={group.groupName}
          groupName={group.groupName}
          routes={group.routes}
          location={location.pathname}
        />
      ))}
    </Box>
  );
};

export default SideMenuNavigation;

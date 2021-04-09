declare module '@portal-types/routes' {
  import type { ReactElement } from 'react';

  import SvgIcon from '@material-ui/core/SvgIcon';

  export type RouteItem = {
    path: string;
    title: string;
    icon: typeof SvgIcon;
    element: ReactElement;
  };

  export type Routes = Array<RouteItem>;
}

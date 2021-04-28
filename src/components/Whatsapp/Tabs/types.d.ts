import { WppServices } from '@portal-types/whatsapp/services';

export type Props = {
  activeTab: WppServices;
  tabChanged: (service: WppServices) => void;
};

export type ButtonTab = {
  label: string;
  id: WppServices;
};

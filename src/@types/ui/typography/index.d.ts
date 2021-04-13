declare module '@portal-types/ui/typography' {
  import type { TypographyProps as MuiTypographyProps } from '@material-ui/core';

  type TypographyVariant =
    | 'headerWeb'
    | 'headerWebMobile'
    | 'headerWebBold'
    | 'headerWebBoldMobile'
    | 'subtitleWeb'
    | 'subtitleWebMobile'
    | 'subtitleWebBold'
    | 'subtitleWebBoldMobile'
    | 'subtitleWebUppercase'
    | 'subtitleWebUppercaseSmall'
    | 'bodyWeb'
    | 'bodyWebBold'
    | 'captionWeb'
    | 'textLinkWeb'
    | 'textLinkWebBold'
    | 'bodyWebLight'
    // tipos nao definidos ainda
    | 'navigationItemWebBold'
    | 'homeClientsCardHeading'
    | 'homeCardLabel'
    | 'homePageNotificationTitle'
    | 'homePageNotificationContent'
    | 'homePageNotificationGroupDayTitle';

  export type TypographyProps = Omit<MuiTypographyProps, 'variant'> & {
    component?: React.ElementType;
    variant: TypographyVariant;
  };
}

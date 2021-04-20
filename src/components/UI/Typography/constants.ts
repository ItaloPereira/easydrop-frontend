import type { CSSProperties, ElementType } from 'react';

import type { TypographyProps } from '@portal-types/ui/typography';

export const variantDictionary: Record<
  TypographyProps['variant'],
  { style: CSSProperties; component: ElementType<any> }
> = {
  headerWeb: {
    style: {
      fontFamily: 'hind_vadodara',
      fontWeight: 300,
      fontSize: '2.5rem',
      lineHeight: '3rem',
    },
    component: 'h1',
  },
  headerWebMobile: {
    style: {
      fontFamily: 'hind_vadodara',
      fontWeight: 300,
      fontSize: '1.75rem',
      lineHeight: '2.25rem',
    },
    component: 'h1',
  },
  headerWebBold: {
    style: {
      fontFamily: 'hind_vadodara',
      fontWeight: 600,
      fontSize: '2.5rem',
      lineHeight: '3rem',
    },
    component: 'h1',
  },

  headerWebBoldMobile: {
    style: {
      fontFamily: 'hind_vadodara',
      fontWeight: 600,
      fontSize: '1.75rem',
      lineHeight: '2.25rem',
    },
    component: 'h1',
  },
  subtitleWeb: {
    style: {
      fontFamily: 'hind_vadodara',
      fontWeight: 300,
      fontSize: '1.5rem',
      lineHeight: '2rem',
    },
    component: 'h2',
  },
  subtitleWebMobile: {
    style: {
      fontFamily: 'hind_vadodara',
      fontWeight: 300,
      fontSize: '1.25rem',
      lineHeight: '1.75rem',
    },
    component: 'h2',
  },
  subtitleWebBold: {
    style: {
      fontFamily: 'hind_vadodara',
      fontSize: '1.5rem',
      lineHeight: '2rem',
      fontWeight: 600,
    },
    component: 'h2',
  },
  subtitleWebBoldMobile: {
    style: {
      fontFamily: 'hind_vadodara',
      fontWeight: 600,
      fontSize: '1.25rem',
      lineHeight: '1.75rem',
    },
    component: 'h2',
  },
  subtitleWebUppercase: {
    style: {
      fontFamily: 'hind_vadodara',
      fontWeight: 400,
      fontSize: '1rem',
      lineHeight: '1.25rem',
      textTransform: 'uppercase',
    },
    component: 'h2',
  },
  subtitleWebUppercaseSmall: {
    style: {
      fontFamily: 'hind_vadodara',
      fontWeight: 400,
      fontSize: '0.75rem',
      lineHeight: '1rem',
      textTransform: 'uppercase',
    },
    component: 'h2',
  },
  bodyWebLight: {
    style: {
      fontFamily: 'hind_vadodara',
      fontWeight: 300,
      fontSize: '1rem',
      lineHeight: '1.5rem',
    },
    component: 'p',
  },
  bodyWeb: {
    style: {
      fontFamily: 'hind_vadodara',
      fontWeight: 400,
      fontSize: '1rem',
      lineHeight: '1.5rem',
    },
    component: 'p',
  },
  bodyWebBold: {
    style: {
      fontFamily: 'hind_vadodara',
      fontWeight: 700,
      fontSize: '1rem',
      lineHeight: '1.5rem',
    },
    component: 'p',
  },
  captionWeb: {
    style: {
      fontFamily: 'hind_vadodara',
      fontWeight: 400,
      fontSize: '0.75rem',
      lineHeight: '1rem',
    },
    component: 'span',
  },
  textLinkWeb: {
    style: {
      fontFamily: 'hind_vadodara',
      fontWeight: 400,
      fontSize: '0.75rem',
      lineHeight: '1rem',
      textDecorationLine: 'underline',
    },
    component: 'span',
  },
  textLinkWebBold: {
    style: {
      fontFamily: 'hind_vadodara',
      fontWeight: 700,
      fontSize: '0.75rem',
      lineHeight: '1rem',
      textDecorationLine: 'underline',
      textTransform: 'uppercase',
    },
    component: 'span',
  },
  /*
  ============================
  Algums typos que não estão no tema ainda
  ============================
  */
  navigationItemWebBold: {
    style: {
      fontFamily: 'hind_vadodara',
      fontWeight: 700,
      fontSize: '0.875rem',
      lineHeight: '1.5rem',
    },
    component: 'span',
  },
  homeClientsCardHeading: {
    style: {
      fontFamily: 'hind_vadodara',
      fontWeight: 600,
      fontSize: '3rem',
      lineHeight: '3rem',
    },
    component: 'p',
  },
  homeCardLabel: {
    style: {
      fontFamily: 'hind_vadodara',
      fontSize: '0.875rem',
      lineHeight: '1.5rem',
    },
    component: 'span',
  },
  homePageNotificationGroupDayTitle: {
    style: {
      fontFamily: 'hind_vadodara',
      fontWeight: 600,
      fontSize: '0.75rem',
      lineHeight: '1rem',
    },
    component: 'p',
  },
  homePageNotificationTitle: {
    style: {
      fontFamily: 'hind_vadodara',
      fontSize: '14px',
      lineHeight: '18px',
      textTransform: 'uppercase',
    },
    component: 'p',
  },
  homePageNotificationContent: {
    style: {
      fontFamily: 'hind_vadodara',
      fontSize: '12px',
      lineHeight: '15px',
    },
    component: 'p',
  },
  // -----
  labelUppercaseMediumBold: {
    style: {
      fontFamily: 'hind_vadodara',
      fontSize: '12px',
      lineHeight: '16px',
      textTransform: 'uppercase',
      fontWeight: 700,
    },
    component: 'span',
  },
  bodySemibold: {
    style: {
      fontFamily: 'hind_vadodara',
      fontSize: '14px',
      lineHeight: '18px',
      fontWeight: 500,
    },
    component: 'span',
  },
};

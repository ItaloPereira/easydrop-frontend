import type { CSSProperties, ElementType } from 'react';

import type { TypographyProps } from '@portal-types/ui/typography';

export const variantDictionary: Record<
  TypographyProps['variant'],
  { style: CSSProperties; component: ElementType<any> }
> = {
  headerWeb: {
    style: {
      fontFamily: '"C6 Sans Display", sans-serif',
      fontWeight: 300,
      fontSize: '2.5rem',
      lineHeight: '3rem',
    },
    component: 'h1',
  },
  headerWebMobile: {
    style: {
      fontFamily: '"C6 Sans Display", sans-serif',
      fontWeight: 300,
      fontSize: '1.75rem',
      lineHeight: '2.25rem',
    },
    component: 'h1',
  },
  headerWebBold: {
    style: {
      fontFamily: '"C6 Sans Display", sans-serif',
      fontWeight: 600,
      fontSize: '2.5rem',
      lineHeight: '3rem',
    },
    component: 'h1',
  },

  headerWebBoldMobile: {
    style: {
      fontFamily: '"C6 Sans Display", sans-serif',
      fontWeight: 600,
      fontSize: '1.75rem',
      lineHeight: '2.25rem',
    },
    component: 'h1',
  },
  subtitleWeb: {
    style: {
      fontFamily: '"C6 Sans Display", sans-serif',
      fontWeight: 300,
      fontSize: '1.5rem',
      lineHeight: '2rem',
    },
    component: 'h2',
  },
  subtitleWebMobile: {
    style: {
      fontFamily: '"C6 Sans Display", sans-serif',
      fontWeight: 300,
      fontSize: '1.25rem',
      lineHeight: '1.75rem',
    },
    component: 'h2',
  },
  subtitleWebBold: {
    style: {
      fontFamily: '"C6 Sans Display", sans-serif',
      fontSize: '1.5rem',
      lineHeight: '2rem',
      fontWeight: 600,
    },
    component: 'h2',
  },
  subtitleWebBoldMobile: {
    style: {
      fontFamily: '"C6 Sans Display", sans-serif',
      fontWeight: 600,
      fontSize: '1.25rem',
      lineHeight: '1.75rem',
    },
    component: 'h2',
  },
  subtitleWebUppercase: {
    style: {
      fontFamily: '"C6 Sans Text", sans-serif',
      fontWeight: 400,
      fontSize: '1rem',
      lineHeight: '1.25rem',
      textTransform: 'uppercase',
    },
    component: 'h2',
  },
  subtitleWebUppercaseSmall: {
    style: {
      fontFamily: '"C6 Sans Text", sans-serif',
      fontWeight: 400,
      fontSize: '0.75rem',
      lineHeight: '1rem',
      textTransform: 'uppercase',
    },
    component: 'h2',
  },
  bodyWeb: {
    style: {
      fontFamily: '"C6 Sans Text", sans-serif',
      fontWeight: 400,
      fontSize: '1rem',
      lineHeight: '1.5rem',
    },
    component: 'p',
  },
  bodyWebBold: {
    style: {
      fontFamily: '"C6 Sans Text", sans-serif',
      fontWeight: 700,
      fontSize: '1rem',
      lineHeight: '1.5rem',
    },
    component: 'p',
  },
  captionWeb: {
    style: {
      fontFamily: '"C6 Sans Text", sans-serif',
      fontWeight: 400,
      fontSize: '0.75rem',
      lineHeight: '1rem',
    },
    component: 'span',
  },
  textLinkWeb: {
    style: {
      fontFamily: '"C6 Sans Text", sans-serif',
      fontWeight: 400,
      fontSize: '0.75rem',
      lineHeight: '1rem',
      textDecorationLine: 'underline',
    },
    component: 'span',
  },
  textLinkWebBold: {
    style: {
      fontFamily: '"C6 Sans Text", sans-serif',
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
      fontFamily: '"C6 Sans Text", sans-serif',
      fontWeight: 700,
      fontSize: '0.875rem',
      lineHeight: '1.5rem',
    },
    component: 'span',
  },
  homeClientsCardHeading: {
    style: {
      fontFamily: '"C6 Sans Display", sans-serif',
      fontWeight: 600,
      fontSize: '3rem',
      lineHeight: '3rem',
    },
    component: 'p',
  },
  homeCardLabel: {
    style: {
      fontFamily: '"C6 Sans Text", sans-serif',
      fontSize: '0.875rem',
      lineHeight: '1.5rem',
    },
    component: 'span',
  },
  homePageNotificationGroupDayTitle: {
    style: {
      fontFamily: '"C6 Sans Display", sans-serif',
      fontWeight: 600,
      fontSize: '0.75rem',
      lineHeight: '1rem',
    },
    component: 'p',
  },
  homePageNotificationTitle: {
    style: {
      fontFamily: '"C6 Sans Text", sans-serif',
      fontSize: '14px',
      lineHeight: '18px',
      textTransform: 'uppercase',
    },
    component: 'p',
  },
  homePageNotificationContent: {
    style: {
      fontFamily: '"C6 Sans Text", sans-serif',
      fontSize: '12px',
      lineHeight: '15px',
    },
    component: 'p',
  },
};

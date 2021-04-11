import { createMuiTheme } from '@material-ui/core/styles';

import { brandVariants, neutralColors, supportColors, surfaceColors } from './colors';

export const themeDefault = createMuiTheme({
  props: {
    MuiButton: {
      disableElevation: true,
    },
    MuiCircularProgress: {
      color: 'secondary',
    },
  },
  palette: {
    common: {
      black: neutralColors.black,
      white: neutralColors.white,
    },
    primary: {
      main: surfaceColors.accent.dark,
      light: supportColors.positive.main,
    },
    secondary: {
      main: surfaceColors.dark.darkest,
    },
    error: {
      main: surfaceColors.negative.dark,
    },
    success: {
      main: surfaceColors.positive.medium,
      dark: surfaceColors.positive.dark,
    },
    background: {
      default: surfaceColors.light.medium,
    },
    carbon: brandVariants.carbon,
    marble: brandVariants.marble,
    grey: brandVariants.grey,
    secondarySurfaces: neutralColors.secondarySurfaces,
    surfaceColors: {
      infoMedium: supportColors.info.medium,
    },
  },
  typography: {
    fontFamily: '"C6 Sans Text", sans-serif',
  },
  shape: {
    borderRadius: 4,
  },
  shadows: [
    'none',
    '0px 2px 1px -1px rgba(0,0,0,0.2),0px 1px 1px 0px rgba(0,0,0,0.14),0px 1px 3px 0px rgba(0,0,0,0.12)',
    '0px 3px 1px -2px rgba(0,0,0,0.2),0px 2px 2px 0px rgba(0,0,0,0.14),0px 1px 5px 0px rgba(0,0,0,0.12)',
    '0px 3px 3px -2px rgba(0,0,0,0.2),0px 3px 4px 0px rgba(0,0,0,0.14),0px 1px 8px 0px rgba(0,0,0,0.12)',
    '0px 2px 4px -1px rgba(0,0,0,0.2),0px 4px 5px 0px rgba(0,0,0,0.14),0px 1px 10px 0px rgba(0,0,0,0.12)',
    '0px 3px 5px -1px rgba(0,0,0,0.2),0px 5px 8px 0px rgba(0,0,0,0.14),0px 1px 14px 0px rgba(0,0,0,0.12)',
    '0px 3px 5px -1px rgba(0,0,0,0.2),0px 6px 10px 0px rgba(0,0,0,0.14),0px 1px 18px 0px rgba(0,0,0,0.12)',
    '0px 4px 5px -2px rgba(0,0,0,0.2),0px 7px 10px 1px rgba(0,0,0,0.14),0px 2px 16px 1px rgba(0,0,0,0.12)',
    '0px 5px 5px -3px rgba(0,0,0,0.2),0px 8px 10px 1px rgba(0,0,0,0.14),0px 3px 14px 2px rgba(0,0,0,0.12)',
    '0px 5px 6px -3px rgba(0,0,0,0.2),0px 9px 12px 1px rgba(0,0,0,0.14),0px 3px 16px 2px rgba(0,0,0,0.12)',
    '0px 6px 6px -3px rgba(0,0,0,0.2),0px 10px 14px 1px rgba(0,0,0,0.14),0px 4px 18px 3px rgba(0,0,0,0.12)',
    '0px 6px 7px -4px rgba(0,0,0,0.2),0px 11px 15px 1px rgba(0,0,0,0.14),0px 4px 20px 3px rgba(0,0,0,0.12)',
    '0px 7px 8px -4px rgba(0,0,0,0.2),0px 12px 17px 2px rgba(0,0,0,0.14),0px 5px 22px 4px rgba(0,0,0,0.12)',
    '0px 7px 8px -4px rgba(0,0,0,0.2),0px 13px 19px 2px rgba(0,0,0,0.14),0px 5px 24px 4px rgba(0,0,0,0.12)',
    '0px 7px 9px -4px rgba(0,0,0,0.2),0px 14px 21px 2px rgba(0,0,0,0.14),0px 5px 26px 4px rgba(0,0,0,0.12)',
    '0px 8px 9px -5px rgba(0,0,0,0.2),0px 15px 22px 2px rgba(0,0,0,0.14),0px 6px 28px 5px rgba(0,0,0,0.12)',
    '0px 8px 10px -5px rgba(0,0,0,0.2),0px 16px 24px 2px rgba(0,0,0,0.14),0px 6px 30px 5px rgba(0,0,0,0.12)',
    '0px 8px 11px -5px rgba(0,0,0,0.2),0px 17px 26px 2px rgba(0,0,0,0.14),0px 6px 32px 5px rgba(0,0,0,0.12)',
    '0px 9px 11px -5px rgba(0,0,0,0.2),0px 18px 28px 2px rgba(0,0,0,0.14),0px 7px 34px 6px rgba(0,0,0,0.12)',
    '0px 9px 12px -6px rgba(0,0,0,0.2),0px 19px 29px 2px rgba(0,0,0,0.14),0px 7px 36px 6px rgba(0,0,0,0.12)',
    '0px 10px 13px -6px rgba(0,0,0,0.2),0px 20px 31px 3px rgba(0,0,0,0.14),0px 8px 38px 7px rgba(0,0,0,0.12)',
    '0px 10px 13px -6px rgba(0,0,0,0.2),0px 21px 33px 3px rgba(0,0,0,0.14),0px 8px 40px 7px rgba(0,0,0,0.12)',
    '0px 10px 14px -6px rgba(0,0,0,0.2),0px 22px 35px 3px rgba(0,0,0,0.14),0px 8px 42px 7px rgba(0,0,0,0.12)',
    '0px 11px 14px -7px rgba(0,0,0,0.2),0px 23px 36px 3px rgba(0,0,0,0.14),0px 9px 44px 8px rgba(0,0,0,0.12)',
    '-10px 0px 40px rgba(0, 0, 0, 0.6)',
  ],
  // overrides: {
  //   MuiPaper: {
  //     elevation8: {
  //       boxShadow: '0px 6px 10px rgba(0, 0, 0, 0.14), 0px 1px 18px rgba(0, 0, 0, 0.12), 0px 3px 5px rgba(0, 0, 0, 0.2)',
  //     },
  //     root: {
  //       '&.MuiAlert-filledError': {
  //         backgroundColor: surfaceColors.negative.dark,
  //         borderRadius: 8,
  //         '& .MuiAlert-message, .MuiAlert-icon': {
  //           color: brandVariants.marble[100],
  //         },
  //       },
  //     },
  //   },
  //   MuiButton: {
  //     root: {
  //       borderRadius: '24px',
  //       lineHeight: '18px',
  //     },
  //     sizeLarge: {
  //       fontSize: '14px',
  //       lineHeight: '18px',
  //     },
  //     sizeSmall: {
  //       lineHeight: '1rem',
  //     },
  //     containedPrimary: {
  //       color: brandVariants.carbon[90],
  //       background: `linear-gradient(105.23deg, ${surfaceColors.accent.light} 0%, ${surfaceColors.accent.dark} 100%)`,
  //       '&:disabled': {
  //         background: neutralColors.light,
  //         '&.buttonPreventHover': {
  //           background: `linear-gradient(105.23deg, ${surfaceColors.accent.light} 0%, ${surfaceColors.accent.dark} 100%)`,
  //         },
  //       },
  //       '&:hover': {
  //         background: 'unset',
  //         backgroundColor: surfaceColors.accent.dark,
  //       },
  //       '&:focus': {
  //         background: 'unset',
  //         backgroundColor: surfaceColors.accent.dark,
  //       },
  //       '& .MuiTouchRipple-rippleVisible': {
  //         opacity: 0.75,
  //       },
  //       '& .MuiTouchRipple-child': {
  //         backgroundColor: surfaceColors.accent.light,
  //       },
  //       '&.Mui-error': {
  //         // definir se essas cores irão para o `colors.ts`
  //         background: 'linear-gradient(180deg, #E75A5A 0%, #CD5050 100%)',
  //         color: brandVariants.marble[100],
  //         '& .MuiTouchRipple-child': {
  //           backgroundColor: '#f59393',
  //         },
  //       },
  //     },
  //     outlined: {
  //       color: brandVariants.carbon[60],
  //       border: `1px solid ${brandVariants.carbon[35]}`,
  //       '&:hover': {
  //         color: brandVariants.carbon[64],
  //         border: `1px solid ${neutralColors.mediumDark}`,
  //         backgroundColor: neutralColors.secondarySurfaces.marbleDark,
  //       },
  //       '&:focus': {
  //         color: brandVariants.carbon[64],
  //         backgroundColor: neutralColors.secondarySurfaces.marbleDark,
  //       },
  //       '&:disabled': {
  //         backgroundColor: neutralColors.secondarySurfaces.marbleDark,
  //         '&.buttonPreventHover': {
  //           backgroundColor: 'unset',
  //         },
  //       },
  //       '&:active': {
  //         backgroundColor: neutralColors.light,
  //       },
  //       '&$focusVisible': {
  //         backgroundColor: neutralColors.light,
  //       },
  //       '&.Mui-error': {
  //         border: `1px solid ${surfaceColors.negative.dark}`,
  //         color: surfaceColors.negative.dark,
  //         '&:focus': {
  //           backgroundColor: 'unset',
  //         },
  //         '&:hover': {
  //           backgroundColor: 'unset',
  //         },
  //       },
  //       '& .MuiTouchRipple-child': {
  //         backgroundColor: 'unset',
  //       },
  //       '& .MuiCircularProgress-colorSecondary': {
  //         color: brandVariants.carbon[64],
  //       },
  //     },
  //     text: {
  //       color: brandVariants.carbon[100],
  //       fontWeight: 'bold',
  //       width: 'fit-content',
  //       textTransform: 'uppercase',
  //       borderRadius: 'unset',
  //       '&:hover': {
  //         backgroundColor: neutralColors.secondarySurfaces.marbleDark,
  //       },
  //       '&:disabled': {
  //         backgroundColor: 'rgba(128, 128, 128, 0.1)',
  //         color: 'rgba(128, 128, 128, 0.25)',
  //         '&.buttonPreventHover': {
  //           backgroundColor: 'unset',
  //         },
  //       },
  //       '&:focus': {
  //         backgroundColor: brandVariants.carbon[10],
  //       },
  //       '&:active': {
  //         backgroundColor: brandVariants.carbon[10],
  //         '& .MuiTouchRipple-child': {
  //           backgroundColor: brandVariants.carbon[10],
  //         },
  //       },
  //       '& .MuiTouchRipple-child': {
  //         backgroundColor: 'unset',
  //       },
  //     },
  //     label: {
  //       position: 'relative',
  //       zIndex: 1,
  //     },
  //     containedSizeSmall: {
  //       fontSize: '0.75rem',
  //       padding: '8px 16px',
  //     },
  //     containedSizeLarge: {
  //       padding: '15px 24px',
  //     },
  //     outlinedSizeSmall: {
  //       padding: '8px 32px',
  //       lineHeight: '0.875rem',
  //     },
  //     outlinedSizeLarge: {
  //       padding: '14px 24px',
  //     },
  //   },
  //   MuiFormLabel: {
  //     root: {
  //       '&$focused': {
  //         color: brandVariants.carbon[60],
  //         '&.MuiInputLabel-outlined': {
  //           color: brandVariants.carbon[90],
  //         },
  //         '&.Mui-error.MuiInputLabel-outlined': {
  //           color: supportColors.negative.OutlineInput,
  //         },
  //       },
  //       '&.Mui-error': {
  //         color: brandVariants.carbon[60],
  //       },
  //     },
  //   },
  //   // @ts-ignore
  //   MuiToggleButtonGroup: {
  //     root: {},
  //     grouped: {
  //       margin: '0px 4px',
  //     },
  //     groupedHorizontal: {
  //       // limpar estilização do material-ui
  //       '&:not(:first-child)': false,
  //       '&:not(:last-child)': false,
  //     },
  //   },
  //   MuiContainer: {
  //     maxWidthMd: {
  //       paddingLeft: '32px',
  //       paddingRight: '32px',
  //     },
  //     maxWidthSm: {
  //       paddingLeft: '16px',
  //       paddingRight: '16px',
  //     },
  //   },
  //   MuiToggleButton: {
  //     root: {
  //       borderRadius: '4px',
  //       border: `1px solid ${brandVariants.carbon[60]}`,
  //       color: brandVariants.carbon[60],
  //       padding: '4px 8px',
  //       textTransform: 'none',
  //       '&:disabled': {
  //         border: '1px solid rgba(0, 0, 0, 0.20)',
  //       },
  //       '&.Mui-selected': {
  //         border: `1px solid ${brandVariants.carbon[100]}`,
  //         color: brandVariants.marble[100],
  //         background: brandVariants.carbon[100],
  //         '&:disabled': {
  //           background: brandVariants.carbon[85],
  //         },
  //         '&:hover': {
  //           background: `${brandVariants.carbon[85]} !important`,
  //         },
  //       },
  //     },
  //   },
  //   MuiInput: {
  //     root: {
  //       '&.Mui-error': {
  //         color: '#E75A5A',
  //       },

  //       '&.MuiInput-underline.Mui-error:after': {
  //         borderBottomColor: '#E75A5A',
  //       },

  //       '&+.MuiFormHelperText-root': {
  //         color: '#E75A5A',
  //       },
  //     },

  //     input: {
  //       fontWeight: 500,
  //     },
  //     underline: {
  //       '&:after': {
  //         borderBottomColor: brandVariants.carbon[100],
  //       },
  //     },
  //   },
  //   MuiOutlinedInput: {
  //     root: {
  //       '&$focused': {
  //         '& .MuiOutlinedInput-notchedOutline': {
  //           borderColor: brandVariants.carbon[90],
  //         },
  //         '&$error': {
  //           '& .MuiOutlinedInput-notchedOutline': {
  //             borderColor: supportColors.negative.OutlineInput,
  //           },
  //           '&+.MuiFormHelperText-root': {
  //             color: supportColors.negative.OutlineInput,
  //           },
  //         },
  //       },
  //       '&$error': {
  //         '&+.MuiFormHelperText-root': {
  //           color: supportColors.negative.OutlineInput,
  //         },
  //       },
  //       '&$disabled': {
  //         background: neutralColors.secondarySurfaces.marbleDark,
  //         '& .MuiOutlinedInput-notchedOutline': {
  //           border: `solid 1px ${brandVariants.carbon[60]}`,
  //         },
  //         '&+.MuiFormHelperText-root': {
  //           color: brandVariants.carbon[60],
  //         },
  //       },
  //     },
  //     input: {
  //       color: brandVariants.carbon[90],
  //       fontWeight: 600,
  //       fontSize: '1rem',
  //       lineHeight: '1.5rem',
  //     },
  //     notchedOutline: {
  //       border: `solid 1px ${brandVariants.carbon[60]}`,
  //       borderRadius: '8px',
  //       '&:hover': {
  //         border: `solid 1px ${brandVariants.carbon[90]}`,
  //       },
  //     },
  //   },
  //   MuiAvatar: {
  //     colorDefault: {
  //       backgroundColor: neutralColors.secondarySurfaces.marbleDark,
  //     },
  //   },
  //   MuiSvgIcon: {
  //     fontSizeSmall: {
  //       fontSize: '1rem',
  //     },
  //   },
  //   MuiIcon: {
  //     fontSizeSmall: {
  //       fontSize: '1rem',
  //     },
  //   },
  //   MuiIconButton: {
  //     sizeSmall: {
  //       padding: '.5rem',
  //     },
  //   },
  //   MuiDrawer: {
  //     paper: {
  //       width: 288,
  //       '@media (min-width: 600px)': {
  //         width: 446,
  //       },
  //     },
  //   },
  //   MuiPopover: {
  //     paper: {
  //       borderRadius: 8,
  //       '@media (min-width:600px)': {
  //         marginTop: 8,
  //       },
  //     },
  //   },
  //   MuiCard: {
  //     root: {
  //       padding: '24px',
  //       border: `1px solid ${brandVariants.carbon[10]}`,
  //       borderRadius: '8px',
  //       boxShadow: 'none',
  //     },
  //   },
  //   MuiCheckbox: {
  //     root: {
  //       color: 'rgba(36, 36, 36)',
  //     },
  //     colorSecondary: {
  //       '&.Mui-checked': {
  //         color: '#FFCE2E',
  //       },
  //     },
  //   },
  //   MuiFab: {
  //     root: {
  //       boxShadow: 'none',
  //       position: 'fixed',
  //       bottom: '40px',
  //       right: '40px',
  //       height: '48px',
  //       width: '48px',
  //       '&:active': {
  //         boxShadow: 'none',
  //       },
  //     },
  //     primary: {
  //       color: brandVariants.carbon[90],
  //       background: `linear-gradient(105.23deg, ${surfaceColors.accent.light} 0%, ${surfaceColors.accent.dark} 100%)`,
  //       '&:disabled': {
  //         background: neutralColors.light,
  //         '&.buttonPreventHover': {
  //           background: `linear-gradient(105.23deg, ${surfaceColors.accent.light} 0%, ${surfaceColors.accent.dark} 100%)`,
  //         },
  //       },
  //       '&:hover': {
  //         background: 'unset',
  //         backgroundColor: surfaceColors.accent.dark,
  //       },
  //       '&:focus': {
  //         background: 'unset',
  //         backgroundColor: surfaceColors.accent.dark,
  //       },
  //       '& .MuiTouchRipple-rippleVisible': {
  //         opacity: 0.75,
  //       },
  //       '& .MuiTouchRipple-child': {
  //         backgroundColor: surfaceColors.accent.light,
  //       },
  //     },
  //   },
  // },
});

export const brandColors = {
  carbon: '#242424',
  marble: '#FBFBFB',
  yellowDark: '#FFCE2E',
  yellowLight: '#FFE552',
} as const;

// Para calcular a opacidade de um hex é só utilizar o site abaixo
// e adicionar no final do hex
// https://www.joshuamiron.com/percent-to-hex-converter

export const brandVariants = {
  carbon: {
    10: `${brandColors.carbon}1A`,
    20: `${brandColors.carbon}33`,
    35: `${brandColors.carbon}59`,
    60: `${brandColors.carbon}99`,
    70: `${brandColors.carbon}B3`,
    90: `${brandColors.carbon}E6`,
    100: `${brandColors.carbon}FF`,
    /**
     * @deprecated não deveria ter valores tão quebrados
     * */
    64: `${brandColors.carbon}A3`,
    /**
     * @deprecated não estava na definição padrão
     * */
    85: `${brandColors.carbon}D9`,
  },
  marble: {
    10: `${brandColors.marble}1A`,
    20: `${brandColors.marble}33`,
    35: `${brandColors.marble}59`,
    60: `${brandColors.marble}99`,
    90: `${brandColors.marble}E6`,
    100: `${brandColors.marble}FF`,
  },
  grey: {
    100: `${brandColors.marble}FF`,
    300: `${brandColors.marble}99`,
    400: `${brandColors.marble}4D`,
    600: `${brandColors.marble}1A`,
  },
} as const;

export const supportColors = {
  neutral: {
    main: '#404E5C',
    light: '#4F6070',
  },
  positive: {
    dark: '#005B52',
    main: '#00A393',
    medium: '#00CC96',
    light: '#E9F6F3',
  },
  negative: {
    dark: '#C93532',
    /**
     * @deprecated não sei pq ele é diferente do error main, talvez não devesse ser
     */
    OutlineInput: '#DD1003',
    inverse: {
      dark: '#FC6262',
    },
  },
  info: {
    dark: '#006C8E',
    main: '#21A2BF',
    medium: '#4FC8E3',
    light: '#EDF5F9',
  },
} as const;

export const neutralColors = {
  black: '#000000',
  darkest: '#3E3E3E',
  dark: '#737373',
  mediumDark: '#B9B9B9',
  mediumLight: '#DCDCDC',
  light: '#EDEDED',
  lightest: '#F5F5F5',
  white: '#ffffff',

  /**
   * @deprecated refatorar para usar as cores da lib
   */
  secondarySurfaces: {
    carbonLight: '#424242',
    carbonDark: '#0E0E0E',
    marbleLight: '#FFFFFF',
    marbleDark: '#F5F5F5',
  },
} as const;

export const textColors = {
  neutral: {
    standard: {
      main: `${brandColors.carbon}FF`,
      dark: `${brandColors.carbon}E0`,
      light: `${brandColors.carbon}A3`,
      disabled: `${brandColors.carbon}52`,
    },
    inverse: {
      main: `${brandColors.marble}FF`,
      dark: `${brandColors.marble}E0`,
      light: `${brandColors.marble}A3`,
      disabled: `${brandColors.marble}52`,
    },
  },
  positive: {
    standard: {
      main: supportColors.positive.dark,
      disabled: '#ADCBCB',
    },
  },
  negative: {
    standard: {
      main: `${supportColors.negative.dark}FF`,
      dark: `${supportColors.negative.dark}E0`,
      light: `${supportColors.negative.dark}A3`,
      disabled: `${supportColors.negative.dark}52`,
    },
  },
} as const;

export const surfaceColors = {
  dark: {
    black: neutralColors.black,
    darkest: brandColors.carbon,
    dark: neutralColors.darkest,
  },
  light: {
    white: neutralColors.white,
    lightest: brandColors.marble,
    light: neutralColors.lightest,
    medium: neutralColors.light,
  },
  neutral: {
    dark: supportColors.neutral.main,
    light: supportColors.neutral.light,
  },
  positive: {
    dark: supportColors.positive.dark,
    medium: supportColors.positive.main,
    light: supportColors.positive.light,
  },
  negative: {
    dark: supportColors.negative.dark,
    light: '#FDF2F1',
  },
  info: {
    dark: supportColors.info.dark,
    medium: supportColors.info.medium,
    light: supportColors.info.light,
  },
  accent: {
    dark: brandColors.yellowDark,
    light: brandColors.yellowLight,
  },
} as const;

export const strokeColors = {
  dark: {
    8: `${brandColors.carbon}14`,
    16: `${brandColors.carbon}29`,
    32: `${brandColors.carbon}52`,
  },
  light: {
    8: `${brandColors.marble}14`,
    16: `${brandColors.marble}29`,
    32: `${brandColors.marble}52`,
  },
} as const;

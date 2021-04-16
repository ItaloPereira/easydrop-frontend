export const brandColors = {
  primary: '#004d97',
  coal: '#212121',
} as const;

export const brandVariants = {
  coal: {
    100: `${brandColors.coal}FF`,
    60: `${brandColors.coal}99`,
  },
  primaryLight: `${brandColors.primary}B3`,
};

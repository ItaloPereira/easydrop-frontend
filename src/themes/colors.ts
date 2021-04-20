export const brandColors = {
  primary: '#004d97',
  coal: '#212121',
} as const;

export const brandVariants = {
  coal: {
    100: `${brandColors.coal}FF`,
    90: `${brandColors.coal}E6`,
    80: `${brandColors.coal}CC`,
    70: `${brandColors.coal}B3`,
    60: `${brandColors.coal}99`,
    50: `${brandColors.coal}80`,
    40: `${brandColors.coal}66`,
    30: `${brandColors.coal}4D`,
    20: `${brandColors.coal}33`,
    10: `${brandColors.coal}1A`,
  },
  primaryLight: `${brandColors.primary}B3`,
};

export interface CoalColor {
  100: string;
  90: string;
  80: string;
  70: string;
  60: string;
  50: string;
  40: string;
  30: string;
  20: string;
  10: string;
}

declare module '@material-ui/core/styles/createPalette' {
  interface PaletteOptions {
    coal?: Partial<CoalColor>;
  }
  interface Palette {
    coal: Partial<CoalColor>;
  }
}

export interface CoalColor {
  100: string;
  60: string;
}

declare module '@material-ui/core/styles/createPalette' {
  interface PaletteOptions {
    coal?: Partial<CoalColor>;
  }
  interface Palette {
    coal: Partial<CoalColor>;
  }
}

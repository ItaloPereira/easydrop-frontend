export interface CoalColor {
  100: string;
}

declare module '@material-ui/core/styles/createPalette' {
  interface PaletteOptions {
    coal?: Partial<CoalColor>;
  }
  interface Palette {
    coal: Partial<CoalColor>;
  }
}

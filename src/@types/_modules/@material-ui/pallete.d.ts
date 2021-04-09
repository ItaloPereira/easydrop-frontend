export interface CarbonColor {
  10: string;
  20: string;
  35: string;
  60: string;
  70: string;
  90: string;
  100: string;
}

export interface MarbleColor {
  10: string;
  20: string;
  35: string;
  60: string;
  90: string;
  100: string;
}

export interface SecondarySurfaces {
  carbonLight: string;
  carbonDark: string;
  marbleLight: string;
  marbleDark: string;
}

export interface SurfaceColors {
  infoMedium: string;
  positive: string;
}

declare module '@material-ui/core/styles/createPalette' {
  interface PaletteOptions {
    carbon?: Partial<CarbonColor>;
    marble?: Partial<MarbleColor>;
    secondarySurfaces?: Partial<SecondarySurfaces>;
    surfaceColors?: Partial<SurfaceColors>;
  }
  interface Palette {
    carbon: Partial<CarbonColor>;
    marble: Partial<CarbonColor>;
    secondarySurfaces: Partial<SecondarySurfaces>;
    surfaceColors: Partial<SurfaceColors>;
  }
}

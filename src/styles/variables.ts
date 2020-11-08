interface StyleVariable {
  fontSize: number;
  fontSizeUnit: string;
  primary: Color;
  secondary: Color;
}

export interface Color {
  color: string,
  light: string,
  dark: string,
}

export const variable: StyleVariable = {
  fontSize: 16,
  fontSizeUnit: 'px',
  primary: {
    color: '#2c3ddd',
    light: '#737cd4',
    dark: '#222fa7',
  },
  secondary: {
    color: '#333333',
    light: '#757575',
    dark: '#2d2626',
  },
}

export type ColorType = 'primary' | 'secondary';
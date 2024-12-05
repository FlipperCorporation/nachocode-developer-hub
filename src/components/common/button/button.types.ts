export enum Type {
  contained = 'contained',
  outlined = 'outlined',
  text = 'text',
}

export enum Size {
  small = 'small',
  medium = 'medium',
  large = 'large',
}

export enum Color {
  primary = 'primary',
  secondary = 'secondary',
  black = 'black',
}

export enum Shape {
  square = 'square',
  round = 'round',
}

export interface IButtonProps {
  type?: Type;
  size?: Size;
  color?: Color;
  shape?: Shape;
  disabled?: boolean;
  width?: string;
  maxWidth?: string;
  onClick?: () => void;
}

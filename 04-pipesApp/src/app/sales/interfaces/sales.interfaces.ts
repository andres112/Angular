export enum Color {
  red,
  black,
  blue,
  yellow,
  green,
}

export interface Hero {
  name: string;
  flight: boolean;
  color: Color;
}

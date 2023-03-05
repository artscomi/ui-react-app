import { transparentize } from "polished";

export const rawMq = {
  desktop: "min-width: 1024px",
  large: "min-width: 768px",
  medium: "min-width: 568px",
};

export const mq = {
  desktop: `@media(${rawMq.desktop})`,
  large: `@media(${rawMq.large})`,
  medium: `@media(${rawMq.medium})`,
};

export const colors = {
  primary: "#071948",
  secondary: "#4036ED",
  secondaryLight: "#EBEAFD",
  tertiary: "#4036ED",
  accent: "#11C6CF",
  black: "#333333",
  white: "#FFFFFF",
  grey: "#E6E8ED",
  greyDark: "#36456B",
  greyLight: "#838CA3",
  greyLighter: "#B5BAC8",
};

export const theme = {
  colors,
  mq,
  shadows: {
    floating: `0 6px 24px 0 ${transparentize(0.8, colors.black)}`,
    lifted: `0 2px 8px 0 ${transparentize(0.7, colors.black)}`,
    raised: `0 4px 16px 0 ${transparentize(0.7, colors.black)}`,
    soft: `0 1px 4px 0 ${transparentize(0.7, colors.black)}`,
  },
  spacings: {
    "2xl": 48,
    "3xl": 64,
    "4xl": 80,
    "5xl": 96,
    l: 24,
    m: 16,
    "m-l": 20,
    s: 8,
    "s-m": 12,
    xl: 32,
    xs: 4,
    xxs: 2,
  },
};

export type ThemeConfig = typeof theme;

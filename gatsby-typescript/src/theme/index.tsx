import { isString } from 'lodash'

const variants = {
  h1: {
    fontWeight: 400,
    fontSize: '5rem',
    lineHeight: '1.16',
  },
  h2: {
    fontWeight: 400,
    fontSize: '3.5rem',
    lineHeight: '48px',
  },
  h3: {
    fontWeight: 400,
    fontSize: '3rem',
    lineHeight: '48px',
  },
  h4: {
    fontWeight: 400,
    fontSize: '2.125rem',
    lineHeight: '32px',
  },
  h5: {
    fontWeight: 400,
    fontSize: '1.5rem',
    lineHeight: '1.5em',
  },
  h6: {
    fontWeight: 400,
    fontSize: '1.25rem',
    lineHeight: '1.5em',
  },
  subtitle1: {
    fontWeight: 400,
    fontSize: '1rem',
    lineHeight: '24px',
  },
  subtitle2: {
    fontWeight: 500,
    fontSize: '0.875rem',
    lineHeight: '16px',
  },
  body1: {
    fontWeight: 400,
    fontSize: '1rem',
    lineHeight: '1.5em',
  },
  body2: {
    fontWeight: 400,
    fontSize: '0.875rem',
    lineHeight: '20px',
  },
}

export type TypographyVariants = keyof typeof variants

const styleColors = {
  primary: '#5458F7',
  info: '#3B76FA',
}

const theme = {
  borderRadius: {
    block: '16px',
  },
  shadow: 'rgba(13, 13, 13, 0.32) 0px 3px 7px 0px',
  colors: {
    ...styleColors,
    white: '#f0f0f0',
    background: {
      main: '#18181A',
      surface: '#1d1d1f',
    },
    text: {
      main: '#E9E0E0',
      secondary: '#BBB6B6',
    },
    divider: '#BBB6B6',
  },
  breakpoints: {
    sm: '576px',
    md: '768px',
    lg: '992px',
    xl: '1200px',
  },
  heights: {
    get header() {
      return theme.spacing(6)
    },
  },
  spacing: (...args: Array<string | number>) =>
    args
      .map((item: string | number) =>
        isString(item) ? item : `${0.5 * item}rem`
      )
      .join(' '),
  variants,
  textStyle: (variant: TypographyVariants) => ({
    fontSize: theme.variants[variant].fontSize,
    fontWeight: theme.variants[variant].fontWeight,
    lineHeight: theme.variants[variant].lineHeight,
    fontFamily:
      '-apple-system, BlinkMacSystemFont, Roboto, Helvetica, sans-serif, Arial;',
  }),
}

export const themeTypes = {
  default: theme,
}

export type Theme = typeof theme

export type StyleColors = keyof typeof styleColors

export type TypographyColors = keyof typeof theme.colors.text

export default theme

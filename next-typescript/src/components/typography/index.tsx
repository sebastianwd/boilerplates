import React from 'react'
import styled, { CSSObject, useTheme } from 'styled-components'
import { isNumber } from 'lodash'
import { TypographyColors, TypographyVariants } from '@theme'

export interface TypographyProps extends React.HTMLAttributes<HTMLElement> {
  tag?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'span' | 'a' | 'label'
  variant?: TypographyVariants
  color?: TypographyColors
  gutterBottom?: boolean | number
  align?: 'left' | 'center' | 'right' | 'justify'
  wrap?: boolean
  htmlFor?: string
}

const StyledElement = styled.div<{ baseStyle: CSSObject }>`
  ${(props) => props.baseStyle};
`

const Typography = (props: TypographyProps) => {
  const {
    children,
    tag = 'p',
    color = 'main',
    wrap,
    variant = 'body1',
    align,
    style,
    gutterBottom,
    ...other
  } = props

  const theme = useTheme()

  const textStyle: CSSObject = {
    ...theme.textStyle(variant),
    ...(color && { color: theme.colors.text[color] }),
    ...(wrap && { overflowWrap: 'break-word' }),
    ...(align && { textAlign: align }),
    ...(gutterBottom && {
      marginBottom: theme.spacing(
        isNumber(gutterBottom) ? (gutterBottom as number) : 1
      ),
    }),
  }

  const isLink = tag === 'a'

  const linkProps = {
    target: '_blank',
    rel: 'noopener noreferrer',
  }

  return (
    <StyledElement
      as={tag}
      baseStyle={textStyle}
      {...(isLink && linkProps)}
      {...other}
    >
      {children}
    </StyledElement>
  )
}

export default Typography

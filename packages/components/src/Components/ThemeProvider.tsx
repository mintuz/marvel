import React, { FC } from 'react'
import { ThemeProvider, createGlobalStyle } from 'styled-components'
import { themeGet } from '@styled-system/theme-get'

// @ts-ignore
import defaultTheme from '../theme/default'

const ResetStyle = createGlobalStyle`
  /* Box sizing rules */
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  /* Remove default padding */
  ul[class],
  ol[class] {
    padding: 0;
  }

  /* Remove default margin */
  body,
  h1,
  h2,
  h3,
  h4,
  p,
  ul[class],
  ol[class],
  li,
  figure,
  figcaption,
  blockquote,
  dl,
  dd {
    margin: 0;
  }

  /* Set core body defaults */
  body {
    min-height: 100vh;
    scroll-behavior: smooth;
    text-rendering: optimizeSpeed;
    line-height: 1.5;
  }

  /* Remove list styles on ul, ol elements with a class attribute */
  ul[class],
  ol[class] {
    list-style: none;
  }

  /* A elements that don't have a class get default styles */
  a:not([class]) {
    text-decoration-skip-ink: auto;
  }

  /* Make images easier to work with */
  img {
    max-width: 100%;
    display: block;
  }

  /* Natural flow and rhythm in articles by default */
  article > * + * {
    margin-top: 1em;
  }

  /* Inherit fonts for inputs and buttons */
  input,
  button,
  textarea,
  select {
    font: inherit;
  }

  input[type=text],
  input[type=email],
  input[type=password],
  textarea,
  button {
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
  }

  /* Remove all animations and transitions for people that prefer not to see them */
  @media (prefers-reduced-motion: reduce) {
    * {
      animation-duration: 0.01ms !important;
      animation-iteration-count: 1 !important;
      transition-duration: 0.01ms !important;
      scroll-behavior: auto !important;
    }
  }
`

const FontFamilyStyle = createGlobalStyle`
  body,
  html {
    font-family: ${themeGet('fontFamily')}
  }
`

export type ThemeProps = {
    theme: { [key: string]: any }
}

const Theme: FC<ThemeProps> = ({ children, theme = defaultTheme }) => {
    return (
        // @ts-ignore
        <ThemeProvider theme={theme}>
            <React.Fragment>
                <ResetStyle />
                <FontFamilyStyle />
                {children}
            </React.Fragment>
        </ThemeProvider>
    )
}

export default Theme

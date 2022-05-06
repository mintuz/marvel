import React, { FC } from 'react'
import {
    ThemeProvider as StyledThemeProvider,
    createGlobalStyle,
} from 'styled-components'
import { themeGet } from './system'
import { Theme } from './interface'
import { defaultTheme } from './defaultTheme'

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
    line-height: ${themeGet('lineHeight')}
  }
`

export type ThemeProviderProps = {
    theme: Theme
    children: React.ReactElement
}

export const ThemeProvider: FC<ThemeProviderProps> = ({
    children,
    theme = defaultTheme,
}) => (
    <StyledThemeProvider
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        theme={theme}
    >
        <>
            <ResetStyle />
            <FontFamilyStyle />
            {children}
        </>
    </StyledThemeProvider>
)

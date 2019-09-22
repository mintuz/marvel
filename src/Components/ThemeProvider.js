import React from 'react'
import { ThemeProvider, createGlobalStyle } from 'styled-components'
import defaultTheme from '../theme/default'
import { themeGet } from '@styled-system/theme-get'

const GlobalStyle = createGlobalStyle`
  body,
  html {
    font-family: ${themeGet('fontFamily')}
  }
`

export default function Theme({ children, theme = defaultTheme }) {
    return (
        <ThemeProvider theme={theme}>
            <React.Fragment>
                <GlobalStyle />
                {children}
            </React.Fragment>
        </ThemeProvider>
    )
}

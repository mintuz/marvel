import React, { FC } from 'react'
import { ThemeProvider, createGlobalStyle } from 'styled-components'
import { themeGet } from '@styled-system/theme-get'

// @ts-ignore
import defaultTheme from '../theme/default'

const GlobalStyle = createGlobalStyle`
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
        <ThemeProvider theme={theme}>
            <React.Fragment>
                <GlobalStyle />
                {children}
            </React.Fragment>
        </ThemeProvider>
    )
}

export default Theme

import React from 'react';
import { ThemeProvider } from 'styled-components';
import defaultTheme from '../theme/default';

export default function Theme({ children, theme = defaultTheme }) {
    return (
        <ThemeProvider theme={theme}>
            {children}
        </ThemeProvider>
    );
}

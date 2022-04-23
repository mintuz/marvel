/* eslint-disable @typescript-eslint/no-explicit-any */
import 'styled-components'

declare module 'styled-components' {
    export interface DefaultTheme {
        breakpoints: [string]
        space: [number]
        fontSizes: [number]
        fontFamily: string
        lineHeights: [number]
        fontWeights: [number]
        // TODO make these more explicit
        colors: any
        grid: any
        gridItem: any
        textStyle: any
        button: any
    }
}

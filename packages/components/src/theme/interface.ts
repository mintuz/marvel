type Colors = {
    accent: string
    black: string
    white: string
    transparent: string
    [key: string]: string
}

type Primitives = {
    breakpoints: string[]
    space: number[]
    fontSizes: number[]
    fontFamily: string
    lineHeights: number[]
    fontWeights: number[]
    colors: Colors
}

type TextStyle = {
    fontSize: string
    lineHeight: string
}

type TextStyles = {
    caption: TextStyle
    body: TextStyle
    displayOne: TextStyle
    displayTwo: TextStyle
    displayThree: TextStyle
    displayFour: TextStyle
    displayFive: TextStyle
}

type ButtonStyle = {
    color: string
    backgroundColor: string
    border?: string
}

type Buttons = {
    primary: ButtonStyle
    secondary: ButtonStyle
}

type Settings = { typography: TextStyles; button: Buttons }

export type Theme = Primitives &
    Settings & {
        [key: string]: any
    }

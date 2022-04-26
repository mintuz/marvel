type Colors = {
    accent: string
    black: string
    white: string
    transparent: string
    defaultBorderColor: string
    accordionBorderColor: string
    accordionContentBackgroundColor: string
    accordionButtonBackgroundColor: string
    [key: string]: string
}

type Primitives = {
    breakpoints: string[]
    space: number[]
    fontSizes: string[]
    fontFamily: string
    lineHeight: number
    fontWeights: number[]
    colors: Colors
}

type TextStyle = {
    fontSize: string
    lineHeight?: string
    fontWeight?: string
    letterSpacing?: string
    textTransform?: string
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
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        [key: string]: any
    }

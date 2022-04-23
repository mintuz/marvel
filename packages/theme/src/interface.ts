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
    fontSizes: number[]
    fontFamily: string
    lineHeights: number[]
    fontWeights: number[]
    colors: Colors
}

type TextStyles = {
    caption: string
    body: string
    displayOne: string
    displayTwo: string
    displayThree: string
    displayFour: string
    displayFive: string
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

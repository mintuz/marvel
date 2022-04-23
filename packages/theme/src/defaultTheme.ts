import { rem } from 'polished'
import { Theme } from './interface'

const primitives = {
    breakpoints: ['400px', '640px', '900px', '1008px', '1280px'],
    space: [0, 4, 8, 12, 16, 24, 32, 48, 64],
    radii: [0, 4, 8, 12, 16],
    fontSizes: [14, 16, 20, 24, 32],
    fontFamily: "'Open Sans', sans-serif",
    lineHeights: [24, 28, 32, 40],
    fontWeights: [100, 200, 300, 400, 500, 600, 700, 800, 900],
    colors: {
        black: 'rgb(0, 0, 0)',
        white: 'rgb(255, 255, 255)',
        transparent: 'transparent',
        grey: 'rgb(200, 200, 200)',
        red: 'rgb(202, 0, 0)',
    },
}

export const defaultTheme: Theme = {
    ...primitives,
    colors: {
        ...primitives.colors,
        accent: 'rgb(0, 0, 0)',
        defaultBorderColor: 'rgb(228, 228, 228)',
        accordionBorderColor: 'rgb(228, 228, 228)',
        accordionButtonBackgroundColor: 'rgb(255, 255, 255)',
        accordionContentBackgroundColor: 'rgb(250, 250, 250)',
    },
    typography: {
        caption: rem(primitives.fontSizes[0]),
        body: rem(primitives.fontSizes[1]),
        displayOne: rem(primitives.fontSizes[4]),
        displayTwo: rem(primitives.fontSizes[3]),
        displayThree: rem(primitives.fontSizes[2]),
        displayFour: rem(primitives.fontSizes[2]),
        displayFive: rem(primitives.fontSizes[2]),
    },
    button: {
        primary: {
            color: primitives.colors.white,
            backgroundColor: primitives.colors.black,
        },
        secondary: {
            border: `1px solid ${primitives.colors.black}`,
            backgroundColor: primitives.colors.transparent,
            color: primitives.colors.black,
        },
    },
    badge: {
        primary: {
            fontSize: rem(primitives.fontSizes[0]),
            lineHeight: rem(primitives.fontSizes[1]),
            color: primitives.colors.white,
            backgroundColor: primitives.colors.black,
        },
        secondary: {
            fontSize: rem(primitives.fontSizes[0]),
            lineHeight: rem(primitives.fontSizes[1]),
            border: `2px solid ${primitives.colors.black}`,
            color: primitives.colors.black,
        },
    },
}

import { modularScale } from 'polished'
import { Theme } from './interface'

const breakpoints = ['400px', '640px', '900px', '1008px', '1280px']

const primitives = {
    breakpoints,
    mediaQueries: {
        small: `@media screen and (min-width: ${breakpoints[0]})`,
        medium: `@media screen and (min-width: ${breakpoints[1]})`,
        large: `@media screen and (min-width: ${breakpoints[2]})`,
        xlarge: `@media screen and (min-width: ${breakpoints[3]})`,
        xxlarge: `@media screen and (min-width: ${breakpoints[4]})`,
    },
    space: [0, 4, 8, 12, 16, 24, 32, 48, 64, 96, 128],
    radii: [0, 4, 8, 12, 16],
    fontSizes: [
        modularScale(-1, '1rem'),
        modularScale(0, '1rem'),
        modularScale(1, '1rem'),
        modularScale(2, '1rem'),
        modularScale(3, '1rem'),
        modularScale(4, '1rem'),
        modularScale(5, '1rem'),
    ],
    fontFamily:
        '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif',
    lineHeight: 1.5,
    fontWeights: [100, 200, 300, 400, 500, 600, 700, 800, 900],
    colors: {
        black: 'rgb(33, 33, 33)',
        white: 'rgb(255, 255, 255)',
        transparent: 'transparent',
        grey: 'rgb(228, 228, 228)',
        red: 'rgb(202, 0, 0)',
    },
}

export const defaultTheme: Theme = {
    ...primitives,
    baseFontSize: primitives.fontSizes[1],
    colors: {
        ...primitives.colors,
        accent: 'rgb(0, 0, 0)',
        defaultBorderColor: primitives.colors.grey,
        accordionBorderColor: primitives.colors.grey,
        accordionButtonBackgroundColor: primitives.colors.white,
        accordionButtonForegroundColor: primitives.colors.black,
        accordionContentBackgroundColor: 'rgb(250, 250, 250)',
        accordionContentForegroundColor: primitives.colors.black,
    },
    typography: {
        caption: primitives.fontSizes[0],
        body: primitives.fontSizes[1],
        displayOne: primitives.fontSizes[5],
        displayTwo: primitives.fontSizes[4],
        displayThree: primitives.fontSizes[3],
        displayFour: primitives.fontSizes[2],
        displayFive: primitives.fontSizes[2],
    },
    button: {
        primary: {
            color: primitives.colors.white,
            backgroundColor: primitives.colors.black,
        },
        secondary: {
            border: `2px solid ${primitives.colors.grey}`,
            backgroundColor: primitives.colors.transparent,
            color: primitives.colors.black,
        },
    },
    badge: {
        primary: {
            fontSize: primitives.fontSizes[1],
            color: primitives.colors.white,
            backgroundColor: primitives.colors.black,
        },
        secondary: {
            fontSize: primitives.fontSizes[1],
            border: `2px solid ${primitives.colors.black}`,
            color: primitives.colors.black,
        },
    },
}

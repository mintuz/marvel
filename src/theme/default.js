import { rem } from 'polished'

const primitives = {
    breakpoints: ['400px', '640px', '900px', '1008px', '1280px'],
    space: [0, 4, 8, 12, 16, 24, 32, 48, 64],
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

export default {
    ...primitives,
    textStyle: {
        caption: {
            fontSize: rem(primitives.fontSizes[0]),
            lineHeight: rem(primitives.lineHeights[0]),
        },
        body: {
            fontSize: rem(primitives.fontSizes[1]),
            lineHeight: rem(primitives.lineHeights[1]),
        },
        displayOne: {
            fontSize: rem(primitives.fontSizes[4]),
            lineHeight: rem(primitives.lineHeights[4]),
        },
        displayTwo: {
            fontSize: rem(primitives.fontSizes[3]),
            lineHeight: rem(primitives.lineHeights[3]),
        },
        displayThree: {
            fontSize: rem(primitives.fontSizes[2]),
            lineHeight: rem(primitives.lineHeights[2]),
        },
    },
    button: {
        primary: {
            color: primitives.colors.white,
            backgroundColor: primitives.colors.black,
            fontSize: rem(primitives.fontSizes[1]),
            lineHeight: rem(primitives.lineHeights[1]),
        },
        secondary: {
            border: `1px solid ${primitives.colors.black}`,
            color: primitives.colors.black,
            fontSize: rem(primitives.fontSizes[1]),
            lineHeight: rem(primitives.lineHeights[1]),
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
            border: `1px solid ${primitives.colors.black}`,
            color: primitives.colors.black,
        },
    },
}

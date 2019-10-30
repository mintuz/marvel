import { rem } from 'polished'

const primitives = {
    breakpoints: ['400px', '640px', '900px', '1008px', '1280px'],
    space: [0, 4, 8, 12, 16, 24, 32, 48, 64],
    fontSizes: [16, 20, 24, 32],
    fontFamily: "'Open Sans', sans-serif",
    lineHeights: [24, 28, 32, 40],
    fontWeights: [100, 200, 300, 400, 500, 600, 700, 800, 900],
    colors: {
        black: 'rgb(0, 0, 0)',
        white: 'rgb(255, 255, 255)',
        transparent: 'transparent',
        gray: 'rgb(200, 200, 200)',
        red: 'rgb(202, 0, 0)',
    },
}

export default {
    ...primitives,
    grid: {
        default: {
            marginLeft: -8,
            marginRight: -8,
        },
        none: {
            marginLeft: 0,
            marginRight: 0,
        },
    },
    gridItem: {
        default: {
            paddingLeft: 8,
            paddingRight: 8,
        },
        none: {
            paddingLeft: 0,
            paddingRight: 0,
        },
    },
    textStyle: {
        body: {
            fontSize: rem(primitives.fontSizes[0]),
            lineHeight: rem(primitives.lineHeights[0]),
        },
        displayOne: {
            fontSize: rem(primitives.fontSizes[3]),
            lineHeight: rem(primitives.lineHeights[3]),
        },
        displayTwo: {
            fontSize: rem(primitives.fontSizes[2]),
            lineHeight: rem(primitives.lineHeights[2]),
        },
        displayThree: {
            fontSize: rem(primitives.fontSizes[1]),
            lineHeight: rem(primitives.lineHeights[1]),
        },
    },
    button: {
        primary: {
            color: primitives.colors.white,
            backgroundColor: primitives.colors.black,
            fontSize: rem(primitives.fontSizes[0]),
            lineHeight: rem(primitives.lineHeights[0]),
        },
        secondary: {
            border: `1px solid ${primitives.colors.black}`,
            color: primitives.colors.black,
            fontSize: rem(primitives.fontSizes[0]),
            lineHeight: rem(primitives.lineHeights[0]),
        },
    },
}

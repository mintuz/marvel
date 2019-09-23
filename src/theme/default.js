import { rem } from 'polished'

const primitives = {
    breakpoints: ['400px', '640px', '900px', '1008px', '1280px'],
    space: [0, 4, 8, 12, 16],
    fontSizes: [16, 20, 24, 32],
    fontFamily: "'Open Sans', sans-serif",
    lineHeights: [24, 28, 32, 40],
    fontWeights: [100, 200, 300, 400, 500, 600, 700, 800, 900],
    colors: {
        black: 'rgb(0, 0, 0)',
        white: 'rgb(255, 255, 255)',
        transparent: 'transparent',
        blacks: [
            'rgba(0,0,0,.0125)',
            'rgba(0,0,0,.025)',
            'rgba(0,0,0,.05)',
            'rgba(0,0,0,.1)',
            'rgba(0,0,0,.2)',
            'rgba(0,0,0,.3)',
            'rgba(0,0,0,.4)',
            'rgba(0,0,0,.5)',
            'rgba(0,0,0,.6)',
            'rgba(0,0,0,.7)',
            'rgba(0,0,0,.8)',
            'rgba(0,0,0,.9)',
        ],
        whites: [
            'rgba(255,255,255,.0125)',
            'rgba(255,255,255,.025)',
            'rgba(255,255,255,.05)',
            'rgba(255,255,255,.1)',
            'rgba(255,255,255,.2)',
            'rgba(255,255,255,.3)',
            'rgba(255,255,255,.4)',
            'rgba(255,255,255,.5)',
            'rgba(255,255,255,.6)',
            'rgba(255,255,255,.7)',
            'rgba(255,255,255,.8)',
            'rgba(255,255,255,.9)',
        ],
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
            fontSize: rem(primitives.fontSizes[1]),
            lineHeight: rem(primitives.lineHeights[1]),
        },
        displayTwo: {
            fontSize: rem(primitives.fontSizes[2]),
            lineHeight: rem(primitives.lineHeights[2]),
        },
        displayThree: {
            fontSize: rem(primitives.fontSizes[3]),
            lineHeight: rem(primitives.lineHeights[3]),
        },
    },
    buttons: {
        primary: {
            color: primitives.colors.white,
            backgroundColor: primitives.colors.black,
        },
        secondary: {
            border: `1px solid ${primitives.colors.black}`,
            color: primitives.colors.black,
        },
    },
}

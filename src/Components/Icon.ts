import styled from 'styled-components'
import { layout } from 'styled-system'

/*
    1. Allow SVG to scale via font-size
    2. Allow SVG to scale according to it's container width and height.
*/
export default styled.span`
    display: inline-block;
    width: 1em; /* [1] */
    height: 1em; /* [1] */
    color: inherit;
    ${layout}

    svg {
        width: inherit; /* [2] */
        height: inherit; /* [2] */
        fill: currentColor;
    }
`

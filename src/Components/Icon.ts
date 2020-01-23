import styled from 'styled-components'

/*
    1. Allow SVG to scale via font-size
    2. Allow SVG to scale according to it's container width and height.
*/
export default styled.span`
    display: inline-block;
    width: 1em; /* [1] */
    height: 1em; /* [1] */
    color: inherit;

    svg {
        width: inherit; /* [2] */
        height: inherit; /* [2] */
        fill: currentColor;
    }
`

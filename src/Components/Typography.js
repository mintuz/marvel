import styled from 'styled-components'
import {
    variant,
    space,
    typography,
    flexbox,
    layout,
    color,
} from 'styled-system'

const Typography = styled.p`
    ${space}
    ${typography}
    ${color}
    ${layout}
    ${flexbox}
    ${variant({
        scale: 'textStyle',
    })}
`

export default Typography

Typography.defaultProps = {
    variant: 'body',
}

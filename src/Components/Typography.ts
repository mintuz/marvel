import styled from 'styled-components'
import {
    variant,
    space,
    typography,
    flexbox,
    layout,
    color,
    SpaceProps,
    TypographyProps as SystemTypographyProps,
    ColorProps,
    LayoutProps,
    FlexboxProps,
} from 'styled-system'

export type TypographyProps = SpaceProps &
    SystemTypographyProps &
    ColorProps &
    LayoutProps &
    FlexboxProps & {
        variant?: string
    }

const Typography = styled.p<TypographyProps>`
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

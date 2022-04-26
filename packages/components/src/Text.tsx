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

type TextProps = SpaceProps &
    SystemTypographyProps &
    ColorProps &
    LayoutProps &
    FlexboxProps & {
        variant?: string
    }

export const Text = styled.p<TextProps>`
    ${space}
    ${typography}
    ${color}
    ${layout}
    ${flexbox}
    ${variant({
        scale: 'typography',
    })}
`

Text.defaultProps = {
    variant: 'body',
}

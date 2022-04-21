import styled from 'styled-components'
import {
    space,
    typography,
    flexbox,
    layout,
    color,
    border,
    position,
    SpaceProps,
    TypographyProps,
    FlexboxProps,
    LayoutProps,
    ColorProps,
    BorderProps,
    PositionProps,
} from 'styled-system'

export type BoxProps = SpaceProps &
    TypographyProps &
    FlexboxProps &
    LayoutProps &
    ColorProps &
    BorderProps &
    PositionProps

export const Box = styled.div<BoxProps>`
    ${layout}
    ${flexbox}
    ${position}
    ${space}
    ${typography}
    ${color}
    ${border}
`

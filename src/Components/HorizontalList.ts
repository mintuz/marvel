import styled from 'styled-components'
import {
    space,
    flexbox,
    layout,
    SpaceProps,
    FlexboxProps,
    LayoutProps,
} from 'styled-system'

export type HorizontalListProps = SpaceProps & FlexboxProps & LayoutProps

export default styled.ul<HorizontalListProps>`
    list-style: none;
    margin: 0;
    padding: 0;
    ${space}
    ${flexbox}
    ${layout}

    > li,
    > li > a,
    > li > button {
        display: inline-block;
        zoom: 1;
    }
`

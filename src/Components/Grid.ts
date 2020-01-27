import styled from 'styled-components'
import { layout, space, LayoutProps, SpaceProps } from 'styled-system'

export type GridItemProps = LayoutProps & SpaceProps

export const GridWrap = styled.div`
    max-width: 1280px;
    margin-left: auto;
    margin-right: auto;
    padding-left: 16px;
    padding-right: 16px;
    box-sizing: border-box;
`

export const GridItem = styled.div<GridItemProps>`
    ${layout}
    ${space}
    flex: 0 0 auto;
`

export const Grid = styled.div`
    display: flex;
    flex: 0 1 auto;
    flex-direction: row;
    flex-wrap: wrap;
    margin-left: -8px;
    margin-right: -8px;

    &,
    > * {
        box-sizing: border-box;
    }

    > * {
        padding-left: 8px;
        padding-right: 8px;
    }
`

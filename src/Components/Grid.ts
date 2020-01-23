import styled from 'styled-components'
import { layout, space, variant, LayoutProps, SpaceProps } from 'styled-system'

export type GridProps = {
    gutter?: string
}

export type GridItemProps = LayoutProps & SpaceProps

const gridVariant = variant({
    key: 'grid',
    prop: 'gutter',
})

const gridItemVariant = variant({
    key: 'gridItem',
    prop: 'gutter',
})

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

export const Grid = styled.div<GridProps>`
    display: flex;
    flex: 0 1 auto;
    flex-direction: row;
    flex-wrap: wrap;
    ${gridVariant}

    &,
  > * {
        box-sizing: border-box;
    }

    > * {
        ${gridItemVariant}
    }
`

Grid.defaultProps = {
    gutter: 'default',
}

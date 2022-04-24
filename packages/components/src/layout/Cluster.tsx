import styled from 'styled-components'
import { system, layout, LayoutProps } from 'styled-system'

type ClusterProps = {
    /** Spacing unit defined within theme object */
    spacing: number
} & LayoutProps

export const Cluster = styled.div<ClusterProps>`
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;
    align-items: center;
    ${system({
        spacing: {
            property: 'gap',
            scale: 'space',
        },
    })}
    ${layout}
`

Cluster.defaultProps = {
    spacing: 4,
}

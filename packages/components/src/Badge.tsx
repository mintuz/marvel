import styled from 'styled-components'
import { variant } from 'styled-system'
import { css } from '@mintuz/marvel-theme'

export const Badge = styled.span<{ variant: string }>`
    display: inline-block;
    text-transform: uppercase;

    ${css({
        borderRadius: [1],
        paddingTop: [2],
        paddingRight: [4],
        paddingBottom: [2],
        paddingLeft: [4],
    })}

    ${variant({
        scale: 'badge',
    })}
`

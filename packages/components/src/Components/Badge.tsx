import styled from 'styled-components'
import { variant } from 'styled-system'

export const Badge = styled.span<{ variant: string }>`
    display: inline-block;
    padding: 4px 8px 4px 8px;
    text-transform: uppercase;
    border-radius: 4px;

    ${variant({
        scale: 'badge',
    })}
`

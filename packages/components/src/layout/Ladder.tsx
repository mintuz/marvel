import styled from 'styled-components'
import { colorValue } from '@mintuz/marvel-theme'

export const Ladder = styled.div`
    display: flex;
    flex-direction: column;

    & > * + * {
        border-top: 2px solid;
        border-color: ${colorValue('defaultBorderColor')};
    }
`

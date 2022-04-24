import React, { FC } from 'react'
import styled from 'styled-components'
import { css } from '@mintuz/marvel-theme'

const Group = styled.div`
    & + & {
        margin-top: 48px;
    }
`

const GroupItem = styled.div`
    .block & + & {
        ${css({
            marginTop: [4],
        })}
    }

    .inline & {
        display: inline-block;
    }

    .inline & {
        ${css({
            marginRight: [4],
        })}
        &:last-of-type {
            margin-right: 0;
        }
    }
`

export const FormGroup: FC<{
    inline: boolean
    children: React.ReactElement
}> = ({ children, inline = false }) => (
    <Group className={inline ? 'inline' : 'block'}>
        {React.Children.map(children, (child, id) => (
            // eslint-disable-next-line react/no-array-index-key
            <GroupItem key={`group-${id}`}>{child}</GroupItem>
        ))}
    </Group>
)

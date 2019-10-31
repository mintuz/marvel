import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import css from '@styled-system/css'

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

export default function FormGroup({ children, inline = false }) {
    return (
        <Group className={inline ? 'inline' : 'block'}>
            {React.Children.map(children, (child, id) => {
                return <GroupItem key={`group-${id}`}>{child}</GroupItem>
            })}
        </Group>
    )
}

FormGroup.propTypes = {
    inline: PropTypes.bool,
    children: PropTypes.node,
}

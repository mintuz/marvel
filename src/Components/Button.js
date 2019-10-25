import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { variant } from 'styled-system'
import css from '@styled-system/css'

const Button = styled.button`
    display: inline-flex;
    cursor: pointer;
    border: none;
    margin: 0;
    text-align: center;
    align-items: center;
    justify-content: center;

    ${css({
        paddingLeft: [4],
        paddingRight: [4],
        paddingTop: [2],
        paddingBottom: [2],
    })}

    ${variant({
        scale: 'button',
    })}
`

Button.propTypes = {
    /** Variant of button to render. */
    variant: PropTypes.string,
    /** React Children. */
    children: PropTypes.node,
}

export default Button

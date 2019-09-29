import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { variant } from 'styled-system'

const Button = styled.button`
    display: inline-flex;
    cursor: pointer;
    border: none;
    margin: 0;
    padding: 16px;
    text-align: center;
    align-items: center;
    justify-content: center;

    ${variant({
        scale: 'button',
    })}
`

Button.propTypes = {
    /**
      Variant of button to render.
    */
    variant: PropTypes.string,
    /**
      React Children.
    */
    children: PropTypes.node,
}

export default Button

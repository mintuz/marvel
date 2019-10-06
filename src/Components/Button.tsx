import React, { FC } from 'react'
import styled from 'styled-components'
import { variant } from 'styled-system'
import css from '@styled-system/css'

type ButtonProps = {
    /** Called each time the button is clicked */
    onClick?: () => void
    /** Variant of button to render. */
    variant?: string
    type?: string
    'aria-expanded'?: string
    'aria-controls'?: string
}

const StyledButton = styled.button`
    display: inline-flex;
    cursor: pointer;
    border: none;
    margin: 0;
    text-align: center;
    align-items: center;
    justify-content: center;

    ${css({
        padding: [4],
    })}

    ${variant({
        scale: 'button',
    })}
`

const Button: FC<ButtonProps> = ({
    children,
    variant = 'primary',
    onClick = () => {},
}) => {
    return (
        <StyledButton variant={variant} onClick={onClick}>
            {children}
        </StyledButton>
    )
}

export default Button

import styled from 'styled-components'
import { variant } from 'styled-system'
import { layout, LayoutProps } from 'styled-system'
import css from '@styled-system/css'
import { ButtonHTMLAttributes } from 'react'

export type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
    variant?: string
} & LayoutProps

export const Button = styled.button<ButtonProps>`
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
        borderRadius: [1],
    })}

    ${variant({
        scale: 'button',
    })}

    ${layout}
`

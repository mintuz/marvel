import React, { FC } from 'react'
import styled from 'styled-components'
import { variant } from 'styled-system'
import { layout, LayoutProps } from 'styled-system'
import css from '@styled-system/css'

export type ButtonProps = {
    onClick?: () => void
    variant?: string
    type?: string
    'aria-expanded'?: boolean
    'aria-controls'?: string
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
    })}
    ${variant({
        scale: 'button',
    })}
    ${layout}
`

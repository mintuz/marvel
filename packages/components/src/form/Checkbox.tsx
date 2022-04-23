import React, { FC, InputHTMLAttributes } from 'react'
import styled from 'styled-components'
import css from '@styled-system/css'
import { colorValue } from '../theme'

const Label = styled.label`
    display: flex;
    align-items: center;
    ${css({ gap: [2] })}
`

const Input = styled.input`
    accent-color: ${colorValue('accent')};
`

const LabelText = styled.span``

export type CheckboxProps = InputHTMLAttributes<HTMLInputElement> & {
    label: string
}

export const Checkbox: FC<CheckboxProps> = ({ label, ...rest }) => (
    <Label>
        <Input type="checkbox" {...rest} />
        <LabelText>{label}</LabelText>
    </Label>
)

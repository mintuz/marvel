import React, { useState, FC } from 'react'
import styled from 'styled-components'
import css from '@styled-system/css'

const Label = styled.label`
    position: relative;
    display: inline-block;
`

const Input = styled.input`
    position: absolute;
    overflow: hidden;
    width: 0;
    height: 0;
    opacity: 0;
`

const LabelText = styled.span`
    display: inline-block;
    vertical-align: middle;
    position: relative;
    cursor: pointer;
    padding-left: calc(16px + 12px);

    &:before,
    &:after {
        position: absolute;
        top: 50%;
        left: 0;
        height: 16px;
        width: 16px;
        margin-top: -8px;
        line-height: 1rem;
        border-radius: 3px;
    }

    &:before {
        content: '';
        border: 2px solid;

        ${css({
            backgroundColor: 'white',
            borderColor: 'grey',
        })}
    }

    /* Checked */

    ${Input}:checked ~ &:before {
        ${css({
            backgroundColor: 'black',
            color: 'white',
        })}
    }

    ${Input}:checked ~ &:after {
        border: 2px solid;
        content: url('data:image/svg+xml;base64,PHN2ZwogICAgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB2aWV3Qm94PSIwIDAgMjQgMjQiPgogICAgPHBhdGggZD0iTTAgMGgyNHYyNEgweiIvPgogICAgPHBhdGggZmlsbD0iI0ZGRiIgZD0iTTkgMTYuMkw0LjggMTJsLTEuNCAxLjRMOSAxOSAyMSA3bC0xLjQtMS40TDkgMTYuMnoiLz4KPC9zdmc+Cg==');
        ${css({
            borderColor: 'black',
        })}
    }

    /* Focus State*/

    ${Input}:focus ~ &:before,
    ${Input}:focus ~ &:after {
        border: 2px solid;
        ${css({
            borderColor: 'black',
        })}
    }

    ${Input}:focus:checked ~ &:before {
        ${css({
            backgroundColor: 'black',
        })}
    }

    /* Disabled */

    ${Input}:disabled ~ & {
        pointer-events: none;
    }

    ${Input}:disabled ~ &:before,
    ${Input}:disabled ~ &:after {
        cursor: not-allowed;
    }
`

export type CheckboxProps = {
    id: string
    disabled: boolean
    value: string
    checked: boolean
    onChange: (e: React.SyntheticEvent) => void
    label: string
}

export const Checkbox: FC<CheckboxProps> = ({
    id,
    disabled = false,
    value,
    checked = false,
    onChange,
    label,
}) => {
    const [state, setState] = useState(checked)
    const handleChange = (e: React.SyntheticEvent) => {
        setState(!state)
        onChange(e)
    }
    return (
        <div>
            <Label>
                <Input
                    type="checkbox"
                    id={id}
                    name={id}
                    disabled={disabled}
                    value={value}
                    onChange={e => {
                        handleChange(e)
                    }}
                    checked={state}
                />
                <LabelText>{label}</LabelText>
            </Label>
        </div>
    )
}

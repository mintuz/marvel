import React, { useState, FC, forwardRef } from 'react'
import styled from 'styled-components'
import { css } from '@mintuz/marvel-theme'
import { Add, Remove } from 'styled-icons/material'
import { VisuallyHidden } from '../VisuallyHidden'
import { useEffect } from 'react'

const StyledStepper = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
`

const StepperControls = styled.div`
    display: flex;
    align-items: center;
    ${css({
        marginLeft: [4],
    })}
`

const Button = styled.button`
    display: inline-flex;
    justify-content: center;
    align-items: center;
    width: 32px;
    height: 32px;
    border: none;
    ${css({
        backgroundColor: 'black',
        color: 'white',
        borderRadius: [1],
    })}
`

const ButtonMinus = styled(Button)`
    order: 0;
`

const ButtonPlus = styled(Button)`
    order: 2;
`

const Value = styled.div`
    display: inline-block;
    order: 1;
    text-align: center;
    min-width: 48px;
    border: none;

    ${css({
        paddingLeft: [2],
        paddingRight: [2],
    })}
`

const LabelText = styled.label``

export type StepperProps = {
    id: string
    label: string
    incrementBy?: number
    onChange: (newValue: number) => void
    value: number
}

export const Stepper: FC<StepperProps> = forwardRef<
    HTMLInputElement,
    StepperProps
>(({ id, label, incrementBy = 1, onChange, value }, ref) => {
    const [internalValue, setValue] = useState<number>(value)

    useEffect(() => {
        setValue(value)
    }, [value])

    return (
        <StyledStepper>
            <LabelText htmlFor={id}>{label}</LabelText>
            <StepperControls>
                <ButtonMinus
                    onClick={() => {
                        const newValue = internalValue - incrementBy

                        setValue(newValue)
                        onChange(newValue)
                    }}
                >
                    <Remove size="1em" />
                    <VisuallyHidden>Remove</VisuallyHidden>
                </ButtonMinus>
                <ButtonPlus
                    onClick={() => {
                        const newValue = internalValue + incrementBy

                        setValue(newValue)
                        onChange(newValue)
                    }}
                >
                    <Add size="1em" />
                    <VisuallyHidden>Add</VisuallyHidden>
                </ButtonPlus>
                <Value>{internalValue}</Value>
                <VisuallyHidden>
                    <input
                        id={id}
                        ref={ref}
                        value={`${internalValue}`}
                        type="number"
                        readOnly
                    />
                </VisuallyHidden>
            </StepperControls>
        </StyledStepper>
    )
})

import React, { useState, FC } from 'react'
import styled from 'styled-components'
import css from '@styled-system/css'
import { Add, Remove } from 'styled-icons/material'

const Stepper = styled.div`
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
    border-radius: 3px;

    ${css({
        backgroundColor: 'black',
        color: 'white',
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

export type StepperComponentProps = {
    value: number
    label: string
    incrementBy: number
}

const StepperComponent: FC<StepperComponentProps> = ({
    value = 0,
    label,
    incrementBy = 1,
}) => {
    const [internalValue, setValue] = useState(value)
    return (
        <Stepper>
            <LabelText> {label}</LabelText>
            <StepperControls>
                <ButtonMinus
                    aria-label="Remove"
                    onClick={() => {
                        setValue(internalValue - incrementBy)
                    }}
                >
                    {/*
                    // @ts-ignore */}
                    <Remove size="1em" />
                </ButtonMinus>
                <ButtonPlus
                    aria-label="Plus"
                    onClick={() => {
                        setValue(internalValue + incrementBy)
                    }}
                >
                    {/*
                    // @ts-ignore */}
                    <Add size="1em" />
                </ButtonPlus>
                <Value>{internalValue}</Value>
                <input type="hidden" value={internalValue} />
            </StepperControls>
        </Stepper>
    )
}

export default StepperComponent

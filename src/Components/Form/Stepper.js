import React, { useState } from 'react'
import PropTypes from 'prop-types'
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
    width: 24px;
    height: 24px;
    border: none;
    border-radius: 3px;

    ${css({
        backgroundColor: 'black',
        color: 'white',
    })}
`

const ButtonMinus = styled(Button)`
    order: 0;
    display: inline-block;
`

const ButtonPlus = styled(Button)`
    order: 2;
    display: inline-block;
`

const Value = styled.div`
    display: inline-block;
    order: 1;
    text-align: center;
    min-width: 48px;
    border: none;

    ${css({
        paddingLeft: [4],
        paddingRight: [4],
    })}
`

const LabelText = styled.label``

export default function StepperComponent({
    value = 0,
    label,
    incrementBy = 1,
}) {
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
                    <Remove size="1em" />
                </ButtonMinus>
                <ButtonPlus
                    aria-label="Plus"
                    onClick={() => {
                        setValue(internalValue + incrementBy)
                    }}
                >
                    <Add size="1em" />
                </ButtonPlus>
                <Value>{internalValue}</Value>
                <input type="hidden" value={internalValue} />
            </StepperControls>
        </Stepper>
    )
}

StepperComponent.propTypes = {
    value: PropTypes.number,
    incrementBy: PropTypes.number,
    label: PropTypes.string,
}

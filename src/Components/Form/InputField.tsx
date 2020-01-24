import React, { FC } from 'react'
import styled from 'styled-components'
import classNames from 'classnames'
import css from '@styled-system/css'

const LabelText = styled.span`
    display: block;
    ${css({
        marginBottom: [2],
    })}

    .mv-c-input-field--has-error & {
        ${css({
            color: 'red',
        })}
    }
`

const InputField = styled.input`
    border: 2px solid;
    border-radius: 3px;

    ${css({
        padding: [2],
        borderColor: 'grey',
        fontSize: [0],
    })}

    .mv-c-input-field--has-icon & {
        text-indent: 20px;
    }

    .mv-c-input-field--has-error & {
        ${css({
            color: 'red',
            borderColor: 'red',
        })}
    }

    .mv-c-input-field--has-error &::placeholder {
        ${css({
            color: 'red',
        })}
    }
`

const ErrorMessage = styled.div`
    ${css({
        marginTop: [2],
        color: 'red',
    })}
`

const InputContainer = styled.div`
    position: relative;
`

const Icon = styled.div`
    position: absolute;
    top: 0;
    left: 8px;
    bottom: 0;
    z-index: 2;
    display: flex;
    align-items: center;
    justify-content: center;
`

export type InputFieldComponentProps = {
    onChange: () => void
    onBlur: () => void
    onFocus: () => void
    value: string
    placeholder: string
    icon: React.ReactElement
    label: string
    error: string
    type: string
    pattern: string
}

const InputFieldComponent: FC<InputFieldComponentProps> = ({
    error,
    label,
    icon,
    ...rest
}) => {
    const cssClassNames = classNames('mv-c-input-field', {
        'mv-c-input-field--has-error': error,
        'mv-c-input-field--has-icon': icon,
    })

    return (
        <label className={cssClassNames}>
            <LabelText>{label}</LabelText>
            <InputContainer>
                {icon && (
                    <Icon>{React.cloneElement(icon, { size: '1em' })}</Icon>
                )}
                <InputField {...rest} />
                {error && <ErrorMessage>{error}</ErrorMessage>}
            </InputContainer>
        </label>
    )
}

export default InputFieldComponent

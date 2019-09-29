import React from 'react'
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
    border: 1px solid;
    border-radius: 3px;

    ${css({
        padding: [2],
        borderColor: 'gray',
        fontSize: [0],
    })}

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

export default props => {
    const cssClassNames = classNames('mv-c-input-field', {
        'mv-c-input-field--has-error': props.error,
        'mv-c-input-field--has-prefix-icon': true,
        'mv-c-input-field--has-affix-icon': true,
    })

    return (
        <label className={cssClassNames}>
            <LabelText>{props.label}</LabelText>
            <div>
                <InputField
                    onChange={props.onChange}
                    onBlur={props.onBlur}
                    onFocus={props.onFocus}
                    placeholder={props.placeholder}
                    value={props.value}
                />
                {props.error && <ErrorMessage>{props.error}</ErrorMessage>}
            </div>
        </label>
    )
}

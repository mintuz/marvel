import React, { FC, useState } from 'react'
import { render, fireEvent } from '@testing-library/react'
import { Stepper } from './Stepper'

test('Can increment value', () => {
    const fn = jest.fn()

    const rendered = render(
        <Stepper value={0} id="test-stepper" label="Test Label" onChange={fn} />
    )

    expect(rendered.queryByText('0')).toBeInTheDocument()

    fireEvent.click(rendered.getByText('Add'))

    expect(rendered.queryByText('1')).toBeInTheDocument()
    expect(rendered.getByLabelText('Test Label')).toHaveValue(1)

    expect(fn).toBeCalledWith(1)
})

test('Can decrement value', () => {
    const fn = jest.fn()

    const rendered = render(
        <Stepper value={0} id="test-stepper" label="Test Label" onChange={fn} />
    )

    expect(rendered.queryByText('0')).toBeInTheDocument()

    fireEvent.click(rendered.getByText('Remove'))

    expect(rendered.queryByText('-1')).toBeInTheDocument()
    expect(rendered.getByLabelText('Test Label')).toHaveValue(-1)

    expect(fn).toBeCalledWith(-1)
})

test('Increment by custom value', () => {
    const fn = jest.fn()

    const rendered = render(
        <Stepper
            incrementBy={10}
            value={0}
            id="test-stepper"
            label="Test Label"
            onChange={fn}
        />
    )

    expect(rendered.queryByText('0')).toBeInTheDocument()

    fireEvent.click(rendered.getByText('Add'))

    expect(rendered.queryByText('10')).toBeInTheDocument()
    expect(rendered.getByLabelText('Test Label')).toHaveValue(10)

    expect(fn).toBeCalledWith(10)
})

test('Only call onChange once for a change', () => {
    const fn = jest.fn()

    const rendered = render(
        <Stepper
            incrementBy={10}
            value={0}
            id="test-stepper"
            label="Test Label"
            onChange={fn}
        />
    )

    expect(fn).toHaveBeenCalledTimes(0)

    fireEvent.click(rendered.getByText('Add'))

    expect(fn).toHaveBeenCalledTimes(1)
})

test('Update component when parent component value state updated', () => {
    const fn = jest.fn()

    const Wrapper: FC = () => {
        const [value, setValue] = useState(0)
        return (
            <div>
                <button
                    onClick={() => {
                        setValue(1)
                    }}
                >
                    Change Value
                </button>
                <Stepper
                    incrementBy={1}
                    value={value}
                    id="test-stepper"
                    label="Test Label"
                    onChange={fn}
                />
            </div>
        )
    }

    const rendered = render(<Wrapper />)

    expect(rendered.getByLabelText('Test Label')).toHaveValue(0)

    fireEvent.click(rendered.getByText('Change Value'))

    expect(rendered.getByLabelText('Test Label')).toHaveValue(1)

    fireEvent.click(rendered.getByText('Add'))

    expect(rendered.getByLabelText('Test Label')).toHaveValue(2)
})

import React from 'react'
import styled from 'styled-components'
import { Carousel } from '@mintuz/marvel'

const FakeItem = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 250px;
    height: 250px;
    margin-right: 16px;
    border: 2px dashed rgb(237, 237, 237);
`

const Button = styled.button`
    background-color: red;
    padding: 8px;
    margin-right: 16px;
    font-size: 20px;
    margin-bottom: 20px;
`

export default {
    title: 'Components/Carousel',
}

export const defaultStory = () => (
    <Carousel
        button={(direction) => (
            <Button data-testid={`button-${direction}`}>{direction}</Button>
        )}
    >
        <FakeItem data-testid="fake-item fake-item-1">1</FakeItem>
        <FakeItem data-testid="fake-item fake-item-2">2</FakeItem>
        <FakeItem data-testid="fake-item fake-item-3">3</FakeItem>
        <FakeItem data-testid="fake-item fake-item-4">4</FakeItem>
        <FakeItem data-testid="fake-item fake-item-5">5</FakeItem>
        <FakeItem data-testid="fake-item fake-item-6">6</FakeItem>
    </Carousel>
)

defaultStory.story = {
    name: 'Default',
}

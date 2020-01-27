import { Carousel } from '../../src'
import React from 'react'
import styled from 'styled-components'

// Bug with cypress-react-unit-test for the time being,
// this makes it so the tests use the same version of ReactDOM.
import * as ReactDOM from 'react-dom'
window.ReactDOM = ReactDOM

const FakeItem = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 500px;
    height: 500px;
    margin-right: 16px;
    border: 2px dashed rgb(237, 237, 237);
`

const Button = styled.button`
    position: relative;
    background-color: red;
    padding: 8px;
    margin-right: 16px;
    font-size: 20px;
    margin-bottom: 16px;
`

describe('Carousel component', () => {
    before(() => {
        cy.mount(
            <Carousel
                button={direction => (
                    <Button data-testid={`carousel-button-${direction}`}>
                        {direction}
                    </Button>
                )}
            >
                <FakeItem data-testid="fake-item fake-item-1">0</FakeItem>
                <FakeItem data-testid="fake-item fake-item-2">1</FakeItem>
                <FakeItem data-testid="fake-item fake-item-3">2</FakeItem>
                <FakeItem data-testid="fake-item fake-item-4">3</FakeItem>
                <FakeItem data-testid="fake-item fake-item-5">4</FakeItem>
                <FakeItem data-testid="fake-item fake-item-6">5</FakeItem>
            </Carousel>
        )
    })

    beforeEach(() => {
        cy.get('[data-testid="carousel-items"]').scrollTo(0, 0)
        cy.wait(500)
    })

    it('Renders carousel items', () => {
        cy.get('[data-testid~="carousel-item"]').should('have.length', 6)
    })

    it('Renders previous button', () => {
        cy.get('[data-testid="carousel-button-previous"]').should('exist')
    })

    it('Renders next button', () => {
        cy.get('[data-testid="carousel-button-next"]').should('exist')
    })

    it('When Next is clicked, scroll to next item', () => {
        cy.get('[data-testid="carousel-button-next"]').click()
        cy.wait(500)
        cy.get('[data-testid~="carousel-item--1--active"]').should('exist')
    })

    it('When Previous is clicked, scroll to previous item', () => {
        cy.get('[data-testid="carousel-button-next"]').click()
        cy.wait(500)
        cy.get('[data-testid~="carousel-item--1--active"]').should('exist')
        cy.get('[data-testid="carousel-button-previous"]').click()
        cy.wait(500)
        cy.get('[data-testid~="carousel-item--0--active"]').should('exist')
    })
})

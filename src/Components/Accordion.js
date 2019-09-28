import React, { useState } from 'react'
import styled from 'styled-components'

const AccordionList = styled.ul`
    list-style: none;
    padding: 0;
    margin: 0;
`

const AccordionItemContainer = styled.div`
    border: 1px solid RGB(239, 239, 239);
    margin-top: -1px;
`

const AccordionTitle = styled.button`
    display: block;
    width: 100%;
    text-align: left;
    border: none;
    padding: 16px;

    :not(.is-open) &:hover {
        background-color: RGB(239, 239, 239);
    }
`

const AccordionContent = styled.div`
    display: none;
    padding: 16px;

    .is-open & {
        display: block;
    }
`

export const AccordionItem = ({ header, children, onClick, isOpen, id }) => {
    return (
        <AccordionItemContainer className={isOpen ? 'is-open' : ''}>
            <AccordionTitle
                aria-expanded={isOpen}
                aria-controls={`accordion-item--${id}`}
                onClick={onClick}
            >
                {header}
            </AccordionTitle>
            <AccordionContent
                aria-hidden={!isOpen}
                id={`accordion-item--${id}`}
            >
                {children}
            </AccordionContent>
        </AccordionItemContainer>
    )
}

export const Accordion = ({ children }) => {
    const [openAccordionItemId, setOpenAccordionItem] = useState(0)
    return (
        <AccordionList>
            {React.Children.map(children, (child, currentItemId) => {
                return (
                    <li>
                        {React.cloneElement(child, {
                            onClick() {
                                setOpenAccordionItem(currentItemId)
                            },
                            id: currentItemId,
                            isOpen: currentItemId === openAccordionItemId,
                        })}
                    </li>
                )
            })}
        </AccordionList>
    )
}

import React, { useState, FC, ReactElement } from 'react'
import styled from 'styled-components'
import css from '@styled-system/css'

const AccordionList = styled.ul`
    list-style: none;
    padding: 0;
    margin: 0;
`

const AccordionItemContainer = styled.div`
    border: 1px solid;
    margin-top: -1px;
    ${css({
        borderColor: 'gray',
    })}
`

const AccordionTitle = styled.button`
    display: block;
    width: 100%;
    text-align: left;
    border: none;
    ${css({
            padding: [4],
        })}
        :not(.mv-c-accordion-item--is-open)
        &:hover {
        ${css({
            borderColor: 'gray',
        })}
    }
`

const AccordionContent = styled.div`
    display: none;
    ${css({
        padding: [4],
    })}

    .mv-c-accordion-item--is-open & {
        display: block;
    }
`

export type AccordionItemProps = {
    header: ReactElement
    onClick: () => void
    isOpen: boolean
    id: string
}

export const AccordionItem: FC<AccordionItemProps> = ({
    header,
    children,
    onClick,
    isOpen,
    id,
}) => {
    return (
        <AccordionItemContainer
            className={isOpen ? 'mv-c-accordion-item--is-open' : ''}
        >
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

export const Accordion: FC = ({ children }) => {
    const [openAccordionItemId, setOpenAccordionItem] = useState(0)
    return (
        <AccordionList>
            {React.Children.map(children, (child, currentItemId) => {
                return (
                    <li>
                        {React.cloneElement(child as React.ReactElement<any>, {
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

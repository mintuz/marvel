import React, { useState, FC, ReactElement } from 'react'
import styled from 'styled-components'
import { space, color } from 'styled-system'
import css from '@styled-system/css'
import { KeyboardArrowDown } from 'styled-icons/material'

const AccordionList = styled.ul`
    list-style: none;
    padding: 0;
    margin: 0;

    ${space}
    ${color}
`

const AccordionItemContainer = styled.div`
    border: 1px solid;
    margin-top: -1px;
    ${css({
        borderColor: 'grey',
    })}
`

const AccordionTitle = styled.button`
    position: relative;
    display: block;
    width: 100%;
    text-align: left;
    border: none;

    &:before {
        position: absolute;
        bottom: -1px;
        height: 1px;
        content: ' ';

        ${css({
            left: [4],
            right: [4],
            backgroundColor: 'grey',
        })}
    }

    ${css({
            padding: [4],
            borderColor: 'grey',
        })}
        :not(.mv-c-accordion-item--is-open)
        &:hover {
        ${css({
            borderColor: 'grey',
        })}
    }
`

const AccordionTitleContentWrap = styled.div`
    display: flex;
    justify-content: space-between;
`

const AccordionTitleIcon = styled.div`
    width: 32px;
    height: 32px;

    .mv-c-accordion-item--is-open & {
        transform: rotate(180deg);
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
                <AccordionTitleContentWrap>
                    <div>{header}</div>
                    <AccordionTitleIcon>
                        {/*
                        // @ts-ignore */}
                        <KeyboardArrowDown />
                    </AccordionTitleIcon>
                </AccordionTitleContentWrap>
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

export const Accordion: FC = ({ children, ...rest }) => {
    const [openAccordionItemId, setOpenAccordionItem] = useState(0)
    return (
        <AccordionList {...rest}>
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

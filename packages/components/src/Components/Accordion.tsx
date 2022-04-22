import React, { FC, ReactElement } from 'react'
import styled from 'styled-components'
import css from '@styled-system/css'
import * as RadixAccordion from '@radix-ui/react-accordion'
import { KeyboardArrowDown } from 'styled-icons/material'
import { colorValue } from '../theme'
import { Icon } from './Icon'

const StyledAccordion = styled(RadixAccordion.Root)`
    width: 100%;
    border: 2px solid ${colorValue('accordionBorderColor')};
    ${css({ borderRadius: [1] })}
`

const StyledAccordionItem = styled(RadixAccordion.AccordionItem)`
    width: 100%;
    border-bottom: 2px solid ${colorValue('accordionBorderColor')};
    & + & {
        border: none;
    }
`

const StyledAccordionHeader = styled(RadixAccordion.AccordionHeader)``

const StyledAccordionButton = styled(RadixAccordion.AccordionTrigger)`
    width: 100%;
    background-color: ${colorValue('accordionButtonBackgroundColor')};
    border: none;
    ${css({
        fontSize: [1],
        paddingTop: [2],
        paddingBottom: [2],
        paddingLeft: [4],
        paddingRight: [4],
    })}
`

const StyledAccordionButtonContent = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: baseline;
    ${css({ gap: [4] })}
`

const StyledAccordionButtonIconContainer = styled.div`
    ${css({ fontSize: [3] })}
`

const StyledAccordionChevron = styled(KeyboardArrowDown)`
    transition: transform 100ms;
    [data-state='open'] & {
        transform: rotate(180deg);
    }
`

const StyledAccordionContent = styled(RadixAccordion.Content)`
    ${css({ padding: [4] })}
    background-color: ${colorValue('accordionContentBackgroundColor')};
`

export type AccordionProps = {
    type?: 'single' | 'multiple'
    collapsible?: boolean
    disabled?: boolean
}

export type AccordionItemProps = {
    id: string
    header: ReactElement
}

export const Accordion: FC<AccordionProps> = ({
    children,
    type = 'single',
    collapsible = false,
    disabled = false,
}) => {
    return (
        <StyledAccordion
            type={type}
            collapsible={collapsible}
            disabled={disabled}
        >
            {children}
        </StyledAccordion>
    )
}

export const AccordionItem: FC<AccordionItemProps> = ({
    children,
    id,
    header,
}) => {
    return (
        <StyledAccordionItem value={id}>
            <StyledAccordionHeader>
                <StyledAccordionButton>
                    <StyledAccordionButtonContent>
                        {header}
                        <StyledAccordionButtonIconContainer>
                            <Icon>
                                <StyledAccordionChevron aria-hidden />
                            </Icon>
                        </StyledAccordionButtonIconContainer>
                    </StyledAccordionButtonContent>
                </StyledAccordionButton>
            </StyledAccordionHeader>
            <StyledAccordionContent>{children}</StyledAccordionContent>
        </StyledAccordionItem>
    )
}

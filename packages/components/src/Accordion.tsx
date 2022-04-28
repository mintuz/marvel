import React, { FC, ReactElement } from 'react'
import styled from 'styled-components'
import * as RadixAccordion from '@radix-ui/react-accordion'
import { KeyboardArrowDown } from 'styled-icons/material'
import { colorValue, css } from '@mintuz/marvel-theme'
import { Icon } from './Icon'

const StyledAccordion = styled(RadixAccordion.Root)`
    width: 100%;
    border: 2px solid ${colorValue('accordionBorderColor')};
    ${css({ borderRadius: [1] })}
`

const StyledAccordionItem = styled(RadixAccordion.AccordionItem)`
    width: 100%;
    & + & {
        border-top: 2px solid ${colorValue('accordionBorderColor')};
    }
`

const StyledAccordionHeader = styled(RadixAccordion.AccordionHeader)``

const StyledAccordionButton = styled(RadixAccordion.AccordionTrigger)`
    width: 100%;
    background-color: ${colorValue('accordionButtonBackgroundColor')};
    color: ${colorValue('accordionButtonForegroundColor')};
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
    color: ${colorValue('accordionContentForegroundColor')};
`

type AccordionProps = {
    /** Allow singluar or multiple AccordionItems to be open. */
    type?: 'single' | 'multiple'
    collapsible?: boolean
    disabled?: boolean
    children: React.ReactElement
}

type AccordionItemProps = {
    /** Required ID for initial Accordion Items */
    id: string
    /** Component to render within the AccordionItem button. */
    header: ReactElement
    /** Content to render within the Accordion Item */
    children: React.ReactElement
}

export const Accordion: FC<AccordionProps> = ({
    children,
    type = 'single',
    collapsible = false,
    disabled = false,
}) => (
    <StyledAccordion type={type} collapsible={collapsible} disabled={disabled}>
        {children}
    </StyledAccordion>
)

export const AccordionItem: FC<AccordionItemProps> = ({
    children,
    id,
    header,
}) => (
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

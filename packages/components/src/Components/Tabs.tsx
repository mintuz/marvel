import React, { useState, FC } from 'react'
import styled from 'styled-components'
import css from '@styled-system/css'
import { Button } from './Button'

export type TabProps = {
    title: string
    id: string
    onClick: () => void
    isOpen: boolean
    variant: string
    children: React.ReactElement<TabProps>[]
}

export type TabsProps = {
    activeTab: string
    children: React.ReactElement<TabProps>[]
}

const TabItems = styled.ul`
    display: flex;
    list-style: none;
    width: 100%;
    padding: 0;
    margin: 0;
`

const TabItem = styled.li`
    flex: 1 0 auto;
    margin-bottom: -1px;

    ${css({
        padding: [2],
    })}

    &.mv-c-tab--is-active {
        border: 1px solid;

        ${css({
            backgroundColor: 'white',
            color: 'black',
            borderTopColor: 'grey',
            borderLeftColor: 'grey',
            borderRightColor: 'grey',
            borderBottomColor: 'white',
        })}
    }
`

const TabButton = styled(Button)`
    width: 100%;

    .mv-c-tab--is-active & {
        border: none;
        background: transparent;
        ${css({
            backgroundColor: 'white',
            color: 'black',
        })}
    }
`

const TabContent = styled.div`
    display: none;
    border: 1px solid;

    ${css({
        padding: [4],
        borderColor: 'grey',
    })}

    &.mv-c-tab--is-active {
        display: block;
    }
`

export const Tabs: FC<TabsProps> = ({ children, activeTab }) => {
    const [active, setActive] = useState(activeTab)

    return (
        <React.Fragment>
            <TabItems>
                {React.Children.map(children, child => {
                    const isOpen = active === child.props.id
                    return (
                        <TabItem
                            className={isOpen ? 'mv-c-tab--is-active' : ''}
                        >
                            {React.cloneElement(child, {
                                isOpen,
                                onClick() {
                                    setActive(child.props.id)
                                },
                            })}
                        </TabItem>
                    )
                })}
            </TabItems>
            <div>
                {React.Children.map(children, child => {
                    const isOpen = active === child.props.id
                    return (
                        <TabContent
                            aria-hidden={!isOpen}
                            id={`tab-item-${child.props.id}`}
                            className={isOpen ? 'mv-c-tab--is-active' : ''}
                        >
                            {child.props.children}
                        </TabContent>
                    )
                })}
            </div>
        </React.Fragment>
    )
}

export const Tab: FC<TabProps> = ({
    title,
    id,
    onClick,
    isOpen,
    variant = 'primary',
}) => {
    return (
        <TabButton
            variant={variant}
            aria-expanded={isOpen}
            aria-controls={`tab-item-${id}`}
            onClick={onClick}
        >
            {title}
        </TabButton>
    )
}

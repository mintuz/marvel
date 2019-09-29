import React, { useState } from 'react'
import styled from 'styled-components'
import css from '@styled-system/css'

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

    button {
        display: block;
        border: none;
        width: 100%;

        ${css({
            padding: [4],
            backgroundColor: 'black',
            color: 'white',
            fontSize: [0],
        })}
    }

    &.mv-c-tab--is-active {
        border: 1px solid;

        ${css({
            backgroundColor: 'white',
            color: 'black',
            borderTopColor: 'gray',
            borderLeftColor: 'gray',
            borderRightColor: 'gray',
            borderBottomColor: 'white',
        })}

        button {
            background: transparent;
            text-decoration: none;
            ${css({
                backgroundColor: 'white',
                color: 'black',
            })}
        }
    }
`

const TabContent = styled.div`
    display: none;
    border: 1px solid;

    ${css({
        padding: [4],
        borderColor: 'gray',
    })}

    &.mv-c-tab--is-active {
        display: block;
    }
`

export const Tabs = ({ children, activeTab }) => {
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

export const Tab = ({ title, id, onClick, isOpen }) => {
    return (
        <button
            aria-expanded={isOpen}
            aria-controls={`tab-item-${id}`}
            onClick={onClick}
        >
            {title}
        </button>
    )
}

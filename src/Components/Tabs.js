import React, { useState } from 'react'
import styled from 'styled-components'

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
    padding: 8px;

    a {
        display: block;
        padding: 8px;
        background-color: red;
    }

    &.mv-c-tab--is-active {
        border-top: 1px solid black;
        border-left: 1px solid black;
        border-right: 1px solid black;
        border-bottom: 1px solid white;

        a {
            background: transparent;
            text-decoration: none;
        }
    }
`

const TabContent = styled.div`
    display: none;
    border: 1px solid black;
    padding: 8px;

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
                    const isActive = active === child.props.id
                    return (
                        <TabItem
                            className={isActive ? 'mv-c-tab--is-active' : ''}
                        >
                            {React.cloneElement(child, {
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
                    const isActive = active === child.props.id
                    return (
                        <TabContent
                            id={child.props.id}
                            className={isActive ? 'mv-c-tab--is-active' : ''}
                        >
                            {child.props.children}
                        </TabContent>
                    )
                })}
            </div>
        </React.Fragment>
    )
}

export const Tab = ({ title, id, onClick }) => {
    return (
        <a href={`#${id}`} onClick={onClick}>
            {title}
        </a>
    )
}

import React, { useState } from 'react'
import styled from 'styled-components'
import HorizontalList from './HorizontalList'

const TabLink = styled.li`
    a {
        text-decoration: none;
    }
`

const TabContent = styled.div`
    display: ${props => (props.isActive ? 'block' : 'none')};
`

export const Tabs = ({ children, activeTab }) => {
    const [active, setActive] = useState(activeTab)

    return (
        <React.Fragment>
            <HorizontalList>
                {React.Children.map(children, child => {
                    return (
                        <TabLink>
                            {React.cloneElement(child, {
                                onClick() {
                                    setActive(child.props.id)
                                },
                            })}
                        </TabLink>
                    )
                })}
            </HorizontalList>
            <div>
                {React.Children.map(children, child => {
                    return (
                        <TabContent
                            id={child.props.id}
                            isActive={active === child.props.id}
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

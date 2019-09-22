import React from 'react'
import Theme from '../src/Components/ThemeProvider'
import { Tabs, Tab } from '../src/Components/Tabs'

export default {
    title: '2. Components|Tabs',
}

export const tabs = () => (
    <Theme>
        <Tabs activeTab="item2">
            <Tab title="Item 1" id="item1">
                <h2>Item 1</h2>
                <p>Incidunt, sunt!</p>
            </Tab>
            <Tab title="Item 2" id="item2">
                <h2>Item 2</h2>
                <p>Incidunt, sunt!</p>
            </Tab>
        </Tabs>
    </Theme>
)

tabs.story = {
    name: 'Default',
}

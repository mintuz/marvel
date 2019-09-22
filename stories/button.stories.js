import React from 'react'
import Theme from '../src/Components/ThemeProvider'
import Button from '../src/Components/Button'

export default {
    title: '3. Components|Button',
}

export const primary = () => (
    <Theme>
        <Button variant="primary">Click Me</Button>
    </Theme>
)

primary.story = {
    name: 'Primary',
}

export const ghost = () => (
    <Theme>
        <Button variant="ghost">Click Me</Button>
    </Theme>
)

ghost.story = {
    name: 'Ghost',
}

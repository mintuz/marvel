import React from 'react'
import Theme from '../src/Components/ThemeProvider'
import HorizontalList from '../src/Components/HorizontalList'
import Box from '../src/Components/Box'

export default {
    title: '2. Objects|Horizontal List',
}

export const list = () => (
    <Theme>
        <HorizontalList>
            <Box as="li" mr={1}>
                Item 1
            </Box>
            <Box as="li" mr={1}>
                Item 2
            </Box>
            <Box as="li" mr={1}>
                Item 3
            </Box>
        </HorizontalList>
    </Theme>
)

list.story = {
    name: 'Default',
}

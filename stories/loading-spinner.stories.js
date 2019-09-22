import React from 'react'
import Theme from '../src/Components/ThemeProvider'
import Box from '../src/Components/Box'
import LoadingSpinner from '../src/Components/LoadingSpinner'

export default {
    title: '3. Components|Loading Spinner',
}

export const defaultStory = () => (
    <Theme>
        <Box fontSize="64px" color="#FF0000">
            <LoadingSpinner />
        </Box>
    </Theme>
)

defaultStory.story = {
    name: 'Default',
}

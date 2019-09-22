import React from 'react'
import Box from '../src/Components/Box'
import Typography from '../src/Components/Typography'
import Theme from '../src/Components/ThemeProvider'
import defaultTheme from '../src/theme/default'

export default {
    title: '1. Foundations|Colours',
}

export const defaultStory = () => (
    <Theme>
        <div>
            {Object.keys(defaultTheme.colors).map(color => {
                if (typeof defaultTheme.colors[color] === 'string') {
                    return (
                        <Box>
                            <Typography as="h2" variant="displayOne">
                                {color}
                            </Typography>
                            <Box width="50px" height="50px" bg={color}></Box>
                        </Box>
                    )
                }

                return (
                    <div>
                        <Typography as="h2" variant="displayOne">
                            {color}
                        </Typography>
                        <Box>
                            {defaultTheme.colors[color].map(subColor => {
                                return (
                                    <Box
                                        width="50px"
                                        height="50px"
                                        bg={subColor}
                                    >
                                        <Typography as="p">
                                            {subColor}
                                        </Typography>
                                    </Box>
                                )
                            })}
                        </Box>
                    </div>
                )
            })}
        </div>
    </Theme>
)

defaultStory.story = {
    name: 'Default',
}

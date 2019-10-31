import React from 'react'
import Box from '../src/Components/Box'
import { Grid, GridItem, Typography, ThemeProvider } from '../src'
import defaultTheme from '../src/theme/default'

export default {
    title: '1. Foundations|Colours',
}

export const defaultStory = () => (
    <ThemeProvider>
        <Grid>
            {Object.keys(defaultTheme.colors).map(color => {
                return (
                    <GridItem mb={4} width={[1 / 1, 1 / 2, 1 / 4]}>
                        <Typography
                            as="h2"
                            mt={0}
                            mb={1}
                            variant="displayThree"
                        >
                            {color}
                        </Typography>
                        <Box
                            height="50px"
                            border={`1px solid ${defaultTheme.colors.grey}`}
                            bg={color}
                        ></Box>
                    </GridItem>
                )
            })}
        </Grid>
    </ThemeProvider>
)

defaultStory.story = {
    name: 'Default',
}

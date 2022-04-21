import React from 'react'
import { Grid, GridItem, Text, ThemeProvider, theme, Box } from '@mintuz/marvel'

export default {
    title: 'Foundations/Colours',
}

export const defaultStory = () => (
    <ThemeProvider>
        <Grid>
            {Object.keys(theme.colors).map((color) => {
                return (
                    <GridItem mb={4} width={[1 / 1, 1 / 2, 1 / 4]}>
                        <Text as="h2" mt={0} mb={1} variant="displayThree">
                            {color}
                        </Text>
                        <Box
                            height="50px"
                            border={`1px solid ${Theme.colors.grey}`}
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

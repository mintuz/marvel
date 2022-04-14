import React from 'react'
import {
    Grid,
    GridItem,
    Typography,
    ThemeProvider,
    Theme,
    Box,
} from '@mintuz/marvel-components'

export default {
    title: 'Foundations/Colours',
}

export const defaultStory = () => (
    <ThemeProvider>
        <Grid>
            {Object.keys(Theme.colors).map((color) => {
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

import React from 'react'
import Box from '../src/Components/Box'
import { Grid, GridItem } from '../src/Components/Grid'
import Typography from '../src/Components/Typography'
import Theme from '../src/Components/ThemeProvider'
import defaultTheme from '../src/theme/default'

export default {
    title: '1. Foundations|Colours',
}

export const defaultStory = () => (
    <Theme>
        <Grid>
            {Object.keys(defaultTheme.colors).map(color => {
                return (
                    <GridItem mb={4} width={[1 / 1, 1 / 2, 1 / 4]}>
                        <Typography as="h2" mt={0} mb={1} variant="displayOne">
                            {color}
                        </Typography>
                        <Box
                            height="50px"
                            border={`1px solid ${defaultTheme.colors.gray}`}
                            bg={color}
                        ></Box>
                    </GridItem>
                )
            })}
        </Grid>
    </Theme>
)

defaultStory.story = {
    name: 'Default',
}

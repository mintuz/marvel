import { Grid, GridItem, Box, Text } from '@mintuz/marvel'
import { Theme } from '@mintuz/marvel-theme'
import React, { FC } from 'react'

type ColorGridProps = {
    theme: Theme
}

export const ColorGrid: FC<ColorGridProps> = ({ theme }) => {
    return (
        <Grid>
            {Object.keys(theme.colors).map((color) => {
                return (
                    <GridItem mb={4} width={[1 / 1, 1 / 2, 1 / 3]}>
                        <Text as="h2" mt={0} mb={1} variant="body">
                            {color}
                        </Text>
                        <Box
                            height="50px"
                            border={`1px solid ${theme.colors.grey}`}
                            bg={color}
                        ></Box>
                    </GridItem>
                )
            })}
        </Grid>
    )
}

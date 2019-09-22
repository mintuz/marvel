import React from 'react'
import Theme from '../src/Components/ThemeProvider'
import Typography from '../src/Components/Typography'

export default {
    title: '1. Foundations|Typography',
}

export const sizes = () => (
    <Theme>
        <div>
            <Typography as="h1" mb={[0]} mt={[0]} variant="displayThree">
                Display Three
            </Typography>
            <Typography as="h2" mb={[0]} mt={[0]} variant="displayTwo">
                Display Two
            </Typography>
            <Typography as="h3" mb={[0]} mt={[0]} variant="displayOne">
                Display One
            </Typography>
            <Typography mb={[0]} mt={[0]} variant="body">
                Body
            </Typography>
        </div>
    </Theme>
)

sizes.story = {
    name: 'Sizes',
}

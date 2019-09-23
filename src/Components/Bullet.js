import React from 'react'
import Box from './Box'

const alignmentMap = {
    top: 'flex-start',
    middle: 'center',
    bottom: 'flex-end',
}

export default function Bullet({ children, alignment = 'top' }) {
    const [Icon, Content] = React.Children.toArray(children)

    return (
        <Box
            data-testid="mv-bullet"
            display="inline-flex"
            alignItems={alignmentMap[alignment]}
            fontSize="inherit"
        >
            <Box data-testid="mv-bullet-icon" fontSize="1em">
                {Icon}
            </Box>
            <Box data-testid="mv-bullet-content" ml={2}>
                {Content}
            </Box>
        </Box>
    )
}

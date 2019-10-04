import React from 'react'
import PropTypes from 'prop-types'
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

Bullet.propTypes = {
    /** First child must be an <Icon>, second child can be a React component */
    children: PropTypes.node,
    /** Alignment of the icon, either "top" "middle" "bottom" */
    alignment: PropTypes.string,
}

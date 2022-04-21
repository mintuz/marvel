import React, { FC } from 'react'
import { Box } from './Box'

export type AlignmentProps = 'flex-start' | 'center' | 'flex-end'

export type BulletProps = {
    /** Alignment of the icon, either "top" "middle" "bottom" */
    alignment: AlignmentProps
}

const alignmentMap: { [key: string]: AlignmentProps } = {
    top: 'flex-start',
    middle: 'center',
    bottom: 'flex-end',
}

export const Bullet: FC<BulletProps> = ({ children, alignment = 'top' }) => {
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

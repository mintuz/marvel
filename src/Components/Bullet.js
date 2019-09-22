import React from 'react';
import Box from './Box';

export default function Bullet({
    children,
    alignment = 'top',
}) {
    const [
        Icon,
        Content,
    ] = React.Children.toArray(children);

    return (
        <Box
            data-testid="mv-bullet"
            display="inline-flex"
            alignItems={alignment}
            fontSize="inherit">
            <Box
                data-testid="mv-bullet-icon"
                fontSize="1em">
                {Icon}
            </Box>
            <Box
                data-testid="mv-bullet-content"
                ml={2}>
                {Content}
            </Box>
        </Box>
    );
};

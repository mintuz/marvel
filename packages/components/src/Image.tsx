import React, { FC, ImgHTMLAttributes } from 'react'
import styled from 'styled-components'

type ImageProps = ImgHTMLAttributes<HTMLImageElement> & {
    aspectRatio: string
}

const StyledImage = styled.img<ImageProps>`
    display: block;
    width: 100%;
    max-width: 100%;
    aspect-ratio: ${({ aspectRatio }) => aspectRatio};
`

export const Image: FC<ImageProps> = ({
    aspectRatio = '16:9',
    ...imageProps
}) => {
    return <StyledImage {...imageProps} aspectRatio={aspectRatio} />
}

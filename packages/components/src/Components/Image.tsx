import React, { FC } from 'react'
import styled from 'styled-components'
// @ts-ignore
import { useIntersect } from '@mintuz/react-intersect'

const ImageContainer = styled.div`
    img {
        display: block;
    }
`

const Placeholder = styled.div<{ aspect: string }>`
    position: relative;
    display: block;
    overflow: hidden;
    height: 0;
    padding-bottom: ${props => {
        const parts = props.aspect.split(':')
        return `${(parseInt(parts[1]) / parseInt(parts[0])) * 100}%`
    }};
`

const PlaceholderContent = styled.div`
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
`

export type ImageProps = {
    src: string
    alt: string
    loading: string
    aspect: string
}

export const Image: FC<ImageProps> = ({
    src,
    alt = '',
    loading = 'auto',
    aspect = '16:9',
    children,
}) => {
    const [inView, ref] = useIntersect({
        triggerOnce: true,
    })

    const supportNative =
        typeof window !== 'undefined' && 'loading' in HTMLImageElement.prototype

    if (supportNative) {
        // @ts-ignore
        return <img src={src} alt={alt} loading={loading}></img>
    }

    if (loading === 'lazy') {
        return (
            <ImageContainer ref={ref}>
                {inView ? (
                    <img src={src} alt={alt} />
                ) : (
                    <Placeholder aspect={aspect}>
                        {children && (
                            <PlaceholderContent>{children}</PlaceholderContent>
                        )}
                    </Placeholder>
                )}
            </ImageContainer>
        )
    }

    return <img src={src} alt={alt}></img>
}

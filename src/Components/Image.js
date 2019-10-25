import React from 'react'
import styled from 'styled-components'
import { useIntersect } from '@mintuz/react-intersect'

const ImageContainer = styled.div`
    img {
        display: block;
    }
`

const Placeholder = styled.div`
    position: relative;
    display: block;
    overflow: hidden;
    height: 0;
    padding-bottom: ${props => {
        const parts = props.aspect.split(':')
        return `${(parts[1] / parts[0]) * 100}%`
    }};
`

const PlaceholderContent = styled.div`
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
`

export default ({
    src,
    alt = '',
    loading = 'auto',
    aspect = '16:9',
    children,
}) => {
    const [inView, ref] = useIntersect({
        triggerOnce: true,
    })

    if (loading === 'lazy') {
        return (
            <ImageContainer ref={ref}>
                {inView ? (
                    <img src={src} alt={alt}></img>
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

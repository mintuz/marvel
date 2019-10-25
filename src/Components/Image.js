import styled from 'styled-components'
import { useIntersect } from '@mintuz/react-intersect'

const Placeholder = styled.div`
    display: block;
    overflow: hidden;
    height: 0;
    padding-bottom: ${props => {
        const parts = props.aspect.split(':')
        return (parts[1] / parts[0]) * 100
    }};
`

export default ({ src, alt = '', lazy = true, aspect = '16:9' }) => {
    const [inView, ref] = useIntersect({
        triggerOnce: true,
    })

    if (lazy) {
        return (
            <div ref={ref}>
                {inView ? (
                    <img src={src} alt={alt}></img>
                ) : (
                    <Placeholder aspect={aspect} />
                )}
            </div>
        )
    }

    return <img src={src} alt={alt}></img>
}

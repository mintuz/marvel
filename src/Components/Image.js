import { useIntersect } from '@mintuz/react-intersect'

export default ({ src, alt = '', lazy = true }) => {
    const [inView, ref] = useIntersect({
        triggerOnce: true,
    })

    if (lazy) {
        return (
            <div ref={ref}>
                {inView ? <img src={src} alt={alt}></img> : <div />}
            </div>
        )
    }

    return <img src={src} alt={alt}></img>
}

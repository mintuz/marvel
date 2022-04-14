function getRequestAnimationFrameFallback(callback: () => void) {
    window.setTimeout(callback, 1000 / 60)
}
// Get instance of requestAnimationFrame or create a fallback
function getRequestAnimationFrame() {
    return (
        window.requestAnimationFrame ||
        // @ts-ignore
        window.webkitRequestAnimationFrame ||
        getRequestAnimationFrameFallback
    )
}

/*
 * For more easing functions - @see http://gizma.com/easing/
 * only considering the t value for the range [0, 1] => [0, 1]
 * Note: do not lift and shift formulas from above website url,
 * there is no license, the author hasn't licensed the code, and we have no right to use it.
 */
const easing = {
    // decelerating to zero velocity
    easeOutCubic(t: number) {
        return Math.pow(t - 1, 3) + 1
    },
}

function calculateTime(a: number, b: number) {
    return a < b ? a : b
}

function newPosition(easedT: number, from: number, to: number) {
    return Math.ceil(easedT * (to - from) + from)
}

function scrollTo(elem: HTMLElement, to: number, duration: number) {
    const requestAnimationShim = getRequestAnimationFrame()

    const start = Date.now()
    const from = elem.scrollLeft

    function scroll() {
        const currentTime = Date.now()
        const time = calculateTime(1, (currentTime - start) / duration)
        const easedT = easing.easeOutCubic(time)
        const calculatedPosition = newPosition(easedT, from, to)

        elem.scrollLeft = calculatedPosition

        if (time < 1) {
            requestAnimationShim(scroll)
        }
    }

    requestAnimationShim(scroll)
}

export default scrollTo

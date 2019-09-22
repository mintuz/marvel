function getRequestAnimationFrameFallback(callback) {
  window.setTimeout(callback, 1000 / 60);
}
// Get instance of requestAnimationFrame or create a fallback
function getRequestAnimationFrame() {
  return (
    window.requestAnimationFrame ||
    window.webkitRequestAnimationFrame ||
    window.mozRequestAnimationFrame ||
    window.msRequestAnimationFrame ||
    window.oRequestAnimationFrame ||
    getRequestAnimationFrameFallback
  );
}

/*
 * For more easing functions - @see http://gizma.com/easing/
 * only considering the t value for the range [0, 1] => [0, 1]
 * Note: do not lift and shift formulas from above website url,
 * there is no license, the author hasn't licensed the code, and we have no right to use it.
 */
const easing = {
  // decelerating to zero velocity
  easeOutCubic(t) {
    return Math.pow(t - 1, 3) + 1;
  }
};

function calculateTime(a, b) {
  return a < b ? a : b;
}

function newPosition(easedT, from, to) {
  return Math.ceil(easedT * (to - from) + from);
}

function scrollTo(elem, to, duration) {
  const requestAnimationShim = getRequestAnimationFrame();

  const start = Date.now();
  const from = elem.scrollLeft;

  function scroll() {
    const currentTime = Date.now();
    const time = calculateTime(1, (currentTime - start) / duration);
    const easedT = easing.easeOutCubic(time);
    const calculatedPosition = newPosition(easedT, from, to);

    elem.scrollLeft = calculatedPosition;

    if (time < 1) {
      requestAnimationShim(scroll);
    }
  }

  requestAnimationShim(scroll);
}

export default scrollTo;

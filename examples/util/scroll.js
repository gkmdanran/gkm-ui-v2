function cubic(value) {
    return Math.pow(value, 3);
}
function easeInOutCubic(value) {
    return value < 0.5
        ? cubic(value * 2) / 2
        : 1 - cubic((1 - value) * 2) / 2;
}

export function funcscrollTop(scrollRef, h) {
    //h：滚动到指定元素的offsetHeight
    const rAF =
        window.requestAnimationFrame || ((func) => setTimeout(func, 16));
    const el = scrollRef.wrap;
    const beginTime = Date.now();
    const beginValue = el.scrollTop;
    const frameFunc = () => {
        const progress = (Date.now() - beginTime) / 500;
        if (progress < 1 && el.scrollTop >= h) {
            //向上滚动
            el.scrollTop =
                (beginValue - h) * (1 - easeInOutCubic(progress)) + h;
            rAF(frameFunc);
        } else if (progress < 1 && el.scrollTop < h) {
            //向下滚动
            el.scrollTop =
                (h - beginValue) * easeInOutCubic(progress) + beginValue;

            rAF(frameFunc);
        } else {
            el.scrollTop = h;
            return;
        }
    };
    rAF(frameFunc);
}
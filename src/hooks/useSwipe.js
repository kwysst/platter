export function useSwipe(onSwipeLeft, onSwipeRight) {

    let firstTouchX, firstTouchY;
    
    function onTouchStart(e) {
        firstTouchX = e.changedTouches[0].pageX
        firstTouchY = e.changedTouches[0].pageY
    }

    function onTouchEnd(e) {

        const positionX = e.changedTouches[0].pageX
        const positionY = e.changedTouches[0].pageY
        const rangeX = 80;
        const rangeY = 20;


        if (Math.abs(positionY - firstTouchY) >= rangeY) return;
        if (Math.abs(positionX - firstTouchX) <= rangeX) return;

        positionX - firstTouchX > 0 ?
            onSwipeRight && onSwipeRight() :
            onSwipeLeft && onSwipeLeft()
    }

    return {onTouchStart, onTouchEnd};
}
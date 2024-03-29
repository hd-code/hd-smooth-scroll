/*! hd-smooth-scroll v1.0.1 | MIT | https://github.com/hd-code/hd-smooth-scroll */
document.addEventListener("DOMContentLoaded", function () {
    var links = document.links;
    for (var i = 0, ie = links.length; i < ie; i++) {
        handleLink(links[i]);
    }
    function handleLink(link) {
        // stop func if link doesn't refer to the current page
        if (
            link.hostname !== location.hostname ||
            link.pathname !== location.pathname
        ) {
            return;
        }
        link.addEventListener("click", function (event) {
            return handleClick(event, link);
        });
    }
    function handleClick(event, link) {
        // get target element, stop func if there is no target
        var hash = link.hash.slice(1);
        var target = hash ? document.getElementById(hash) : document.body;
        if (!target) {
            return;
        }
        event.preventDefault(); // prevent immediate jump to target
        smoothScroll(target.getBoundingClientRect().top, hash);
    }
    var numOfSteps = 50;
    var stepDuration = 10;
    var isScrolling = false;
    function smoothScroll(distance, hash) {
        if (isScrolling) {
            return;
        }
        isScrolling = true;
        var currentXPos =
            window.pageXOffset || document.documentElement.scrollLeft;
        var currentYPos =
            window.pageYOffset || document.documentElement.scrollTop;
        var stepLength = distance / numOfSteps;
        var i = 1;
        var scrollAStep = function () {
            var targetYPos = currentYPos + i * stepLength;
            window.scrollTo(currentXPos, targetYPos);
            if (++i < numOfSteps) {
                setTimeout(scrollAStep, stepDuration);
            } else {
                isScrolling = false;
                location.hash = hash;
            }
        };
        setTimeout(scrollAStep, stepDuration);
    }
});

function scrollFunction() {
    var scrollW = window.pageYOffset || document.documentElement.scrollTop,
        btn = document.querySelector('.js_btn');

    if (scrollW > 1000) {
        btn.classList.add('active');
    } else {
        btn.classList.remove('active');
    }
}

    window.onscroll = function () {
        scrollFunction();
    };



function ScrollUp() {
    var timeOut,
        top = window.pageYOffset || document.documentElement.scrollTop;

    if (top > 0) {
        window.scrollBy(0, -100);
        timeOut = setTimeout('ScrollUp()', 20);
    } else clearTimeout(timeOut);
}
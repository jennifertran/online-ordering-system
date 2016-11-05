function showText(id, delay) {
    var elem = document.getElementById(id);

    setTimeout(function () {
        elem.style.opacity = 1;
    }, delay * 1000);
}

window.onload = function () {
    showText('delay1', 1);
    showText('delay2', 2);
    showText('delay3', 3);
};

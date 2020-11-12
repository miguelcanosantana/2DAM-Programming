function init() {
    var b = document.getElementById("ball");


    function move(ev) {
        b.style.left = (ev.clientX) + 'px';
        b.style.top = (ev.clientY) + 'px';
    }


    document.addEventListener('click', move, false);
}

window.addEventListener('DOMContentLoaded', init, false);
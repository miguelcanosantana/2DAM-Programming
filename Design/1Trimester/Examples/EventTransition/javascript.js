//Get box and event inside html
init = function() {
    box = document.getElementById("box");
    eventVar = document.getElementById("event");

    function transitionEnd(ev) {
        ev.target.className = "transitionEnd";
        eventVar.textContent = "Name of event: " + ev.type;
    }

    function clickMouse(ev) {
        ev.target.className = "transition";
        eventVar.textContent = "Name of event: " + ev.type;

        ev.target.addEventListener('transitioned', transitionEnd);
    }

    box.addEventListener('mousedown', clickMouse, false);
}

window.addEventListener('DOMContentLoaded', init, false);
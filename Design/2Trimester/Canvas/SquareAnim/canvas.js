//Paint
function start1() {

    var element = document.getElementById('canvas'); 
    canvas = element.getContext('2d');
    canvas.translate(200, 200)

    setInterval(spin);
}  


function spin(e) {
    canvas.clearRect(-200, -200, 400, 400);
    canvas.strokeRect(-100, -100, 200, 200);
    canvas.rotate((Math.PI/180) * 2)
}


window.addEventListener("load", start1, false);

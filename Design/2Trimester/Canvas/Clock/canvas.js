//Paint
counter = 0;

function start1() {

    var element = document.getElementById('canvas'); 
    canvas = element.getContext('2d');
    canvas.translate(200, 200)
    canvas.rotate((Math.PI/180) * 90)

    setInterval(spinSeconds, 100);
    setInterval(spinMinutes, 6000);
}  


//Seconds
function spinSeconds(e) {
    canvas.clearRect(-200, -200, 400, 400);
    canvas.strokeRect(-100, 0, 100, 2);
    canvas.rotate((Math.PI/180) * 6)
    canvas.restore();
}

//Minutes
function spinMinutes(e) {
    canvas.clearRect(-200, -200, 400, 400);
    canvas.strokeRect(-80, 0, 80, 4);
    canvas.save();
    
}


window.addEventListener("load", start1, false);

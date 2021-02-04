//Paint
function start1() {

    var element = document.getElementById('canvas'); 
    canvas = element.getContext('2d');
    canvas.strokeRect(0, 0, element.width, element.height);

    window.addEventListener("mousemove", paint, false);

    function paint(e) {

        canvas.clearRect(0, 0, element.width, element.height)
        canvas.strokeRect(0, 0, element.width, element.height);

        var xMouse = e.clientX - 10;
        var yMouse = e.clientY - 80;
        
        //Eye 1
        var xCenter1 = element.width/2 - 100;
        var yCenter1 = element.height/2;

        canvas.beginPath();
        canvas.arc(xCenter1, yCenter1, 80, 0, Math.PI * 2, false);
        canvas.stroke();

        var angle = Math.atan2(xMouse - xCenter1, yMouse - yCenter1);
        console.log((angle * 180) / Math.PI);

        var x1 = xCenter1 + Math.sin(angle) * 40;
        var y1 = yCenter1 + Math.cos(angle) * 40;

        canvas.beginPath();
        canvas.arc(x1, y1, 30, 0, Math.PI * 2, false);
        canvas.fill();

        //Eye 2
        var xCenter2 = element.width/2 + 100;
        var yCenter2 = element.height/2;

        canvas.beginPath();
        canvas.arc(xCenter2, yCenter2, 80, 0, Math.PI * 2, false);
        canvas.stroke();

        var angle = Math.atan2(xMouse - xCenter2, yMouse - yCenter2);
        console.log((angle * 180) / Math.PI);

        var x2 = xCenter2 + Math.sin(angle) * 40;
        var y2 = yCenter2 + Math.cos(angle) * 40;

        canvas.beginPath();
        canvas.arc(x2, y2, 30, 0, Math.PI * 2, false);
        canvas.fill();


    }

}  


window.addEventListener("load", start1, false);

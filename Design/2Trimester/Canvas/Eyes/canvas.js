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
        
        var xCenter = element.width/2;
        var yCenter = element.height/2;

        canvas.beginPath();
        canvas.arc(xCenter, yCenter, 80, 0, Math.PI * 2, false);
        canvas.stroke();

        var angle = Math.atan2(xMouse - xCenter, yMouse - yCenter);
        console.log((angle * 180) / Math.PI);

        var x = xCenter + Math.sin(angle) * 10;
        var y = yCenter + Math.cos(angle) * 10;

        canvas.beginPath();
        canvas.arc(x, y, 30, 0, Math.PI * 2, false);
        canvas.fill();


    }

}  


window.addEventListener("load", start1, false);

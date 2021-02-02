//Paint
function start1() {

    var element = document.getElementById('canvas1'); 
    canvas = element.getContext('2d');

    canvas.strokeRect(0,0,500,400);

    var image = new Image(); 
    image.src = "image.jpg";

    image.addEventListener("mousemove", paint, false);


    function paint(e) {
        var xMouse = e.clientX;
        var yMouse = e.clientY -80;

        canvas.beginPath();

        canvas.arc(xMouse, yMouse, 6, 0, Math.PI * 2, false);

        canvas.fill();
    }

}  


window.addEventListener("load", start1, false);

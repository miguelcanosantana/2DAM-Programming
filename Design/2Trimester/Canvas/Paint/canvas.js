//Paint
function start1() {

    var element = document.getElementById('canvas'); 
    canvas = element.getContext('2d');

    canvas.strokeRect(0,0,element.width,element.height);

    window.addEventListener("mousemove", paint, false);


    function paint(e) {
        var xMouse = e.clientX - 10;
        var yMouse = e.clientY - 80;

        console.log(xMouse, yMouse)

        canvas.beginPath();

        canvas.arc(xMouse, yMouse, 6, 0, Math.PI * 2, false);

        canvas.fill();
    }

}  


window.addEventListener("load", start1, false);

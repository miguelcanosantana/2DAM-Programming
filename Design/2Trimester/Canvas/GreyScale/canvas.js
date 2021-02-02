//Grey Scale
function start1() {

    var element = document.getElementById('canvas1'); 
    canvas = element.getContext('2d');

    var image = new Image(); 
    image.src = "image.jpg";

    image.addEventListener("load", function() {

        canvas.drawImage(image,0,0); 
        var info = canvas.getImageData(0,0,800,800); 
        var pos;

        for (x = 0; x <= 800; x++){ 

            for (y = 0; y <= 800; y++){ 

                pos = (info.width * 4 * y) + (x * 4);

                grey = info.data[pos] * 0.299 + info.data[pos] * 0.587 + info.data[pos] * 0.114;

                info.data[pos]      =  grey;
                info.data[pos + 1]  =  grey; 
                info.data[pos + 2]  =  grey; 
            } 
        } 

        canvas.putImageData(info,0,0); 

    });
}  


window.addEventListener("load", start1, false);

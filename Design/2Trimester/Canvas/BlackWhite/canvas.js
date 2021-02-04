//Black and White
function start1() {

    var element = document.getElementById('canvas1'); 
    canvas = element.getContext('2d');

    var image = new Image(); 
    image.src = "image.jpg";

    image.addEventListener("load", function() {

        canvas.drawImage(image,0,0); 
        var info = canvas.getImageData(0,0,element.width,element.height); 
        var pos;

        for (x = 0; x <= element.height; x++){ 

            for (y = 0; y <= element.height; y++){ 

                pos = (info.width * 4 * y) + (x * 4);

                grey = info.data[pos] * 0.299 + info.data[pos] * 0.587 + info.data[pos] * 0.114;

                //If less than 30 set to 0, else to 255
                info.data[pos]      =  info.data[pos] < 155 ? 0: 255; 
                info.data[pos + 1]  =  info.data[pos] < 155 ? 0: 255; 
                info.data[pos + 2]  =  info.data[pos] < 155 ? 0: 255; 
            } 
        } 

        canvas.putImageData(info,0,0); 

    });
}  


window.addEventListener("load", start1, false);

//Function
//Using process.stodout for not jumping lines
function drawLine(height) {
    numberCounter = 1
    spaces = height - 1;
    process.stdout.write("1".padStart(spaces + 1) );
    
    //For printing in the same line
    for (let i = 0; i < evenCounter; i++) {

        if ((i > 0) && (i < evenCounter)) {
            numberCounter ++
            //Casting a String
            process.stdout.write(numberCounter.toString());
        }
        if (i > evenCounter - 1) {
            numberCounter--
            //Casting a String
            process.stdout.write(numberCounter.toString());
        }

    }
    evenCounter = evenCounter + 2;
    console.log()
}


//Variables
var prompt = require('prompt-sync')();
var spaces;
var evenCounter = 0;
var numberCounter;

//Program
var heightOriginal = prompt('Enter the height of the numeric pyramid: ');
var height = heightOriginal;

for (let i = 0; i < heightOriginal; i++) {
    drawLine(height);
    height--;
}
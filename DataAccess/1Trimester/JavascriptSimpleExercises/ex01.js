//Function
//Using process.stodout for not jumping lines
function drawLine(height) {
    spaces = height - 1;
    process.stdout.write("a".padStart(spaces) );
    
    //For printing in the same line
    for (let i = 0; i < height; i++) {
        process.stdout.write("a");
    }
    console.log()
}


//Variables
var prompt = require('prompt-sync')();
var spaces;

//Program
var height = prompt('Enter the height of the numeric pyramid: ');

for (let i = 0; i < height; i++) {
    drawLine(height);
    height--;
}
// Program Variables
var prompt = require('prompt-sync')();
var initialHeight;


//Program
initialHeight = prompt('Enter the height of the numeric pyramid: ');
printPyr(initialHeight);


//Print Pyramid function
function printPyr(height) {

    //Function Variables
    let howMuchDraw = 1; //How much numbers to draw every line
    let howMuchSubtract = 0; //How much spaces to subtract from being drawn
    let numberPosCount = 1; //Count by 1 to check number position inside row
    let numberToDraw = 0 //Number being drawn on Pyramid
    let rowCount = 1; //Count currently row


    //Printing
    for (let i = 0; i < height; i++) {

        //Draw Spaces before Pyramid
        process.stdout.write(" ".padStart(height - howMuchSubtract) );

        //Drawing numbers
        for (let j = 0; j < howMuchDraw; j++) {

            //If number is in the middle of the row or after, subtract 2 to make numberToDraw -1
            if ((numberPosCount > rowCount)) {
                numberToDraw -= 2;
            }

            //Always add 1 to numberToDraw and numberPosCount
            numberPosCount++;
            numberToDraw++;

            //Draw the number
            process.stdout.write(numberToDraw.toString());
        }
        

        //Adds 1 to rowCount
        rowCount += 1;

        //Increases howMuchDraw by 2 (For drawing an Odd amount)
        howMuchDraw += 2;

        //Increases howMuchSubtract by 1
        howMuchSubtract++;

        //Number to Draw resets to 1
        numberToDraw = 0;//Add 1 to numberPosCount
        numberPosCount = 1;

        //Jumps a line
        console.log();
    }


}


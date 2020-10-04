//Program Variables
var prompt = require('prompt-sync')();

//Program
var initialHeight = prompt('Enter the height of the pyramid: ');
var charDrawn = prompt('Enter the character that will be drawn: ');

printPyr(initialHeight, charDrawn);


//Print Pyramid function
function printPyr(height, character) {

    //Function Variables
    let howMuchDraw = 1; //How much numbers to draw every line
    let howMuchSubtract = 0; //How much spaces to subtract from being drawn
    let numberPosCount = 1; //Count by 1 to check number position inside row
    let rowCount = 0; //Count currently row

    //Printing
    for (let i = 0; i < height; i++) {

        //Adds 1 to rowCount
        rowCount += 1;

        //Draw Spaces before Pyramid
        process.stdout.write(" ".padStart(height - howMuchSubtract) );

        //Drawing numbers
        for (let j = 0; j < howMuchDraw; j++) {

            //For all the rows except the last
            if (rowCount != height) {

                if ((numberPosCount == 1) || (numberPosCount == howMuchDraw))
                process.stdout.write(character.toString());
                else process.stdout.write(" ");

                //Always add 1 to numberPosCount
                numberPosCount++;

              //For last row 
            } else process.stdout.write(character.toString());

        }
        

        //Increases howMuchDraw by 2 (For drawing an Odd amount)
        howMuchDraw += 2;

        //Increases howMuchSubtract by 1
        howMuchSubtract++;

        //Resets numberPosCount to 1
        numberPosCount = 1;

        //Jumps a line
        process.stdout.write("\n");
    }


}
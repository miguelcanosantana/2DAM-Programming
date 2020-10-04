// Program Variables
var prompt = require('prompt-sync')();
var kingsNumber;
var typedCounter = 0;
var kings = new Array(); //If empty need to specify it's an array
var resultKings = new Array();


//Program
kingsNumber = prompt('How much kings do you want to input?: ');
console.log("Start typing:")


//Register the kings
while (typedCounter < kingsNumber) {

    //Adds the king to the first Array
    let kingName = prompt();
    kings.push(kingName);

    //Adds the king with their numbers to other Array
    let king = kings[typedCounter]
    let result = howMuchOne(king);
    resultKings.push(king + " " + result + "º");

    typedCounter++;
}


//Space
console.log("\n");

//Print all Kings
for (let i = 0; i < resultKings.length; i++) {
    let king = resultKings[i];
    console.log(king);
}


//Function for counting and returning how much appears 1 king
function howMuchOne(kingEntry) {
    let counter = 0;

    for (let j = 0; j < kings.length; j++) {
        if (kingEntry == kings[j]) counter ++;
    }

    return counter;
}

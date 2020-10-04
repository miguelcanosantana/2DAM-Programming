// Program Variables
var prompt = require('prompt-sync')();
var flush = "f";
var money = 0;


//Program
money = prompt('How much money do you have?: ');
process.stdout.write("Each turn costs 1 dollar.\n\n");


//Flush the Slot machine program
while (flush == "f") {
    process.stdout.write("You have " + money + " dollars.\n");
    flush = prompt('Press f to flush (other to exit): ');
    
    if ((flush == "f") && (money != 0)) flushMachine();
    else if (money == 0) process.stdout.write("You're broke.\n\n");

}


//Flush Machine function
function flushMachine() {

    //Function Variables
    let symbols = ["❤", "💎", "⚓", "🔔", "🍋"];
    let result = new Array(); //If empty need to specify it's an array
    let symbCount = 0;


    //Money - 1
    money--;


    //Print result Array
    for (let i = 0; i < 3; i++) {

        //Return a random symbol from Array symbols, using math.floor to round to int
        let number = Math.floor(Math.random() * symbols.length); 
        let symb = symbols[number];


        //Add to output Array
        result.push(symb);

        //Check for duplicated elements (3 = normal, 4 = duplicated, 6 = full)
        for (let j = 0; j < result.length; j++) {
            let entry = result[j];
            if (symb == entry) symbCount++;
        }

    }


    //Print Array
    console.log(result);

    //Decide the prize (3 = normal, 4 = duplicated, 6 = full)
    if (symbCount == 3) console.log("Try again!");

    if (symbCount == 4) {
        console.log("Got your money back!"); 
        money++;
    }
    
    if (symbCount == 6) {
        console.log("Got the full prize! 10 dollars!"); 
        money += 10;
    }

}
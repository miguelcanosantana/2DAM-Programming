//Program variables
var countries = ["Spain", "Russia", "Japan", "Australia"]


//Program

//print header
console.log("Min   Max   Avg".padStart(60));

//Print all the countries with their heights
for (let i = 0; i < countries.length; i++) {
    process.stdout.write((countries[i].toString() + ": ").padEnd(60));
    heightMaker();
}


//Make a Height Row of 10 for each country
function heightMaker() {
    let heights = new Array(); //If empty need to specify
    let minNumber = 0;
    let maxNumber = 0;
    let count = 0;
    let average;


    //Generate 10 entries (140 to 210)
    for (let i = 0; i < 10; i++) {

        let number = Math.floor(Math.random() * (210 - 140 + 1) + 140);
        heights.push(number);    
        
        //Check for minimum number
        if (minNumber == 0) minNumber = number; //Takes 1st number
        else if (number < minNumber) minNumber = number;

        //Check for maximum number
        if (maxNumber == 0) maxNumber = number; //Takes 1st number
        else if (number > maxNumber) maxNumber = number;
    }

    //Average Calculate
    for (let a = 0; a < 10; a++) {
        number = heights[a];
        count += number;
    }

    average = count / 10;


    //Print entries
    for (let k = 0; k < 10; k++) {
        process.stdout.write(heights[k].toString());
        process.stdout.write(" ");
    }


    //Print min, max and average
    process.stdout.write(minNumber.toString());
    process.stdout.write(" ");
    process.stdout.write(maxNumber.toString());
    process.stdout.write(" ");
    process.stdout.write(Math.floor(average).toString());
    console.log();
}
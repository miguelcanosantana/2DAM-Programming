var person = {name: "Alan", age: 24, job: "junior programmer"};

console.log(Object.entries(person));

var entries = Object.entries(person);

console.log("----------------------");

//Imprime clave k junto a valor v de manera formateada
for ([k, v] of Object.entries(person)) {
    console.log(k + " ==> " + v);
}
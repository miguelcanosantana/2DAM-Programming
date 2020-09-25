//Se define una función
function myFunction(x, y) {
    return x + y
}

//No pasamos nada (Imprime Nan (Not a number))
console.log(myFunction());

//Pasamos solo un 5 (Imprime Nan (Not a number))
console.log(myFunction(5));

//Pasamos dos números
console.log(myFunction(5,10));

//Se define una función con valores por defecto
function myFunction2(x = 1, y = 10) {
    return x + y
}

//No pasamos nada (Imprime 11)
console.log(myFunction2());

//Pasamos solo un 5 (Imprime 15)
console.log(myFunction2(5));

//Pasamos dos números (Imprime 17)
console.log(myFunction2(5,12));
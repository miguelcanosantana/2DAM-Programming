//Se define un Array (Var es opcional pero recomendado para las variables)
var numbers = [4, 9, 16, 25, 29];

//Encuentra el primer número del Array que cumpla las condiciones de la función
var a = numbers.find(adult);

//Encuentra todos los números que sean + 18
var aa = numbers.filter(adult);

//Encuentra el primer número par
var aaa = numbers.find(even);

//Encuentra el primer número impar
var aaaa = numbers.find(odd);

//Encuentra el primer número primo
var aaaaa = numbers.find(isPrime);


//Imprime
console.log(a);
console.log(aa);
console.log(aaa);
console.log(aaaa);
console.log(aaaaa);

//Devolver edad si mayor de 18 (Sustituto de if)
function adult(age) {
    return age >= 18;
}

//Devolver si es par (Se comprueba con el módulo)
function even(x) {
    return x % 2 == 0;
}

//Devolver si es impar (Se comprueba con el módulo)
function odd(x) {
    return x % 2 != 0;
}

//Devolver si es primo (Se comprueba con el módulo)
function prime(x) {
    let isPrime = true;

    for (let i = 0; i < x; i++) {
        let y = x % i;

        if (y == 0) {
            isPrime = false;
        } else {
            isPrime = true;
        }

    }

    if (isPrime == true) {
       return x; 
    }
    
}

//Devolver si es primo (Se comprueba con el módulo, empezando a dividir por 2)
function isPrime(num) {
    for(var i = 2; i < num; i++)
      if(num % i == 0) return false;
    return num > 1;
  }
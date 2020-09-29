//Crea un objeto con sus keys y valores a partir de un Array
const arr = [['0', 'a'], ['1', 'b'], ['2', 'c']];

const obj = Object.fromEntries(arr);

console.log(obj);

// .flat no existe en algunas versiones de nodejs
var arr1 = [1, 2, [3, 4]];
var arr2 = [1, 2, [3, 4, [5, 6]]];
var arr3 = [1, 2, [3, 4, [5, 6, 7, [8, 9]]]];

//Aplana
console.log(arr2.flat());

//Aplana solo algunos niveles (Infinity es todo)
console.log(arr3.flat(2));
console.log(arr3.flat(Infinity));


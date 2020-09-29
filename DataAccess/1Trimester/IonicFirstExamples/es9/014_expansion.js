
let a = [1, 2, 3];
//Se mete un array dentro de otro
let b = [0, a, 4];
//El operador ... sirve para aplanarlo y convertirlo dentro del mismo como valores independientes
let c = [0, ...a, 4];

console.log(a);
console.log(b);
console.log(c);

console.log("-----------")

//También sirve para objetos
let obj = {a: 1, b: 2};
let obj2 = {obj, c: 3};
let obj3 = {...obj, c: 3};

console.log(obj);
console.log(obj2);
console.log(obj3);

//También se puede usar detrás
let obj4 = {
    a: "01", b: "02"
}

let newObject = {
    c: "03",
    ...obj4
}

console.log(newObject)
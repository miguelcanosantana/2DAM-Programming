//Array con nombres
let jsFrameworks = ['angular', 'react', 'vue', 'stencil', 'pj5s'];

//Comprueba si los siguientes elementos existen en un Array
if (jsFrameworks.includes('vue')) {
    console.log('vue framework exists')
}

//Como tomato no existe no lo imprime
if (jsFrameworks.includes('tomato')) {
    console.log("tomato framework exists")
}
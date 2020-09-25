//Constructor de clases
class Car {
    constructor(brand, cv) {
        this.name = brand;
        this.power = cv;
    }

    //Para formatear el print y mostrarlo de manera bonita
    toString(){
        return "This car is a " + this.name + ", and has " + this.power + " of power."
    }
}


//Se crea un nuevo objeto de la clase Car
myCar = new Car("Toyota", 190);
myCar2 = new Car("Subaru", 200);


//Print myCar (Se añade .toString() para usar imprimirlo bonito)
console.log(myCar.toString())
console.log(myCar2.toString())
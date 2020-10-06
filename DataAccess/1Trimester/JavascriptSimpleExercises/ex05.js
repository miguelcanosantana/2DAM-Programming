//Classes

//Vehicle
class Vehicle {
    
    //Static will only run once
    static totalKm = 0;

    //Attributes
    constructor() {
        this.km = 0; //Default KM
    }


    //Get Kilometers
    getKm(){
        return this.km;
    }


    //Add kilometers to the already existing ones and to Totals
    run(kilom){
        this.km += kilom;
        Vehicle.totalKm += kilom; //Using Vehicle instead this because isn't in constructor
    }


    //Get total kilometers
    static getTotalKm() {
        return Vehicle.totalKm; //Using Vehicle instead this because isn't in constructor
    }


}


//Car
class Car extends Vehicle { //Inherits Attributes and functions from Vehicle (No need of constructor)

    //Do The Wheelie
    burnWheel() {
        console.log("I am burning the wheels!!!");  
    }

    
}


//Bicycle
class Bicycle extends Vehicle { //Inherits Attributes and functions from Vehicle (No need of constructor)

    //Do The Wheelie
    doTheWheelie() {
        console.log("I am doing the wheelie!!!");  
    }


}


//Program
car1 = new Car();
bicycle1 = new Bicycle();

car1.burnWheel();
bicycle1.doTheWheelie();

car1.run(500);
bicycle1.run(40);

console.log("Car odometer: " + car1.getKm());
console.log("Bicycle odometer: " + bicycle1.getKm());
console.log("Total km: " + Vehicle.getTotalKm());

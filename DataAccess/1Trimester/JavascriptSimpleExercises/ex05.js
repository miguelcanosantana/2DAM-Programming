//Classes

//Vehicle
class Vehicle {

    //Attributes
    constructor(inputKM) {
        this.km = inputKM; //Default KM
    }


    //Get Kilometers
    getKm(){
        return this.km;
    }


    //Add kilometers to the already existing ones
    run(kilometers){
        let madeKm = this.km;
        let newKm = kilometers;

        //Add
        madeKm += newKm;
        this.km = madeKm;
    }


}


//Car
class Car extends Vehicle {

    //Attributes
    constructor(inputKM) {
        super();
        this.km = inputKM;
    }


    //Get Kilometers
    getKm() {
        return this.km;
    }


    //Do The Wheelie
    burnWheel() {
        console.log("I am burning the wheels!!!");  
    }

    
}


//Bicycle
class Bicycle extends Vehicle {

    //Attributes
    constructor(inputKM) {
        super();
        this.km = inputKM;
    }


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

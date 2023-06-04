class Vehicle {
    constructor(make, model, year){
        this.make;
        this.model;
        this.year;
    }

    honk(){
        return "Beep."
    };

    toString(){
        return `The vehicle is a ${this.make} ${this.model} from ${this.year}.`;
    };

}

class Car extends Vehicle {
    constructor(make, model, year){
        super(make,model,year);
        this.numWheels = 4;
    };

}

class Motorcycle extends Vehicle {
    constructor(make, model, year){
        super(make,model,year);
        this.numWheels = 2;
    };

    revEngine(){
        return "VROOM!!!"
    };
}

class Garage{
        constructor(capacity){
        this.capacity;
        this.vehicles = [];
    }

    add(vechicle){
        if(this.vehicles.length >= this.capacity ){      
            return "Sorry, we're full.";
        }
        else{      
            if(vechicle instanceof Vehicle){
                this.vehicles.push(vechicle);
                return "Vehicle added!";
            }
            else{
                return "Only vehicles are allowed in here!";
            }
        }
    }
}
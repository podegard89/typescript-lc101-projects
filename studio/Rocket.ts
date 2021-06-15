import { Astronaut } from "./Astronaut";
import { Cargo } from "./Cargo";
import { Payload } from "./Payload";

export class Rocket {
    name: string;
    totalCapacityKg: number;
    cargoItems: Cargo[] = [];
    astronauts: Astronaut[] = [];

    constructor(name: string, totalCapacityKg: number) {
        this.name = name;
        this.totalCapacityKg = totalCapacityKg;
    }
    //input: an array of Payload objects
    //specifically, an array of objects whose classes implement Payload
    //output: the sum of all the items masses in kg
    sumMass(items: Payload[]): number {
        let sum: number = 0;
        for(let i = 0; i < items.length; i++) {
            sum += items[i].massKg;
        }
        return sum;
    }

    currentMassKg(): number {
        let astronautTotalMass: number = this.sumMass(this.astronauts);
        let cargoTotalMass: number = this.sumMass(this.cargoItems);
        return astronautTotalMass + cargoTotalMass;
    }

    // input: a Payload object
    // output true or false, whether or not we can add a given astronaut/cargo item
    // onto our rocket
    canAdd(item: Payload): boolean {
        if(this.currentMassKg() + item.massKg <= this.totalCapacityKg) {
            return true;
        } else {
            return false;
        }
        // return (this.currentMassKg() + item.massKg) <= this.totalCapacityKg;
    }

    addCargo(cargo: Cargo): boolean {
        if(this.canAdd(cargo)) {
            this.cargoItems.push(cargo);
            return true;
        } else {
            return false;
        }
    }

    addAstronaut(astronaut: Astronaut): boolean {
        if(this.canAdd(astronaut)) {
            this.astronauts.push(astronaut);
            return true;
        } else {
            return false;
        }
    }
}

// let falcon9: Rocket = new Rocket('Falcon 9', 7500);
// let cargoItem: Cargo = new Cargo(100000, "vibranium");
// console.log(falcon9.canAdd(cargoItem))
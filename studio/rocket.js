"use strict";
exports.__esModule = true;
exports.Rocket = void 0;
var Rocket = /** @class */ (function () {
    function Rocket(name, totalCapacityKg) {
        this.cargoItems = [];
        this.astronauts = [];
        this.name = name;
        this.totalCapacityKg = totalCapacityKg;
    }
    //input: an array of Payload objects
    //specifically, an array of objects whose classes implement Payload
    //output: the sum of all the items masses in kg
    Rocket.prototype.sumMass = function (items) {
        var sum = 0;
        for (var i = 0; i < items.length; i++) {
            sum += items[i].massKg;
        }
        return sum;
    };
    Rocket.prototype.currentMassKg = function () {
        var astronautTotalMass = this.sumMass(this.astronauts);
        var cargoTotalMass = this.sumMass(this.cargoItems);
        return astronautTotalMass + cargoTotalMass;
    };
    // input: a Payload object
    // output true or false, whether or not we can add a given astronaut/cargo item
    // onto our rocket
    Rocket.prototype.canAdd = function (item) {
        if (this.currentMassKg() + item.massKg <= this.totalCapacityKg) {
            return true;
        }
        else {
            return false;
        }
        // return (this.currentMassKg() + item.massKg) <= this.totalCapacityKg;
    };
    Rocket.prototype.addCargo = function (cargo) {
        if (this.canAdd(cargo)) {
            this.cargoItems.push(cargo);
            return true;
        }
        else {
            return false;
        }
    };
    Rocket.prototype.addAstronaut = function (astronaut) {
        if (this.canAdd(astronaut)) {
            this.astronauts.push(astronaut);
            return true;
        }
        else {
            return false;
        }
    };
    return Rocket;
}());
exports.Rocket = Rocket;
// let falcon9: Rocket = new Rocket('Falcon 9', 7500);
// let cargoItem: Cargo = new Cargo(100000, "vibranium");
// console.log(falcon9.canAdd(cargoItem))

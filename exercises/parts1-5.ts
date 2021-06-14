// URL for the instructions: 
// https://education.launchcode.org/intro-to-professional-web-dev/chapters/typescript/exercises.html 
import { SpaceLocation } from './SpaceLocation';

// Part 1: Declare (5) Variables With Type
// let spacescraftName: string = "Determination";
// let speedMph: number = 17500;
let kilometersToMars: number = 225000000;
let kilometersToTheMoon: number = 384400;
// let milesPerKilometer: number = 0.621;

// Part 2: Print Days to Mars
// let milesToMars: number = kilometersToMars * milesPerKilometer;
// let hoursToMars: number = milesToMars / speedMph;
// let daysToMars: number = hoursToMars / 24;


// Code an output statement here (use a template literal):
// let outputString: string = `${spacescraftName} would take ${daysToMars} days to get to Mars.`
// console.log(outputString);


// Part 3: Create a Function ("getDaysToLocation")
// input: kilometersAway, its a number
// output: days to a location, its a number
// function getDaysToLocation(kilometersAway: number): number {
//     let milesAway: number = kilometersAway * milesPerKilometer;
//     let hoursToLocation: number = milesAway / speedMph;
//     let daysToLocation: number = hoursToLocation / 24;
//     return daysToLocation;
// }

// Move your output statement from part 2 here. Update the template literal to call
// the function and print the outputs for a Mars trip and a moon trip.
// let outputStringMars: string = `${spacescraftName} would take ${getDaysToLocation(kilometersToMars)} days to get to Mars.`
// console.log(outputStringMars);

// let outputStringMoon: string = `${spacescraftName} would take ${getDaysToLocation(kilometersToTheMoon)} days to get to the Moon.`
// console.log(outputStringMoon);

// Part 4: Create a Spacecraft Class
class Spacecraft {
    milesPerKilometer: number = 0.621;
    name: string;
    speedMph: number;

    constructor(name: string, speedMph: number) {
        this.name = name;
        this.speedMph = speedMph;
    }

    getDaysToLocation(kilometersAway: number): number {
        let milesAway: number = kilometersAway * this.milesPerKilometer;
        let hoursToLocation: number = milesAway / this.speedMph;
        let daysToLocation: number = hoursToLocation / 24;
        return daysToLocation;
    }

    printDaysToLocation(location: SpaceLocation) {
        console.log(`${this.name} would take ${this.getDaysToLocation(location.kilometersAway)} days to get to ${location.name}.`);
    }
}

// Create an instance of the class here:
let spaceShuttle = new Spacecraft('Determination', 17500);
let mars = new SpaceLocation('Mars', 225000000);
let moon = new SpaceLocation("The Moon", 384400);
// mars is a SpaceLocation object, so we can pass it in as an argument in the printDaysToLocation method
spaceShuttle.printDaysToLocation(mars);
spaceShuttle.printDaysToLocation(moon);
// let rocket = new Spacecraft('LaunchCode', 1234567);

// Move your output statements from part 3 here. Update the template literals use the
// instance of the class.
// let spaceShuttleToMars: string = `${spaceShuttle.name} would take ${spaceShuttle.getDaysToLocation(kilometersToMars)} days to get to Mars.`
// console.log(spaceShuttleToMars);

// let rocketToMars: string = `${rocket.name} would take ${rocket.getDaysToLocation(kilometersToMars)} days to get to Mars.`
// console.log(rocketToMars);

// let outputStringMoon: string = `${spaceShuttle.name} would take ${spaceShuttle.getDaysToLocation(kilometersToTheMoon)} days to get to the Moon.`
// console.log(outputStringMoon);


// Part 5: Export and Import the SpaceLocation Class
// Add the required import statement BEFORE the part 1 content.


// Add the printDaysToLocation function to the Spacecraft class.

// Paste in the code from step 5 here:

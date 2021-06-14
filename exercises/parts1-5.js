"use strict";
exports.__esModule = true;
// URL for the instructions: 
// https://education.launchcode.org/intro-to-professional-web-dev/chapters/typescript/exercises.html 
var SpaceLocation_1 = require("./SpaceLocation");
// Part 1: Declare (5) Variables With Type
var spacescraftName = "Determination";
var speedMph = 17500;
var kilometersToMars = 225000000;
var kilometersToTheMoon = 384400;
var milesPerKilometer = 0.621;
// Part 2: Print Days to Mars
var milesToMars = kilometersToMars * milesPerKilometer;
var hoursToMars = milesToMars / speedMph;
var daysToMars = hoursToMars / 24;
// Code an output statement here (use a template literal):
// let outputString: string = `${spacescraftName} would take ${daysToMars} days to get to Mars.`
// console.log(outputString);
// Part 3: Create a Function ("getDaysToLocation")
// input: kilometersAway, its a number
// output: days to a location, its a number
function getDaysToLocation(kilometersAway) {
    var milesAway = kilometersAway * milesPerKilometer;
    var hoursToLocation = milesAway / speedMph;
    var daysToLocation = hoursToLocation / 24;
    return daysToLocation;
}
// Move your output statement from part 2 here. Update the template literal to call
// the function and print the outputs for a Mars trip and a moon trip.
// let outputStringMars: string = `${spacescraftName} would take ${getDaysToLocation(kilometersToMars)} days to get to Mars.`
// console.log(outputStringMars);
// let outputStringMoon: string = `${spacescraftName} would take ${getDaysToLocation(kilometersToTheMoon)} days to get to the Moon.`
// console.log(outputStringMoon);
// Part 4: Create a Spacecraft Class
var Spacecraft = /** @class */ (function () {
    function Spacecraft(name, speedMph) {
        this.milesPerKilometer = 0.621;
        this.name = name;
        this.speedMph = speedMph;
    }
    Spacecraft.prototype.getDaysToLocation = function (kilometersAway) {
        var milesAway = kilometersAway * this.milesPerKilometer;
        var hoursToMars = milesAway / this.speedMph;
        return hoursToMars / 24;
    };
    Spacecraft.prototype.printDaysToLocation = function (location) {
        console.log(this.name + " would take " + this.getDaysToLocation(location.kilometersAway) + " days to get to " + location.name + ".");
    };
    return Spacecraft;
}());
// Create an instance of the class here:
var spaceShuttle = new Spacecraft('Space Shuttle', 17500);
// Move your output statements from part 3 here. Update the template literals use the
// instance of the class.
// let outputStringMars: string = `${spacescraftName} would take ${getDaysToLocation(kilometersToMars)} days to get to Mars.`
// console.log(outputStringMars);
// let outputStringMoon: string = `${spacescraftName} would take ${getDaysToLocation(kilometersToTheMoon)} days to get to the Moon.`
// console.log(outputStringMoon);
// Part 5: Export and Import the SpaceLocation Class
// Add the required import statement BEFORE the part 1 content.
// Add the printDaysToLocation function to the Spacecraft class.
// Paste in the code from step 5 here:
spaceShuttle.printDaysToLocation(new SpaceLocation_1.SpaceLocation('Mars', kilometersToMars));
spaceShuttle.printDaysToLocation(new SpaceLocation_1.SpaceLocation('the Moon', kilometersToTheMoon));

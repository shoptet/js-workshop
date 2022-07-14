"use strict";
// Basic types
let firstName = "David";
let count = 34;
let isAuthorized = true;
let prices = [12, 13];
let prices2 = [12, 13];
let person = {
    age: 26,
    name: "David",
};
// --------------------------------------------------------------------
// null, undefined, never
let nullThing = null;
let undefinedThing = undefined;
let neverThing; // Function returning never must not have a reachable end point
// --------------------------------------------------------------------
// any & unknown and its difference
let anyThing = 23;
anyThing = "23";
anyThing = true;
let unknownThing = 23;
unknownThing = "23";
if (unknownThing === true) {
    let boolean = unknownThing;
    // let number: number = unknownThing; // with unknown type, we can do typeof check, comparison check etc.
}
if (anyThing === true) {
    let boolean = anyThing;
    let number = anyThing;
}
// let parent: Parent = {}
// let child: Child = {
//   age
// }
// Enums
var Direction;
(function (Direction) {
    Direction[Direction["Up"] = 0] = "Up";
    Direction[Direction["Down"] = 1] = "Down";
    Direction[Direction["Left"] = 2] = "Left";
    Direction[Direction["Right"] = 3] = "Right";
})(Direction || (Direction = {}));
var StatusCodes;
(function (StatusCodes) {
    StatusCodes["SUCCESS"] = "success";
    StatusCodes["PENDING"] = "pending";
})(StatusCodes || (StatusCodes = {}));
// type Tiger = {
//   color: string;
//   age: number;
// } & Animal;
// --------------------------------------------------------------------
// Functions
// never and void
function erorr(message) {
    throw new Error(message);
    // always throws an exception or one that never returns
}
function erorr2(message) {
    // throw new Error(message);
    // in void, we can have whatever returned or no returns at all
}
// interface CountNumbersFn {
//   (a: number, b: number): number;
// }
const countNumbers2 = (a, b) => a + b;
let dogName = "Dogo";
// const Michal: Person<string> = {
//   fullName: 'Michal Novak',
//   pet:
// };
// // const cat: HumanPet<Cat> = {};
function makeFullName(obj) {
    const test = Object.assign(Object.assign({}, obj), { fullName: obj.firstName + " " + obj.lastName, ads: "" });
    console.log(test);
    return Object.assign(Object.assign({}, obj), { fullName: obj.firstName + " " + obj.lastName, ads: "" });
}
const personObj = makeFullName({
    firstName: "bob",
    lastName: "junior",
    age: 14,
    profession: "asdasd",
});
console.log("Dik ze jste prisli");
// --------------------------------------------------------------------

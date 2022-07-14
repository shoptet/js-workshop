// Basic types

let firstName: string = "David";

let count: number = 34;

let isAuthorized: boolean = true;

let prices: number[] = [12, 13];
let prices2: Array<number> = [12, 13];

let person: { name: string; age: number } = {
  age: 26,
  name: "David",
};

// --------------------------------------------------------------------

// null, undefined, never
let nullThing: null = null;
let undefinedThing: undefined = undefined;
let neverThing: never; // Function returning never must not have a reachable end point

// --------------------------------------------------------------------

// any & unknown and its difference

let anyThing: any = 23;
anyThing = "23";
anyThing = true;

let unknownThing: unknown = 23;
unknownThing = "23";

if (unknownThing === true) {
  let boolean: boolean = unknownThing;
  // let number: number = unknownThing; // with unknown type, we can do typeof check, comparison check etc.
}

if (anyThing === true) {
  let boolean: boolean = anyThing;
  let number: number = anyThing;
}

// --------------------------------------------------------------------

// Types and interfaces

type Human = {
  name: string;
  age: number;
};

// interface Human {
//   name: string;
//   age: number;
// }

type Child = Human & {
  gender: "Male" | "Female"; // Union type
};

interface Parent extends Human {
  children?: Child[];
}

// let parent: Parent = {}
// let child: Child = {
//   age
// }

// Enums
enum Direction {
  Up,
  Down,
  Left,
  Right,
}

enum StatusCodes {
  SUCCESS = "success",
  PENDING = "pending",
}

// if (someVariable === StatusCodes.PENDING)

// const direction = Direction.Left

// Extending types and interfaces

interface Animal {
  name: string;
  type: string;
}

interface Tiger extends Animal {
  color: string;
  age: number;
}

// type Tiger = {
//   color: string;
//   age: number;
// } & Animal;

// --------------------------------------------------------------------

// Functions

// never and void

function erorr(message: string): never {
  throw new Error(message);
  // always throws an exception or one that never returns
}

function erorr2(message: string): void {
  // throw new Error(message);
  // in void, we can have whatever returned or no returns at all
}

type CountNumbersFn = (a: number, b: number) => number;
// interface CountNumbersFn {
//   (a: number, b: number): number;
// }

const countNumbers2: CountNumbersFn = (a, b) => a + b;

let dogName: "Dogo" | "Bingo" = "Dogo";

// countNumbers(213, 23)

// --------------------------------------------------------------------

// Generics

interface Dog {
  breed: string;
  tail: "long" | "short";
}

interface Cat {
  hasClaws: boolean;
  lives: number;
}

type Person<T> = {
  fullName: string;
  pet: T;
};

// const Michal: Person<string> = {
//   fullName: 'Michal Novak',
//   pet:
// };
// // const cat: HumanPet<Cat> = {};

function makeFullName<T extends { firstName: string; lastName: string }>(
  obj: T
): T {
  const test: T = {
    ...obj,
    fullName: obj.firstName + " " + obj.lastName,
    ads: "",
  };

  console.log(test);

  return {
    ...obj,
    fullName: obj.firstName + " " + obj.lastName,
    ads: "",
  };
}

const personObj = makeFullName({
  firstName: "bob",
  lastName: "junior",
  age: 14,
  profession: "asdasd",
});

// --------------------------------------------------------------------

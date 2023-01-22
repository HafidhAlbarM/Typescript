let apples: number = 5;
let speed: string = "fast";
let hasName: boolean = true;

let nothingMuch: null = null;
let nothing: undefined = undefined;

let now: Date = new Date();

//Array
let colors: string[] = ["red", "green", "bnblue"];
let myNumbers: number[] = [1, 2, 3, 4, 5];
let truths: boolean[] = [true, false, false];

//Class
class Car {}
let car: Car = new Car();

//Object Literal
let point: { x: number; y: number } = {
  x: 10,
  y: 20,
};

const logNumber: (i: number) => void = (i: number) => {
  console.log(i);
};

const json = '{"x": 10, "y":20}';
const coordinates: { x: number; y: number } = JSON.parse(json);
console.log(coordinates.x);

let word = ["red", "green", "bluie"];
let foundedWord: boolean;
for (let i = 0; i < word.length; i++) {
  if (word[i] == "green") {
    foundedWord = true;
  }
}

// 3) Variable whose type cannot be inferred correctly
let numbers = [-10, -1, 12];
let numberAboveZero: boolean | number = false;

for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] > 0) {
    numberAboveZero = numbers[i];
  }
}

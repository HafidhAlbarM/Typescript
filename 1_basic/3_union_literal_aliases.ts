//Union Types (number|string)

function combine(input1: number | string, input2: number | string) {
  let result;
  if (typeof input1 === "number" && typeof input2 === "number") {
    result = input1 + input2;
  } else {
    result = input1.toString() + input2.toString();
  }
  return result;
}

let combinedAge = combine(23, 26);
let combinedAge2 = combine(23, "wee");

// console.log(combinedAge);
// console.log(combinedAge2);

//Literal Types ("as-number" | "as-text")
function combine2(
  input1: number | string,
  input2: number | string,
  resultConversion: "as-number" | "as-text"
) {
  let result;
  if (
    (typeof input1 === "number" && typeof input2 === "number") ||
    resultConversion == "as-number"
  ) {
    result = +input1 + +input2;
  } else {
    result = input1.toString() + input2.toString();
  }
  return result;
}

let combinedAg3 = combine2(23, 26, "as-number");
let combinedAge4 = combine2(23, "wee", "as-text");

console.log(combinedAg3);
console.log(combinedAge4);

// aliases (type)
type kombinasi = number | string;
type kombinasiKonversi = "as-number" | "as-text";

function combine3(
  input1: kombinasi,
  input2: kombinasi,
  resultConversion: kombinasiKonversi
) {
  let result;
  if (
    (typeof input1 === "number" && typeof input2 === "number") ||
    resultConversion == "as-number"
  ) {
    result = +input1 + +input2;
  } else {
    result = input1.toString() + input2.toString();
  }
  return result;
}

let combinedAg5 = combine2(23, 26, "as-number");
let combinedAge6 = combine2(23, "wee", "as-text");

console.log(combinedAg5);
console.log(combinedAge6);

type User = { name: string; age: number };

function greet(user: User) {
  console.log("Hi, I am " + user.name);
}

function isOlder(user: User, checkAge: number) {
  return checkAge > user.age;
}

let hafidh = { name: "hafidh", age: 23 };
greet(hafidh);
console.log(isOlder(hafidh, 26));

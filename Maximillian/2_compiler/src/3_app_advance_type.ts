type Admin = {
  name: string;
  privilage: string[];
};

type Employee = {
  name: string;
  startDate: Date;
};

// interface elevatedEmployee extends Admin, Employee {}
type elevatedEmployee = Admin & Employee;

const e1: elevatedEmployee = {
  name: "hafidh",
  privilage: ["broke", "hug"],
  startDate: new Date("2022-07-01"),
};

// ============================

type Combinable = string | number;
type Numeric = number | boolean;
type Universal = Combinable | Numeric;

//function overload
function add(a: number, b: number): number;
function add(a: string, b: string): string;
function add(a: string, b: number): string;
function add(a: number, b: string): number;
function add(a: Combinable, b: Combinable) {
  if (typeof a == "string" || typeof b == "string") {
    return a.toString() + b.toString();
  } else {
    return a + b;
  }
}

const hasil = add(1, 5);
// console.log(hasil);

const fetchUserData = {
  id: "u1",
  name: "Max",
  job: { title: "CEO", desciption: "my y y" },
};

console.log(fetchUserData?.job?.title);

const userInput = null;

const storedData = userInput ?? "DEFAULT";
// console.log(storedData);

type unknownEmployee = Employee | Admin;

function printEmployeInformation(emp: unknownEmployee) {
  console.log(emp.name);

  if ("privilage" in emp) {
    console.log("Privilage " + emp.privilage);
  }

  if ("startDate" in emp) {
    console.log("Start Date " + emp.startDate);
  }
}

printEmployeInformation(e1);

class Car {
  drive() {
    console.log("driving...");
  }
}

class Truck {
  drive() {
    console.log("driving a truck");
  }

  loadCargo(amount: number) {
    console.log("loading cargoo ... " + amount);
  }
}

type Vehicle = Car | Truck;

const v1 = new Car();
const v2 = new Truck();

function useVehicle(vehicle: Vehicle) {
  vehicle.drive();
  // if ("loadCargo" in vehicle) {
  //   vehicle.loadCargo(58);
  // }

  if (vehicle instanceof Truck) {
    vehicle.loadCargo(58);
  }
}

useVehicle(v1);
useVehicle(v2);

interface Bird {
  type: "Bird";
  flyingSpeed: number;
}
interface Horse {
  type: "Horse";
  runningSpeed: number;
}

type Animal = Bird | Horse;

function moveAnimal(an: Animal) {
  let speed: number;
  switch (an.type) {
    case "Bird":
      speed = an.flyingSpeed;
      break;
    case "Horse":
      speed = an.runningSpeed;
  }
  console.log("moving at speed " + speed);
}

moveAnimal({ type: "Bird", flyingSpeed: 50 });

// const userInputElement = <HTMLInputElement>(
//   document.getElementById("user-input")!
// );
// const userInputElement = document.getElementById(
//   "user-input"
// )! as HTMLInputElement;
// userInputElement.value = "Hi There";

//index property
interface ErrorContainer {
  [prop: string]: string;
}

const errorBag: ErrorContainer = {
  email: "Not a valid email",
  username: "Must start with a capital character",
};

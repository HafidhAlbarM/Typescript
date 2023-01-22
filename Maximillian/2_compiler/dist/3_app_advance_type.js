"use strict";
var _a;
const e1 = {
    name: "hafidh",
    privilage: ["broke", "hug"],
    startDate: new Date("2022-07-01"),
};
function add(a, b) {
    if (typeof a == "string" || typeof b == "string") {
        return a.toString() + b.toString();
    }
    else {
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
console.log((_a = fetchUserData === null || fetchUserData === void 0 ? void 0 : fetchUserData.job) === null || _a === void 0 ? void 0 : _a.title);
const userInput = null;
const storedData = userInput !== null && userInput !== void 0 ? userInput : "DEFAULT";
function printEmployeInformation(emp) {
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
    loadCargo(amount) {
        console.log("loading cargoo ... " + amount);
    }
}
const v1 = new Car();
const v2 = new Truck();
function useVehicle(vehicle) {
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
function moveAnimal(an) {
    let speed;
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
const errorBag = {
    email: "Not a valid email",
    username: "Must start with a capital character",
};

"use strict";
//Generic Type
const names = ["max", "adam"];
names[0].split("");
const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("apa ya gatau");
    }, 200);
});
promise.then((data) => {
    let hasil = data.split(" ");
    //   console.log(hasil);
});
function merge(objA, objB) {
    return Object.assign(objA, objB);
}
let mergeObj = merge({ name: "hafidh", hobbies: ["mancing", "nganong"] }, { age: 24 });
function countAndDescribe(element) {
    let descrpitionText = "Got no value";
    if (element.length == 1) {
        descrpitionText = `Got 1 element`;
    }
    else if (element.length > 1) {
        descrpitionText = `Got ${element.length} elements`;
    }
    return [element, descrpitionText];
}
// console.log(countAndDescribe(["hafidh", "albar"]));
function extractAndConvert(obj, key) {
    return "Value " + obj[key];
}
// console.log(extractAndConvert({ name: "hafidh" }, "name"));
class DataStorage {
    constructor() {
        this.data = [];
    }
    addItem(item) {
        this.data.push(item);
    }
    removeItem(item) {
        if (this.data.indexOf(item) == -1) {
            return;
        }
        this.data.splice(this.data.indexOf(item), 1);
    }
    getItems() {
        return [...this.data];
    }
}
const textStorage = new DataStorage();
textStorage.addItem("hafidh");
textStorage.addItem("albar");
textStorage.addItem("muhammad");
textStorage.removeItem("albar");
function createCourseGoal(title, description, completeDate) {
    let courseGoal = {};
    courseGoal.title = title;
    courseGoal.description = description;
    courseGoal.completeDate = completeDate;
    return courseGoal;
}
const namaNama = ["max", "ford"];
// namaNama.push("we");

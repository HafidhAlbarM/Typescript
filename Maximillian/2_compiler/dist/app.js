"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
function Logger(logString) {
    return function (constructor) {
        console.log(logString);
        console.log(constructor);
    };
}
// function WithTemplate(template: string, hookId: string) {
//   return function (constructor: any) {
//     const hookEl = document.getElementById(hookId);
//     const p = new constructor();
//     if (hookEl) {
//       hookEl.innerHTML = template;
//       hookEl.querySelector("h1")!.textContent = p.name;
//     }
//   };
// }
//Decorator
//Decorator berjalan ketika menemukan suatu kelas, bukan pada saat instance kelas
let Orang = 
// @WithTemplate("<h2>My Person object</h2>", "app")
class Orang {
    constructor() {
        this.name = "Max";
        console.log("creating person object...");
    }
};
Orang = __decorate([
    Logger("LOGING - PERSON")
    // @WithTemplate("<h2>My Person object</h2>", "app")
], Orang);
const orang1 = new Orang();
console.log("orang1", orang1);
function Log(target, propertyName) {
    console.log("Property Decorator");
    console.log(target);
    console.log("propertyName", propertyName);
}
function Log2(target, name, descriptor) {
    console.log("Accessosor Decorator");
    console.log(target);
    console.log(name);
    console.log("descriptor", descriptor);
}
function Log3(target, name, descriptor) {
    console.log("Method Decorator");
    console.log(target);
    console.log(name);
    console.log("descriptor", descriptor);
}
function Log4(target, name, position) {
    console.log("Parameter Decorator");
    console.log(target);
    console.log(name);
    console.log("position", position);
}
class Product {
    constructor(t, p) {
        this.title = t;
        this._price = p;
    }
    set price(val) {
        if (val > 0) {
            this._price = val;
        }
        else {
            throw new Error("Invalid price, shoule be positive");
        }
    }
    getPriceWithTax(tax) {
        return this.price * (1 + tax);
    }
}
__decorate([
    Log
], Product.prototype, "title", void 0);
__decorate([
    Log2
], Product.prototype, "price", null);
__decorate([
    Log3,
    __param(0, Log4)
], Product.prototype, "getPriceWithTax", null);
let p1 = new Product("Book", 19);
let p2 = new Product("Book 2", 29);

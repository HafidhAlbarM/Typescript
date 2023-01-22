"use strict";
let user1;
user1 = {
    name: "hafidh",
    greet(phrase) {
        console.log(phrase + this.name);
    },
};
user1.greet("Halo nama saya ");
class Manusia {
    constructor(n) {
        this.age = 30;
        this.hobbies = ["music", "travelling", "flying"];
        if (n) {
            this.name = n;
        }
    }
    greet(phrase) {
        if (this.name) {
            console.log(phrase + this.name);
        }
        else {
            console.log(phrase);
        }
    }
}
let hafidh = new Manusia();
hafidh.greet("Hi there, gue ");
let tambahFn;
tambahFn = (n1, n2) => {
    return n1 + n2;
};

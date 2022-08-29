interface Named {
  readonly name?: string;
  outputName?: string; //optional property
}

interface Person extends Named {
  greet(phrase: string): void;
}

let user1: Person;

user1 = {
  name: "hafidh",
  greet(phrase: string) {
    console.log(phrase + this.name);
  },
};

user1.greet("Halo nama saya ");

class Manusia implements Person {
  name?: string; //optinal parameter
  age: number = 30;
  hobbies: String[] = ["music", "travelling", "flying"];

  constructor(n?: string) {
    if (n) {
      this.name = n;
    }
  }

  greet(phrase: string) {
    if (this.name) {
      console.log(phrase + this.name);
    } else {
      console.log(phrase);
    }
  }
}

let hafidh = new Manusia();
hafidh.greet("Hi there, gue ");

interface TambahFn {
  (a: number, b: number): number;
}

let tambahFn: TambahFn;

tambahFn = (n1: number, n2: number) => {
  return n1 + n2;
};

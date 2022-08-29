//Generic Type
const names: Array<string> = ["max", "adam"];
names[0].split("");

const promise: Promise<string> = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("apa ya gatau");
  }, 200);
});

promise.then((data) => {
  let hasil = data.split(" ");
  //   console.log(hasil);
});

function merge<T extends object, U extends object>(objA: T, objB: U) {
  return Object.assign(objA, objB);
}

let mergeObj = merge(
  { name: "hafidh", hobbies: ["mancing", "nganong"] },
  { age: 24 }
);

// console.log(mergeObj.age);

interface Lengthy {
  length: number;
}

function countAndDescribe<T extends Lengthy>(element: T): [T, string] {
  let descrpitionText = "Got no value";
  if (element.length == 1) {
    descrpitionText = `Got 1 element`;
  } else if (element.length > 1) {
    descrpitionText = `Got ${element.length} elements`;
  }
  return [element, descrpitionText];
}

// console.log(countAndDescribe(["hafidh", "albar"]));

function extractAndConvert<T extends object, U extends keyof T>(
  obj: T,
  key: U
) {
  return "Value " + obj[key];
}

// console.log(extractAndConvert({ name: "hafidh" }, "name"));

class DataStorage<T extends string | number | boolean> {
  private data: T[] = [];

  addItem(item: T) {
    this.data.push(item);
  }

  removeItem(item: T) {
    if (this.data.indexOf(item) == -1) {
      return;
    }

    this.data.splice(this.data.indexOf(item), 1);
  }

  getItems() {
    return [...this.data];
  }
}

const textStorage = new DataStorage<string>();
textStorage.addItem("hafidh");
textStorage.addItem("albar");
textStorage.addItem("muhammad");
textStorage.removeItem("albar");
// console.log(textStorage.getItems());

interface CourseGoal {
  title: string;
  description: string;
  completeDate: Date;
}

function createCourseGoal(
  title: string,
  description: string,
  completeDate: Date
): CourseGoal {
  let courseGoal: Partial<CourseGoal> = {};
  courseGoal.title = title;
  courseGoal.description = description;
  courseGoal.completeDate = completeDate;
  return courseGoal as CourseGoal;
}

const namaNama: Readonly<string[]> = ["max", "ford"];
// namaNama.push("we");

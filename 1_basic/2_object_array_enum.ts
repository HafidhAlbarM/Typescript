//=====================================Object
const person: {
  name: String;
  age: number;
  hobbies: string[];
} = {
  name: "hafidh",
  age: 30,
  hobbies: ["memanah", "berenang", "berkuda"], //array
};

const person1: any = {
  name: "hafidh",
  age: 30,
  hobbies: ["memanah", "berenang", "berkuda"],
};

//Better way to write object
const person2 = {
  name: "hafidh",
  age: 30,
  hobbies: ["memanah", "berenang", "berkuda"],
};

//=====================================Tupples (array yg lebih string tipe datanya)
const person3: {
  name: String;
  age: number;
  hobbies: string[]; //array
  role: [number, string]; //tupple
} = {
  name: "hafidh",
  age: 30,
  hobbies: ["memanah", "berenang", "berkuda"],
  role: [5, "kata"],
};

// person3.role.push("wedew"); //push pengcualian
// person3.role[0] = 50;
// console.log(person3);

//=====================================Enum
// enum Role {
//   ADMIN,
//   READ_ONLY,
//   AUTHOR,
// }

// enum Role {
//   ADMIN = 5,
//   READ_ONLY,
//   AUTHOR,
// }

enum Role {
  ADMIN = "Admin",
  READ_ONLY = "Read Only",
  AUTHOR = "Author",
}

const person4 = {
  name: "hafidh",
  age: 30,
  hobbies: ["memanah", "berenang", "berkuda"],
  role: Role.READ_ONLY,
};

// if (person4.role == Role.READ_ONLY) {
//   console.log(person4);
// }

//=====================================Any
let favoriteActivities: any[];
favoriteActivities = [4, 5, "flexible"];

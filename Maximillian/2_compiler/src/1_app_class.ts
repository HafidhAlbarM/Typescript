//abstract adalah gambaran suatu kelas harus memiliki nama fungsi ini
abstract class Department {
  static fiscalYear = 2022;
  // private adalah tipe data variable yg hanya isa di akses melalui instace kelas(kelas itu sendiri) tetapi tidak bisa di akses oleh inherited clas (turunannya)
  // protected adalah tipe data variable seperti private tapi bisa di akses oleh inherited clas (turunannya)

  // private id: string;
  // private name: String;
  protected employees: string[] = [];

  constructor(protected id: string, private name: string) {
    // this.id = id;
    // this.name = name;
    console.log(Department.fiscalYear);
  }

  //abstract adalah gambaran suatu kelas harus memiliki nama fungsi ini
  abstract describe(this: Department): void;

  addEmployee(kandidat: string) {
    this.employees.push(kandidat);
  }

  //static tipe data variable/function yg variable/function tsb selalu ikut/ada dalam instance kelas
  static createEmployee(name: String) {
    return { name };
  }

  printemployeess() {
    console.log(this.employees.length);
    console.log(this.employees);
  }
}

//==========INHERITANCE
class ITDepartment extends Department {
  constructor(id: string, public admins: string[]) {
    super(id, "IT");
    this.admins = admins;
  }

  describe() {
    console.log("IT Department ID: " + this.id);
  }
}

class AccountingDepartment extends Department {
  private lastReport: string;
  private static instance: AccountingDepartment;

  get mostRecentReport() {
    if (this.lastReport) {
      return this.lastReport;
    }
    throw new Error("No report found");
  }

  set mostRecentReport(value: string) {
    if (!value) {
      throw new Error("Please passed a valid value");
    }
    this.addReports(value);
  }

  constructor(id: string, private reports: string[]) {
    super(id, "accounting");
    this.lastReport = reports[0];
  }

  //Overriding
  addEmployee(kandidat: string) {
    if (kandidat == "Max") {
      return;
    }
    this.employees.push(kandidat);
  }

  describe() {
    console.log("Accounting Department ID: " + this.id);
  }

  static getInstance() {
    if (AccountingDepartment.instance) {
      return this.instance;
    }

    this.instance = new AccountingDepartment("d2", [
      "Budged Report",
      "Income report",
    ]);
    return this.instance;
  }

  addReports(text: string) {
    this.reports.push(text);
    this.lastReport = text;
  }

  getReports() {
    console.log(this.reports);
  }
}

//==========INSTANCE CLASS
let it = new ITDepartment("d1", ["Max"]);
// it.describe();

it.addEmployee("Hafidh");
it.addEmployee("Iwan");
const employee1 = Department.createEmployee("Indra");
console.log(employee1, Department.fiscalYear);

// it.printemployeess();
// console.log(it);
it.describe();

let accounting = AccountingDepartment.getInstance();
let accounting2 = AccountingDepartment.getInstance();
console.log(accounting);
console.log(accounting2);

// accounting.addReports("Expense Report");
// accounting.mostRecentReport = "Journal Report";

// console.log(accounting.mostRecentReport);

// accounting.getReports();
// accounting.addEmployee("Max");
// accounting.addEmployee("Bob");
// accounting.printemployeess();
accounting.describe();

//tidak bisa seperti ini karena variable employees adalah private
// accounting.employees[3] = "ASEP";

// let HRD = { name: "HRD", describe: accounting.describe };
// HRD.describe();

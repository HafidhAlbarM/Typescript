"use strict";
//abstract adalah gambaran suatu kelas harus memiliki nama fungsi ini
class Department {
    constructor(id, name) {
        this.id = id;
        this.name = name;
        // private adalah tipe data variable yg hanya isa di akses melalui instace kelas(kelas itu sendiri) tetapi tidak bisa di akses oleh inherited clas (turunannya)
        // protected adalah tipe data variable seperti private tapi bisa di akses oleh inherited clas (turunannya)
        // private id: string;
        // private name: String;
        this.employees = [];
        // this.id = id;
        // this.name = name;
        console.log(Department.fiscalYear);
    }
    addEmployee(kandidat) {
        this.employees.push(kandidat);
    }
    //static tipe data variable/function yg variable/function tsb selalu ikut/ada dalam instance kelas
    static createEmployee(name) {
        return { name };
    }
    printemployeess() {
        console.log(this.employees.length);
        console.log(this.employees);
    }
}
Department.fiscalYear = 2022;
//==========INHERITANCE
class ITDepartment extends Department {
    constructor(id, admins) {
        super(id, "IT");
        this.admins = admins;
        this.admins = admins;
    }
    describe() {
        console.log("IT Department ID: " + this.id);
    }
}
class AccountingDepartment extends Department {
    constructor(id, reports) {
        super(id, "accounting");
        this.reports = reports;
        this.lastReport = reports[0];
    }
    get mostRecentReport() {
        if (this.lastReport) {
            return this.lastReport;
        }
        throw new Error("No report found");
    }
    set mostRecentReport(value) {
        if (!value) {
            throw new Error("Please passed a valid value");
        }
        this.addReports(value);
    }
    //Overriding
    addEmployee(kandidat) {
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
    addReports(text) {
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

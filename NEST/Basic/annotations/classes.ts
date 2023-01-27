class Vehicle {
  constructor(public color: string) {}

  //public bisa di panggil oleh instance
  public break(): void {
    console.log("ciiiit");
  }

  //protected hanya bisa di panggil oleh child inheritancenya
  protected honk(): void {
    console.log("tiiiiiin");
  }
}

const vehicle = new Vehicle("orange");
console.log(vehicle.color);

class Car extends Vehicle {
  constructor(public wheels: number, color: string) {
    super(color);
  }

  //private hanya bisa dipanggil di dalam kelas itu sendiri
  private drive(): void {
    console.log("breemmmm");
  }

  stratDrivingProccess(): void {
    this.drive();
    this.honk();
  }
}

const car1 = new Car(4, "Red");
car1.stratDrivingProccess();
car1.break();

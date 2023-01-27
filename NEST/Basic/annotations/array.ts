const carMakers: string[] = ["ford", "toyota", "chevy"];
const dates = [new Date(), new Date()];

const carsByMake: string[][] = [["f150"], ["corola"], ["camero"]];

//Help with inference when extracting values
const car = carMakers[0];
const myCar = carMakers.pop();

// Prevent incompatible values
// carMakers.push(100);

// Help with map
carMakers.map((car: string): string => {
  return car.toUpperCase();
});

// Flexible types
const importatDates: (string | Date)[] = [new Date(), "2030-10-10"];
importatDates.push("2030-10-11");
importatDates.push(new Date());

function add(n1: number, n2: number) {
  return n1 + n2;
}

// by default void, gausah di tulis void gapapa
function printResult(num: number): void {
  console.log("Hasilnya: " + num);
}

function addAndHandle(n1: number, n2: number, cb: (num: number) => void) {
  const result = n1 + n2;
  return cb(result);
}

//fungsi biasa
printResult(add(23, 26));

//variable fungsi
let combineValues: (x: number, y: number) => number;

combineValues = add;

console.log(combineValues(23, 26));

//callback function
addAndHandle(23, 26, (result) => {
  console.log(result);
});

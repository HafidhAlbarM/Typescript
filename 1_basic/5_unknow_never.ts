let userInput: unknown;
let userName: String;

userInput = 5;
userInput = "Hafidh";

if (typeof userInput === "string") {
  userName = userInput;
}

function generateError(message: string, code: number): never {
  throw { message, code };
}

generateError("yah error", 500);

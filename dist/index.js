"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const person = {
    name: "Nicolas",
    age: 30,
    gender: "male",
};
const sayHi = ({ name, age, gender }) => {
    console.log(`Hello ${name}, you are ${age} years old and ${gender}`);
};
sayHi(person);
//# sourceMappingURL=index.js.map
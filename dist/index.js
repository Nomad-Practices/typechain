"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Human {
    constructor({ name, age, gender }) {
        this.name = name;
        this.age = age;
        this.gender = gender;
    }
}
const person = new Human({
    name: "Nicolas",
    age: 30,
    gender: "male",
});
const sayHi = (x) => {
    console.log(`Hello ${x.name}, you are ${x.age} years old and ${x.gender}`);
};
sayHi(person);
//# sourceMappingURL=index.js.map
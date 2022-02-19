interface IHuman {
  name: string
  age: number
  gender: string
}

class Human {
  public name: string
  private age: number
  public gender: string

  constructor({ name, age, gender }: IHuman) {
    this.name = name
    this.age = age
    this.gender = gender
  }
}

const person = new Human({
  name: "Nicolas",
  age: 30,
  gender: "male",
})

const sayHi = (x: Human) => {
  console.log(`Hello ${x.name}, you are ${x.age} years old and ${x.gender}`)
}

sayHi(person)

export {}

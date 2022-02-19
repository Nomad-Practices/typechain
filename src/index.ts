interface IHuman {
  name: string
  age: number
  gender: string
}

const person: IHuman = {
  name: "Nicolas",
  age: 30,
  gender: "male",
}

const sayHi = ({ name, age, gender }: IHuman): void => {
  console.log(`Hello ${name}, you are ${age} years old and ${gender}`)
}

sayHi(person)

export {}

import { subtract, sum } from './math'

export type Human = {
  name: string
  lastname: string
  age: number | string
  isAlive?: boolean
}

sum(10)
subtract(5, 3)

// function readHuman(human: {
//   name: string
//   lastname: string
//   age: number
//   isAlive?: boolean
// }) {
//   const alive = human.isAlive ? 'estoy vivo' : 'estoy x_x'
//   return `Hola mi nombre es ${human.name} ${human.lastname}, mi edad es ${human.age} y ${alive}`
// }

function readHuman({ name, lastname, age, isAlive = false }: Human) {
  const alive = isAlive ? 'estoy vivo' : 'estoy x_x'
  return `Hola mi nombre es ${name} ${lastname}, mi edad es ${age} y ${alive}`
}

function getHumanAgeInFiveYears(human: Human) {
  if (typeof human.age === 'number') {
    return human.age + 5
  }
  const age = parseInt(human.age)
  return age + 5
  // let edad = typeof age === 'number' ? age : parseInt(age)
  // return edad + 5
}

const human: Human = {
  name: 'Diego',
  lastname: 'Vazquez',
  age: '28 anos',
  isAlive: true,
}

readHuman(human)
getHumanAgeInFiveYears(human)

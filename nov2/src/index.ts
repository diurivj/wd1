import { subtract, sum } from "./math";

export type Human = {
  name: string;
  lastname: string;
  age: number | string;
  isAlive?: boolean;
  gender?: "male" | "female";
  location?: {
    country: string;
    state: string;
  };
};

type Vip = "diego" | "juan";
type CardType = "gold" | "black" | "platinum";
type TrueOrFalse = true | false;

sum(10);
subtract(5, 3);

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
  const alive = isAlive ? "estoy vivo" : "estoy x_x";
  return `Hola mi nombre es ${name} ${lastname}, mi edad es ${age} y ${alive}`;
}

function isHumanAlive(human: Human) {
  if ("isAlive" in human) {
    return human.isAlive;
  }
  return undefined;
}

function getHumanAgeInFiveYears(human: Human) {
  if (typeof human.age === "number") {
    return human.age + 5;
  }
  const age = parseInt(human.age);
  return age + 5;
  // let edad = typeof age === 'number' ? age : parseInt(age)
  // return edad + 5
}

function readVipHuman(vip: Vip) {
  return `El nombre del vip es ${vip}`;
}

function getHumanGender(human: Human) {
  return `Hola soy  ${human.name} y me identifico como ${human.gender}`;
}

function getHumanLocation(human: Human) {
  if (typeof human.location === "undefined") {
    return "";
  }

  return `Hola vivo en ${human.location?.country} en el estado de ${human.location?.state}`;
}

const sayHumanName = (human: Human) => {
  throw new Error("Something bad happened");
};

const human: Human = {
  name: "Diego",
  lastname: "Vazquez",
  age: "28 anos",
  isAlive: true,
};

readHuman(human);
getHumanAgeInFiveYears(human);
readVipHuman("juan");
isHumanAlive(human);
isHumanAlive({ name: "Hector", lastname: "Rivera", age: 60 });

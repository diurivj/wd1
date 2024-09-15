// JavaScript es un lenguaje de programación no tipado

// var myNumber = 7
// console.log(myNumber)

// // Mutando la variable por su valor
// myNumber = 10
// console.log(myNumber)

// // Mutando la variable por su valor y tipo de dato
// myNumber = "hola"
// console.log(myNumber)

// let myNumber = 7
// console.log(myNumber)

// Mutar solo el valor
// myNumber = 11
// console.log(myNumber)

// Mutar el valor y el tipo de dato
// myNumber = "perro"
// console.log(myNumber)

// Tipos de datos nativos

// String
// Number
// Boolean
// Null
// Undefined
// Symbol

// Tipos de estructuras de datos

// Arrays
// Objects

// Esto es lo mismo
// const otroNumero = new Number(10)
// const otroNumero = 10

// const obj = {}
// const obj = new Object({ })

// Las estructuras de datos, no se van a mutar de la misma manera
// que lo harían los tipos de datos nativos

const foods = ["pozole", "cafecito"];
// console.log(foods)
foods.push("carnitas");
// console.log(foods)

const person = { name: "Diego", lastname: "Vazquez" };
// console.log(person)
person.age = 27;
// console.log(person)

// console.log(foods)
// Muto al arreglo original
// foods.sort()
const sortedFoods = foods.toSorted();
// console.log(sortedFoods)
// console.log(foods)

const clone1 = Object.assign({ handsome: true }, person);
clone1.age = 1;

// console.log(clone1)
// console.log(person)

// Resumen: Cuando igualamos una variable a una estructura de datos
// ya declarada, se iguala por referencia, es decir
// si se modifica cualquiera de las variables, se van a modificar
// ambas referencias, o ambos valores.

// console.log('que show!');
// alert('que rollo!');

// Tipos de datos
// string / texto
// "Esto es un string"
// 'Esto tambien es texto o un string'
// `De esta manera tambien se puede`

// numbers / numeros
// 12312
// 23.41
// -123.32
// +2131.21

// boolean / booleano
// true
// false

// undefined / no definido
// undefined

// null / nulo
// null

// Estructura de datos
// Object / Objeto
// key/value | Llave/valor
// {
// 	name: "Diego",
// 	age: 27,
// 	gender: "male",
// 	debt: 12312312312,
// 	skills: undefined
// }

// Array / Arreglo / Listas
// ['grape', 'apple', 'strawberry', 'blueberry'];

// camelCase
// elColorDeMiCasa

// PascalCase
// ElColorDeMiCasa

// snake_case
// el_color_de_mi_casa

// variables
// vanilla javascript -> algo es vanilla, es de stock, es lo original
// var

// es6
// const pi = 3.1415123123789123712;
// let otraVariable;

// const tuEx = {
//   name: 'benjamin',
//   reason: 'hdsptm, se casó',
// }

// funciones
// hacer cosas que sean repetitivas de una manera eficaz, sin repetirnos a nosotros mismos

// es6 | arrow function
// const nombreDeLaFuncion = () => {

// }

const rect1 = { name: 'rectangle 1', b: 40, h: 20 }
const rect2 = { name: 'rectangle 2', b: 10, h: 5 }

// vanilla javascript
// cuando declaramos la funcion, se le llama parametros a lo que esta dentro del parentesis
function getRectangleArea(rect) {
  return rect.b * rect.h
}

// cuando ejecutamos la funcion y le pasamos los valores, se les llaman argumentos
const a1 = getRectangleArea(rect1)
const a2 = getRectangleArea(rect2)

// const greetings = 'hola'
// const name = 'diego'

// console.log(greetings + ' ' + name)
const rect1Name = rect1.name
const rect2Name = rect2.name

// vanilla
// console.log('el rectangulo ' + rect1Name + ' tiene un area de ' + a1)

// es6 -> string interpolation
console.log(`el rectangulo ${rect1Name} tiene un area de ${a1}`)

// primitives
// data structures
// sintaxis, camelCase, PascalCase, snake_case
// functions
// acceder a un objeto
// variables
// string interpolation, template literals, concatenar strings
// WATMAN!

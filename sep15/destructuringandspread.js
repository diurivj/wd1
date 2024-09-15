const artist = {
  name: "Kanye",
  lastname: "West",
  age: 47,
  discography: [
    {
      name: "The College Dropout",
      released: "February 10, 2004",
      sales: 3358000,
      numberOfTracks: 21,
    },
    {
      name: "Late Registration",
      released: "August 30, 2005",
      sales: 3100000,
      numberOfTracks: 21,
    },
    {
      name: "Graduation",
      released: "September 11, 2007",
      sales: 2700000,
      numberOfTracks: 14,
    },
  ],
  retired: false,
  location: undefined,
};

// const name = artist.name
// console.log(name)

// const name = 'Diego'

// Destructurar propiedades de un objeto
// const {
//   // destructurar la llave name, pero con nombre diferente
//   name: firstName,
//   lastname,
//   age,
//   discography,
//   // le podemos dar valores default si el valor es undefined,
//   // si la llave no existe
//   wife = 'Kim Kardashian'
// } = artist
// console.log(firstName, lastname, age, discography)
// // console.log(`Que creen la morra de ${name} es ${wife}`)

// const [firstAlbum, secondAlbum, thirdAlbum] = discography

// const firstAlbum = discography[0]
// const secondAlbum = discography[1]
// const thirdAlbum = discography[2]

// console.log(fourthAlbum)

const {
  name,
  discography: [{ name: firstAlbumName, sales }, { numberOfTracks }],
  ...elResto
} = artist;

// const firstAlbumName = artist.discography[0].name
// const sales = artist.discography[0].sales
// const numberOfTracks = artist.discography[1].numberOfTracks

// console.log(elResto)

// null, undefined, false, 0 -> falsy

// function returnArtist() {
//   return { name: 'Taylor', lastname: 'Swift' }
// }

// const { name: artistName2, lastname: artistLastName2 } = returnArtist()
// // const artist2 = returnArtist()
// // const artistName2 = artist2.name
// // const artistLastName2 = artist2.lastname

// console.log(artistName2, artistLastName2)

const words = ["a", "b", "c", "d"];
const [a, ...lasDemasTontas] = words;

// console.log(lasDemasTontas)
const person = { head: true, body: true };

const clone1 = { ...artist, ...person };

clone1.name = "Ye";

// console.log(artist)
// console.log(clone1)

const fruits = ["🍎", "🍌", "🍉"];
const vegetables = ["🌽", "🍆", "🥔"];

const healthyFoods = [...fruits, ...vegetables];

const [apple, ...otrasFrutas] = fruits;
console.log(apple, otrasFrutas);

const arr = ["diego", "mike", "andres", "humberto"];
const newArr = [...arr].sort();

console.log(arr, newArr);

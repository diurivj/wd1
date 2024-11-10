// type Pokemon = {
//   name: string
//   age: number
//   owner?: string
// }

// type FirePower = {
//   firePower: number
// }

// // & ~= && -> AND -> Los conjuntos juntos completos
// // | ~= || -> OR -> Al menos uno de los conjuntos

// type FirePokemon = Pokemon & FirePower

// type FirePokemonWithHat = Pokemon &
//   FirePower & {
//     hat: boolean
//   }

// type FirePokemonWithOwner = Pokemon &
//   FirePower &
//   (
//     | {
//         owner: string
//       }
//     | {
//         owner: boolean
//       }
//   )

// let charizard: FirePokemon = {
//   firePower: 100,
//   name: 'Charizard',
//   age: 100,
//   owner: 'Diego',
// }

// let chari: Pokemon & FirePower = {
//   firePower: 50,
//   name: 'Mewtwo',
//   age: 1000,
//   owner: 'Diego',
// }

// let mrChari: FirePokemonWithHat = {
//   age: 28,
//   firePower: 200,
//   hat: true,
//   name: 'Mr Chari',
// }

// let domesticCharizard: FirePokemonWithOwner = {
//   age: 28,
//   firePower: 200,
//   name: 'Mr Chari',
//   owner: 'Diego',
// }

// type User = {
//   id: number
// }

// type User2 = {
//   id: string
// }

// const user: User & User2 = {}

// interface Car {
//   name: string
//   brand: string
//   type: 'fuel' | 'electric' | 'hybrid'
// }

// interface Luxury {
//   speakers: number
//   seatsMaterial: 'leather' | 'alcantara'
// }

// interface LuxuryCar extends Car, Luxury {}

// let myCar: LuxuryCar = {
//   name: 'Cayenne',
//   brand: 'Porsche',
//   type: 'hybrid',
//   speakers: 30,
//   seatsMaterial: 'alcantara',
// }

// interface User {
// 	id: number
// }

// interface User1 extends User {
// 	id: string;
// }

// Imaginen que aqui estamos en la L:300
// interface Album {
//   title: string
//   artist: string
// }

// .
// .
// .

// Imaginen que aqui estamos en la L:600
// interface Album {
//   artist: string
//   releasedYear: number
// }

// let topLastAlbum: Album = {
//   artist: 'Twenty One Pilots',
//   releasedYear: 2024,
//   title: 'Clancy',
// }

// Index signature

// Option 1.
// const albumAwards: {
//   [key: string]: boolean
// } = {}

// console.log(albumAwards.Grammy)

// albumAwards.Grammy = true
// albumAwards.MercuryPrize = false
// albumAwards.Billboard = true

// console.log(albumAwards.Grammy)

// Option 2.
// let albumAwards: Record<string, boolean> = {}

// albumAwards.Grammy = true
// albumAwards.MercuryPrize = false
// albumAwards.Billboard = true

// type AlbumAward1 = {
//   Grammy: boolean
//   MercuryPrize: boolean
//   Billboard: boolean
// }

// const albumAwards1: Record<'Grammy' | 'MercuryPrize' | 'Billboard', boolean> = {
//   Grammy: true,
//   MercuryPrize: false,
//   Billboard: true,
// }

// Option 3.
// type BaseAwards = 'Grammy' | 'MercuryPrize' | 'Billboard'

// type ExtendedAlbumAwards = Record<BaseAwards, boolean> & {
//   [award: string]: boolean
// }

// const extendedNominations: ExtendedAlbumAwards = {
//   Grammy: true,
//   MercuryPrize: false,
//   Billboard: true, // Additional awards can be dynamically added
//   'American Music Awards': true,
// }

// Option 4.a
// let obj: {
//   [key: PropertyKey]: boolean
// } = {}

// obj.perro = true

// Option 4.b
// let obj: Record<PropertyKey, boolean> = {}

// obj.perro = true

// const fn = (arg: object) => {}

// fn({})
// fn([])
// fn(() => {})

// type MyObject = Record<PropertyKey, unknown>

type Car = {
  name?: string
  color: string
  brand?: string
  engine: string
  environmentRegulation: boolean
}

type ChineseCar = Partial<Car>
const chineseCar: ChineseCar = {
  color: 'white',
}

type CompliantCar = Required<Car>
const ferrari: CompliantCar = {
  name: 'La Ferrari',
  brand: 'Ferrari',
  color: 'Red',
  engine: 'V8',
  environmentRegulation: true,
}

type SpellCar = Pick<Car, 'brand' | 'color' | 'engine' | 'name'>
const tonoCar: SpellCar = {
  color: 'black',
  engine: '2.0L',
}

type ElectricCar = Omit<Car, 'engine' | 'environmentRegulation'>
const cyberTruck: ElectricCar = {
  name: 'Cybertruck',
  color: 'Silver',
  brand: 'Tesla',
}

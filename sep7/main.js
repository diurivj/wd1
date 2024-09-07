// atributos -> key/value -> // llave / valor
// propiedades -> estado
// metodos -> comportamiento -> funciones

// clase
// instancias

// Molde -> crear objetos
// Molde de estrellita -> crear galletas de estrellita

// Vanilla javascript
// Molde
// function CrumbleCookie(name, flavor) {
//   this.name = name
//   this.flavor = flavor
//   this.size = 100
//   this.eat = function (quantity) {
//     if (quantity) {
//       this.size = this.size - quantity
//     } else {
//       this.size = this.size - 10
//     }
//   }
// }

// ES6
// Molde
// class Cookie {
//   constructor() {
//     this.name = 'Cookie'
//     this.shape = 'rounded'
//   }
// }

// class CrumbleCookie extends Cookie {
//   constructor(name, flavor) {
//     super()
//     this.name = name
//     this.flavor = flavor
//     this.size = 100
//   }

//   eat(quantity) {
//     if (quantity) {
//       this.size = this.size - quantity
//     } else {
//       this.size = this.size - 10
//     }
//   }
// }

// Instancias
// const cookie1 = new CrumbleCookie('Churro cookie', 'Churro')
// console.log(cookie1)

// const cookie2 = new CrumbleCookie(
//   'Strawberry shortcake cookie',
//   'Strawberry shortcake'
// )

class Pokemon {
  constructor(name) {
    this.name = name
    this.hp = 100
    this.bonus = 1
  }
}

class FirePokemon extends Pokemon {
  constructor(name) {
    super(name)
    this.type = 'fire'
  }

  ponerseMamadisimo() {
    this.bonus += 2
  }

  attack(pokemon) {
    if (pokemon.type === 'fire') {
      pokemon.hp = pokemon.hp - 5 * this.bonus
    } else if (pokemon.type === 'water') {
      pokemon.hp = pokemon.hp - 25 * this.bonus
    } else if (pokemon.type === 'rock') {
      pokemon.hp = pokemon.hp - 10 * this.bonus
    } else if (pokemon.type === 'electric') {
      pokemon.hp = pokemon.hp - 15 * this.bonus
    } else if (pokemon.type === 'physichic') {
      this.hp = this.hp - (15 + this.bonus)
    }
  }
}

class WaterPokemon extends Pokemon {
  constructor(name) {
    super(name)
    this.type = 'water'
  }

  attack(pokemon) {
    if (pokemon.type === 'fire') {
      pokemon.hp = pokemon.hp - 25
    } else if (pokemon.type === 'water') {
      pokemon.hp = pokemon.hp - 5
    } else if (pokemon.type === 'rock') {
      pokemon.hp = pokemon.hp - 5
    } else if (pokemon.type === 'electric') {
      pokemon.hp = pokemon.hp - 25
    }
  }
}

class RockPokemon extends Pokemon {
  constructor(name) {
    super(name)
    this.type = 'rock'
  }

  attack(pokemon) {
    if (pokemon.type === 'fire') {
      pokemon.hp = pokemon.hp - 15
    } else if (pokemon.type === 'water') {
      pokemon.hp = pokemon.hp - 10
    } else if (pokemon.type === 'rock') {
      pokemon.hp = pokemon.hp - 5
    } else if (pokemon.type === 'electric') {
      pokemon.hp = pokemon.hp - 5
    }
  }
}

class ElectricPokemon extends Pokemon {
  constructor(name) {
    super(name)
    this.type = 'electric'
  }

  attack(pokemon) {
    if (pokemon.type === 'fire') {
      pokemon.hp = pokemon.hp - 15
    } else if (pokemon.type === 'water') {
      pokemon.hp = pokemon.hp - 25
    } else if (pokemon.type === 'rock') {
      pokemon.hp = pokemon.hp - 10
    } else if (pokemon.type === 'electric') {
      pokemon.hp = pokemon.hp - 5
    }
  }
}

class PhysichicPokemon extends Pokemon {
  constructor(name) {
    super(name)
    this.type = 'physichic'
  }
}

const charizard = new FirePokemon('charizard')
const squirtle = new WaterPokemon('squirtle')
const pikachu = new ElectricPokemon('pikachu')
const onix = new RockPokemon('onix')
const mewtwo = new PhysichicPokemon('mewtwo')

console.log(pikachu.hp)
charizard.attack(pikachu)
console.log(pikachu.hp)

charizard.ponerseMamadisimo()

charizard.attack(squirtle)
console.log(squirtle)

charizard.attack(mewtwo)
console.log(mewtwo, charizard)

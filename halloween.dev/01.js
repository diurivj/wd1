function createMagicPotion(potions, target) {
  const map = new Map();

  for (let i = 0; i < potions.length; i++) {
    const potion = potions[i];
    const needed = target - potion;

    if (!isNaN(map.get(needed))) {
      return [map.get(needed), i];
    } else {
      map.set(potion, i);
    }
  }

  return undefined;
}

// potions -> una lista de enteros, un array de puros numeros del 0 al 9
// goal -> numero objetivo
// encontrar el indice de las dos primeras que sumen exactamente el poder

// [4, 5, 6, 2]
// 8
// [2, 3]

// [1, 2, 3, 4]
// 9
// undefined

// [1, 2, 3, 4]
// 5
// [1, 2]

const solution = createMagicPotion([4, 3, 2, 3, 4], 6);
console.log(solution);

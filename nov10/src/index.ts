type Hair =
  | 'blanco'
  | 'negro'
  | 'cafe'
  | 'rubio'
  | 'pelirrojo'
  | 'gris'
  | 'azul'
  | 'pelon pelon'
type Skin = 'blanco' | 'morenazo' | 'pelirrojo'
type SkinHair = 'bigote' | 'barba' | 'no tiene'
type Character = {
  name: string
  gender: 'hombre' | 'mujer'
  skin: Skin
  hair: Hair
  glasses: boolean
  hat: boolean
  earings: boolean
  skinHair: SkinHair
}

type QuestionType = keyof Character
type QuestionValue = Hair | Skin | SkinHair | boolean | string

type GetQuestionTypes = Record<
  QuestionType,
  { value: QuestionType; label: string }
>

type GenericValueResponse = {
  type: 'select'
  values: Array<{ value: boolean; label: string }>
}

type HairValueResponse = {
  type: 'select'
  values: Array<{ value: Hair; label: Hair }>
}

type SkinValueResponse = {
  type: 'select'
  values: Array<{ value: Skin; label: Skin }>
}

type SkinHairValueResponse = {
  type: 'select'
  values: Array<{ value: SkinHair; label: SkinHair }>
}

type GenderValueResponse = {
  type: 'select'
  values: Array<{ value: 'hombre' | 'mujer'; label: 'hombre' | 'mujer' }>
}

type GetQuestionValues = Record<
  QuestionType,
  | GenericValueResponse
  | SkinValueResponse
  | HairValueResponse
  | SkinHairValueResponse
  | GenderValueResponse
  | { type: 'input' }
>

const characters: Array<Character> = [
  {
    name: 'Diego',
    gender: 'hombre',
    hair: 'cafe',
    skin: 'morenazo',
    skinHair: 'no tiene',
    earings: false,
    glasses: false,
    hat: true,
  },
  {
    name: 'Esmeralda',
    gender: 'mujer',
    hair: 'azul',
    skin: 'morenazo',
    skinHair: 'no tiene',
    earings: true,
    glasses: true,
    hat: false,
  },
  {
    name: 'Paola',
    gender: 'mujer',
    hair: 'cafe',
    skin: 'morenazo',
    skinHair: 'no tiene',
    earings: true,
    glasses: true,
    hat: false,
  },
  {
    name: 'Mike',
    gender: 'hombre',
    hair: 'negro',
    skin: 'morenazo',
    skinHair: 'no tiene',

    earings: false,
    glasses: true,
    hat: true,
  },
  {
    name: 'Jonathan',
    gender: 'hombre',
    hair: 'negro',
    skin: 'morenazo',
    skinHair: 'barba',
    earings: false,
    glasses: true,
    hat: false,
  },
  {
    name: 'Humberto',
    gender: 'hombre',
    hair: 'negro',
    skin: 'morenazo',
    skinHair: 'no tiene',
    earings: false,
    glasses: false,
    hat: false,
  },
  {
    name: 'Shanks',
    gender: 'hombre',
    hair: 'pelirrojo',
    skin: 'pelirrojo',
    skinHair: 'no tiene',
    earings: false,
    glasses: false,
    hat: false,
  },
  {
    name: 'Yamato',
    gender: 'mujer',
    hair: 'blanco',
    skin: 'blanco',
    skinHair: 'no tiene',
    earings: true,
    glasses: false,
    hat: false,
  },
  {
    name: 'Doflamingo',
    gender: 'hombre',
    hair: 'rubio',
    skin: 'blanco',
    skinHair: 'no tiene',
    earings: false,
    glasses: true,
    hat: false,
  },
  {
    name: 'Edward',
    gender: 'hombre',
    hair: 'rubio',
    skin: 'blanco',
    skinHair: 'bigote',
    earings: false,
    glasses: false,
    hat: true,
  },
]

const genericValueResponse: GenericValueResponse = {
  type: 'select',
  values: [
    { value: false, label: 'No usa' },
    { value: true, label: 'Usa' },
  ],
}

const hairResponse: HairValueResponse = {
  type: 'select',
  values: [
    { label: 'azul', value: 'azul' },
    { label: 'blanco', value: 'blanco' },
    { label: 'cafe', value: 'cafe' },
    { label: 'gris', value: 'gris' },
    { label: 'negro', value: 'negro' },
    { label: 'pelirrojo', value: 'pelirrojo' },
    { label: 'pelon pelon', value: 'pelon pelon' },
    { label: 'rubio', value: 'rubio' },
  ],
}

const skinResponse: SkinValueResponse = {
  type: 'select',
  values: [
    { label: 'blanco', value: 'blanco' },
    { label: 'morenazo', value: 'morenazo' },
    { label: 'pelirrojo', value: 'pelirrojo' },
  ],
}

const skinHairResponse: SkinHairValueResponse = {
  type: 'select',
  values: [
    { label: 'barba', value: 'barba' },
    { label: 'bigote', value: 'bigote' },
    { label: 'no tiene', value: 'no tiene' },
  ],
}

const genderResponse: GenderValueResponse = {
  type: 'select',
  values: [
    { label: 'hombre', value: 'hombre' },
    { label: 'mujer', value: 'mujer' },
  ],
}

function getQuestionTypes(): GetQuestionTypes {
  return {
    earings: { value: 'earings', label: 'Usa aretes' },
    gender: { value: 'gender', label: 'Genero' },
    glasses: { value: 'glasses', label: 'Usa lentes' },
    hair: { value: 'hair', label: 'Tipo de cabello' },
    hat: { value: 'hat', label: 'Usa sombrero' },
    skin: { value: 'skin', label: 'Color de piel' },
    skinHair: { value: 'skinHair', label: 'Bello facial' },
    name: { value: 'name', label: 'Nombre del personaje' },
  }
}

function getQuestionValues(): GetQuestionValues {
  return {
    earings: genericValueResponse,
    glasses: genericValueResponse,
    hat: genericValueResponse,
    hair: hairResponse,
    skin: skinResponse,
    skinHair: skinHairResponse,
    gender: genderResponse,
    name: {
      type: 'input',
    },
  }
}

function renderQuestionType() {
  const questionTypes = getQuestionTypes()

  const select = document.createElement('select')
  select.id = 'question-type'
  select.className = 'text-lg py-2 px-6 rounded border'

  Object.values(questionTypes).map(value => {
    const option = document.createElement('option')
    option.value = value.value
    option.innerText = value.label
    select.appendChild(option)
  })

  const container = document.getElementById('questions-container')
  if (!container) throw new Error('Something went wrong')
  container.appendChild(select)
}

function renderQuestionValues() {
  const questionValues = getQuestionValues()
  const select = document.getElementById('question-type') as HTMLSelectElement
  if (!select) throw new Error('Something went wrong')

  const container = document.getElementById('questions-values')
  if (!container) throw new Error('Something went wrong')

  container.innerHTML = ''

  const value = select.value as keyof Character
  const question = questionValues[value]

  if (question.type === 'select') {
    const select = document.createElement('select')
    select.id = 'question-value'
    select.className = 'text-lg py-2 px-6 rounded border'

    Object.values(question.values).map(value => {
      const option = document.createElement('option')
      option.value = value.value
      option.innerText = value.label
      select.appendChild(option)
    })

    container.appendChild(select)
  }

  if (question.type === 'input') {
    const input = document.createElement('input')
    input.type = 'text'
    input.id = 'question-value'
    input.className = 'text-lg py-2 px-6 rounded border'
    container.appendChild(input)
  }
}

function getRandomArbitrary(min: number, max: number) {
  return Math.floor(Math.random() * (max - min) + min)
}

function getRandomCharacter(): Character {
  const randomIndex = getRandomArbitrary(0, characters.length - 1)
  return characters[randomIndex]
}

const character = getRandomCharacter()
renderQuestionType()
renderQuestionValues()

const questionSelect = document.getElementById('question-type')
questionSelect?.addEventListener('change', e => {
  renderQuestionValues()
})

const askButton = document.getElementById('ask-button')
askButton?.addEventListener('click', e => {
  const question = document.getElementById('question-type') as HTMLSelectElement
  const value = document.getElementById('question-value') as
    | HTMLSelectElement
    | HTMLInputElement

  const questionType = question.value as keyof Character
  const questionValue = value.value as QuestionValue

  let message: string
  if (questionType === 'name') {
    const response =
      String(character[questionType].toLowerCase()) ===
      questionValue.toString().toLowerCase()

    if (response) {
      // @ts-ignore
      const confetti = new window.ConfettiGenerator({
        target: 'my-canvas',
        max: '80',
        size: '1',
        animate: true,
        props: ['circle', 'square', 'triangle', 'line'],
        colors: [
          [165, 104, 246],
          [230, 61, 135],
          [0, 199, 228],
          [253, 214, 126],
        ],
        clock: '25',
        rotate: false,
        width: '2275',
        height: '1363',
        start_from_edge: false,
        respawn: true,
      })
      setTimeout(() => {
        confetti.render()
      }, 2000)
      message = `Felicidades, adivinaste el personaje`
    } else {
      message = `No; ese no es el nombre del personaje, intenta de nuevo`
    }
  } else {
    const response = String(character[questionType]) === questionValue
    message = response ? 'Si' : 'No'
  }
  const answer = document.getElementById('answer')
  if (!answer) throw new Error('whoops')
  answer.innerText = '🤔'
  setTimeout(() => {
    answer.innerText = message
  }, 1000)
})

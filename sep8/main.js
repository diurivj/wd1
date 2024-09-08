// Gracias al DOM, podemos:
// - Acceder a cualquier elemento del html
// - Esos elementos son accesibles como un objeto
// - Es decir, tienen atributos, aka, propiedades y metodos
// - Podemos tener eventos en esos elementos

// 1. Saber que queremos manipular, que elemento queremos manipular
// 1a. ¿Como acceder a ese elemento?, ¿Como sujeto ese elemento?
// let button = document.getElementById('title') // o nos regresa el elemento o nos regresa null
// button = document.getElementsByTagName('h1') // una coleccion de elementos de html
// button = document.getElementsByName('title') // una lista de nodos
// button = document.getElementsByClassName('perro') // una coleccion de elementos de html con esa clase
// Mas nuevos
// button = document.querySelector('h1') // un elemento
// button = document.querySelectorAll('h1') // una lista de nodos

// Recomendacion
// document.getElementById()
// document.querySelector()
// document.querySelectorAll()

// 2. ¿que queremos hacer con ese elemento?
// const h1 = document.querySelector('h1')
// h1.innerText = 'Adios'

// // Crear nodos o elementos de html
// const h4 = document.createElement('h4')
// h4.innerText = 'Que show!'

// const div = document.querySelector('#container')

// div.innerHTML = `
// <div>
//   <p>Hola</p>
//   <h4>que onda</h4>
// </div>
// `

// div.appendChild(h4)

// // 3. Listener (escuchador a el evento que nosotros le digamos)
// const button = document.querySelector('#change-title')

// function clickHappened() {
//   alert('Alguien le dio click maistra!')
// }

// button.addEventListener('click', () => {
//   alert('que rollo!')
// })

// 1.
const button = document.getElementById('add-content')
// 2.
button.addEventListener('click', () => {
  // 3.
  const li = document.createElement('li')
  li.classList.add('text-lg', 'underline')
  li.innerText = 'lorem'

  const ol = document.getElementById('container')
  ol.classList.add('list-decimal')
  ol.appendChild(li)
})

const deleteButton = document.getElementById('remove-content')

deleteButton.addEventListener('click', () => {
  const ol = document.getElementById('container')
  const li = document.querySelector('#container li:last-child')

  // null -> falsy
  // false -> falsy
  // undefined -> falsy
  // 0 -> falsy
  if (li) {
    ol.removeChild(li)
  }
})

document.addEventListener('keydown', function (event) {
  const key = event.key
  const h2 = document.getElementById('show-key')
  h2.innerText = key
})

const showPassword = document.getElementById('show-password')

showPassword.addEventListener('click', () => {
  const input = document.querySelector('#password')
  const inputType = input.getAttribute('type')

  if (inputType === 'text') {
    showPassword.innerText = 'Mostrar password'
    input.setAttribute('type', 'password')
  } else {
    const h2 = document.getElementById('show-key')
    h2.innerText = input.value
    showPassword.innerText = 'Ocultar password'
    input.setAttribute('type', 'text')
  }
})

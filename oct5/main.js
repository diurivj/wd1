const endpoint = `https://www.tronalddump.io`
const button = document.getElementById('get-random-quote')
const input = document.getElementById('q')

async function searchJoke(query) {
  const response = await fetch(`${endpoint}/search/quote?query=${query}`)
  if (!response.ok) throw new Error('algo salio mal')
  const data = await response.json()
  if (!data.total) {
    printQuote('No results found :(')
  } else {
    const quotes = data._embedded.quotes
    quotes.map(quote => printQuote(quote.value))
  }
}

async function getRandomJoke() {
  const response = await fetch(`${endpoint}/random/quote`)
  if (!response.ok) throw new Error('algo salio mal')
  const data = await response.json()
  printRandomQuote(data.value)
}

function printRandomQuote(quote) {
  const section = document.getElementById('quote')
  const p = document.createElement('p')
  p.className = 'text-lg'
  p.innerText = quote

  section.innerHTML = ''
  section.appendChild(p)
}

function printQuote(quote) {
  const div = document.getElementById('searched-quote')
  const p = document.createElement('p')
  p.className = 'text-lg'
  p.innerText = quote

  div.appendChild(p)
}

input.addEventListener('keydown', e => {
  if (e.key === 'Enter') {
    const query = e.target.value
    window.location.search = `q=${query}`
  }
})

button.addEventListener('click', getRandomJoke)

getRandomJoke()

const url = new URL(document.URL)
const query = url.searchParams.get('q')
if (query) {
  input.value = query
  searchJoke(query)
}

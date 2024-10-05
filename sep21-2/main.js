let page = 1
let hasNext = true
let hasRenderedPages = false
const baseUrl = `https://rickandmortyapi.com/api/character`

async function fetchData(page) {
  const response = await fetch(`${baseUrl}?page=${page}`)
  if (!response.ok) throw new Error(`Something went wrong`)
  const data = await response.json()
  const { results: characters } = data
  hasNext = Boolean(data.info.next)
  checkNextButtonDisabled()
  renderCharacters(characters)
  if (!hasRenderedPages) {
    renderPages(data.info.pages)
  }
}

function renderCharacters(characters) {
  const grid = document.getElementById('grid')
  grid.innerHTML = ``

  characters.map(character => {
    const div = document.createElement('div')
    div.className = 'border border-black'
    div.innerHTML = `
			<img src="${character.image}" alt="${character.name}" />
			<div class="px-2 py-4">
				<p class="font-medium text-xl">${character.name}</p>
				<p class="font-light">${character.species}</p>
				<p class="font-light italic">${character.status}</p>
			</div>
		`
    grid.appendChild(div)
  })

  document.body.appendChild(grid)
}

fetchData().catch(error => console.error(error))

const nextButton = document.getElementById('next')
nextButton.addEventListener('click', () => paginate(true))

const backButton = document.getElementById('back')
backButton.addEventListener('click', () => paginate(false))

checkBackButtonDisabled()
checkNextButtonDisabled()

function paginate(next) {
  if (next) {
    page++
  } else {
    page--
  }
  fetchData(page).catch(error => console.error(error))
  checkBackButtonDisabled()
}

function checkBackButtonDisabled() {
  if (page <= 1) {
    backButton.setAttribute('disabled', 'true')
  } else {
    backButton.removeAttribute('disabled')
  }
}

function checkNextButtonDisabled() {
  if (!hasNext) {
    nextButton.setAttribute('disabled', true)
  } else {
    nextButton.removeAttribute('disabled')
  }
}

function renderPages(pagesNumber) {
  hasRenderedPages = true
  const pages = [...Array(pagesNumber).keys()]
  const pagination = document.getElementById('pagination')
  const div = document.createElement('div')
  div.className = 'flex items-center justify-center gap-2 flex-wrap'
  pages.map(p => {
    const button = document.createElement('button')
    button.className =
      'border border-black p-2 flex items-center justify-center'
    button.innerText = p + 1
    button.onclick = () => {
      page = p + 1
      fetchData(page)
    }
    div.appendChild(button)
  })
  pagination.appendChild(div)
}

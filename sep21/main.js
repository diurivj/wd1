const randomNumber = Math.round(Math.random())

async function fetchData() {
  try {
    const response = await fetch('./data.json')
    if (!response.ok || !randomNumber) throw new Error('Something went wrong')
    const data = await response.json()
    renderUsers(data.users)
  } catch (error) {
    renderError(error)
  }
}

function renderUsers(users) {
  users.forEach(user => {
    const div = document.createElement('div')
    div.innerHTML = `<p>${user.name} ${user.lastname} tiene ${user.age} anos</p>`
    document.body.appendChild(div)
  })
}

function renderError(error) {
  console.error(error)
  const div = document.createElement('div')
  div.innerHTML = `<p>${error}</p>`
  document.body.appendChild(div)

  const button = document.createElement('button')
  button.innerText = 'Recargar'
  button.onclick = () => window.location.reload()
  document.body.appendChild(button)
}

fetchData()

// fetch('./data.json')
//   .then(response => {
//     if (response.ok && randomNumber) return response.json()
//     throw new Error('Something went wrong')
//   })
//   .then(data => renderUsers(data.users))
//   .catch(error => renderError(error))

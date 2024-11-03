import { User } from '../types/user'

function renderUsers(users: Array<User>) {
  users.map(user => {
    const h1 = document.createElement('h1')
    h1.innerText = user.name
  })
}

const tuple: [User, string] = [
  {
    id: 1,
    name: 'Diego',
    lastname: 'Vazquez',
    age: 28,
    created_at: new Date(),
  },
  'perro',
]

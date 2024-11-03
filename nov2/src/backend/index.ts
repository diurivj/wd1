import { User } from '../types/user'

export function getUsers(): User[] {
  const users: User[] = [
    {
      id: 1,
      name: 'Diego',
      lastname: 'Vazquez',
      age: 28,
      created_at: new Date(),
    },
  ]
  return users
}

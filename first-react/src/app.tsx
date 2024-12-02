import { Card } from './card'

const baseImg = 'https://rickandmortyapi.com/api/character/avatar'
const characters = [
  {
    id: 1,
    name: 'Rick Sanchez',
    species: 'Human',
  },
  {
    id: 2,
    name: 'Morty Smith',
    species: 'Human',
  },
  {
    id: 3,
    name: 'Summer Smith',
    species: 'Human',
  },
  {
    id: 4,
    name: 'Beth Sanchez',
    species: 'Human',
  },
  {
    id: 5,
    name: 'Jerry Smith',
    species: 'Human',
  },
  {
    id: 6,
    name: 'Abadango Cluster Princess',
    species: 'Alien',
  },
]

export function App() {
  return (
    <section className='p-10 place-content-center grid grid-cols-3 gap-4'>
      {characters.map(({ id, name, species }) => (
        <Card
          key={id}
          name={name}
          species={species}
          img={`${baseImg}/${id}.jpeg`}
        />
      ))}
    </section>
  )
}

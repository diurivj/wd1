type CardProps = {
  img: string
  name: string
  species?: string
}

export function Card({ img, name, species = 'Unknown' }: CardProps) {
  return (
    <div className='border justify-self-center space-y-2 w-fit shadow-md rounded-lg p-4'>
      <img alt={name} src={img} />
      <p className='font-medium text-xl'>{name}</p>
      <p>{species}</p>
    </div>
  )
}

// Styles, CSS, tailwindcss
// Component Props

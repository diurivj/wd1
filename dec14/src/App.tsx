import { FormEvent, useEffect, useState } from 'react'
import { Input } from './components/Input'
import { Label } from './components/Label'
import { Button } from './components/Button'

type Food = {
  name: string
  img: string
}

export function App() {
  const [foods, setFoods] = useState<Food[]>(() => {
    const storage = localStorage.getItem('foods')
    if (!storage) return []
    return JSON.parse(storage)
  })

  // Necesitamos que se ejecute, cada que el `foods` state cambie
  useEffect(() => {
    if (!foods.length) return
    const storage = JSON.stringify(foods)
    localStorage.setItem('foods', storage)
  }, [foods])

  function handleOnSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const form = e.currentTarget

    const formData = new FormData(form)
    const foodName = formData.get('food-name')
    const foodImg = formData.get('food-img')

    if (!foodName || !foodImg) {
      alert('Whoops, you missed something!')
      return
    }

    if (typeof foodName !== 'string' || typeof foodImg !== 'string') {
      alert('Whoops, you missed something!')
      return
    }

    const food = {
      name: foodName,
      img: foodImg,
    }

    setFoods(prevFoods => {
      return [...prevFoods, food]
    })

    form.reset()
  }

  return (
    <>
      <section className='flex py-4 items-center justify-center'>
        <div className='scroll-m-20 flex items-center gap-x-2 text-4xl font-extrabold tracking-tight lg:text-5xl'>
          <span role='img'>😋</span>
          <h1>Favorite foods!</h1>
        </div>
      </section>

      <section className='flex py-4 items-center justify-center'>
        <form className='space-y-4' onSubmit={handleOnSubmit}>
          <div className='flex flex-col gap-y-1'>
            <Label htmlFor='food-name'>Food name</Label>
            <Input id='food-name' name='food-name' />
          </div>
          <div className='flex flex-col gap-y-1'>
            <Label htmlFor='food-img'>Food img</Label>
            <Input id='food-img' name='food-img' />
          </div>
          <Button>Add food</Button>
        </form>
      </section>

      <main className='flex py-4 items-center justify-center mx-auto max-w-[1440px]'>
        {!foods.length ? (
          <p className='leading-7 [&:not(:first-child)]:mt-6'>
            There's no foods added yet.
          </p>
        ) : (
          <section className='grid grid-cols-3 gap-8'>
            {foods.map(food => (
              <div
                key={food.name}
                className='flex flex-col gap-y-2 border shadow-2xs'
              >
                <img src={food.img} alt={food.name} className='aspect-video' />
                <p className='leading-7'>{food.name}</p>
              </div>
            ))}
          </section>
        )}
      </main>
    </>
  )
}

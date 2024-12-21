type ButtonProps = React.ComponentProps<'button'>

export function Button(props: ButtonProps) {
  return (
    <button
      className='h-9 w-full rounded-lg inline-flex items-center justify-center px-4 py-2 bg-black text-white shadow hover:bg-black/90'
      {...props}
    />
  )
}

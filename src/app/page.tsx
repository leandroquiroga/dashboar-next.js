import { redirect } from 'next/navigation'

export default function HomePage() {

  // Rederigimos a una page por default
  redirect('/dashboard/main');

  return (  
    <h1>Hola mundo</h1>
  )
}

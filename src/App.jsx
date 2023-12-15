import { Children, useState } from 'react'
import './App.css'
import Sidebar from './Sidebar'


function App() {
  const [count, setCount] = useState(0)

  return (
   <main className='flex dark:text-white
   dark:bg-black'>
      
      <Sidebar/>
    </main>
  )
}

export default App

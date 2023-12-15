import { Children, useState } from 'react'
import './App.css'
import Sidebar from './Sidebar'


function App() {
  const [count, setCount] = useState(0)

  return (
   <main className='App'>
      <Sidebar/>
    </main>
  )
}

export default App

'use client'

import { Children, useState } from 'react'
import './App.css'
import Sidebar from './Sidebar'
import { ThemeProvider } from 'next-themes'
import { ToggleThemeBtn } from './component/ToggleThemeBtn'

export default function App() {
  const [count, setCount] = useState(0)

  return (
   <main className='flex dark:text-white
   dark:bg-black'>
      <ThemeProvider attribute="class">
        <Sidebar/>
          <div className="flex min-h-screen min-w-fit items-start justify-end ml-[75%] mt-[23px]"> 
            <ToggleThemeBtn/>  
            <div className="ml-[-105px] mt-[-1px]">Theme:</div>
          </div>
          
      </ThemeProvider>
      
    </main>
  )
}


  
 



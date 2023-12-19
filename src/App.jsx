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
   dark:bg-zinc-800'>
      <ThemeProvider attribute="class">
        <Sidebar/>
          <div className="flex min-h-screen min-w-fit items-start justify-end ml-[90%] mt-[23px] fixed"> 
            <ToggleThemeBtn/>  
            <div className="ml-[-90px] mt-[-1px]">Dark:</div>
          </div>
          
      </ThemeProvider>
      
    </main>
  )
}


  
 



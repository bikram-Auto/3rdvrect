import Sidebar from './Sidebar'
import { Outlet } from 'react-router-dom'
import { ThemeProvider } from 'next-themes';

function Layout() {
  return (
    <>
    <ThemeProvider>   
     <div className="flex relative">
      <Sidebar/>
      <Outlet />
     </div>
    </ThemeProvider>
    </>
  )
}

export default Layout
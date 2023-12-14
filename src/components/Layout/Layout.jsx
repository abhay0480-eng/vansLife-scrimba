import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../HeaderComponent/Header'
import Footer from '../FooterComponent/Footer'

const Layout = () => {
  return (
    <>
    {/* <div className='flex flex-col h-screen'>
    <Header/>
        <main className=''>
            <Outlet/>
        </main>
    <Footer/>
    </div> */}
     <div className='flex flex-col h-screen'>
      <Header />
      <main className='flex-1 overflow-y-auto'>
        {/* Use overflow-y-auto to allow scrolling if the content overflows */}
        <Outlet />
      </main>
      <Footer />
    </div>
    
    </>
  )
}

export default Layout
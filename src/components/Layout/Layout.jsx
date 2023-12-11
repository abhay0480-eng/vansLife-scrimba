import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../HeaderComponent/Header'
import Footer from '../FooterComponent/Footer'

const Layout = () => {
  return (
    <>
    <div className='flex flex-col h-screen'>
    <Header/>
        <main>
            <Outlet/>
        </main>
    <Footer/>
    </div>
    
    </>
  )
}

export default Layout
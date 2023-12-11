import { useState } from 'react'
import './App.css'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Van from './pages/Van'
import VanDetail from './pages/VanDetail'
import { Provider } from 'react-redux'
import store from './store/store'
import './server'
import Layout from './components/Layout/Layout'
import Dashboard from './pages/Host/Dashboard'
import Income from './pages/Host/Income'
import Reviews from './pages/Host/Reviews'
import HostLayout from './components/Layout/HostLayout'
import HostVans from './pages/Host/HostVans'
import HostVansDetail from './pages/Host/HostVansDetail'


function App() {

  return (
    <>
    <Provider store={store}>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout/>}>
          <Route index element={<Home/>}/>
          <Route path='about' element={<About/>}/>
          <Route path='van' element={<Van/>}/>
          <Route path='van-detail/:id' element={<VanDetail/>}/>

          <Route path='host' element={<HostLayout/>}>
            <Route index element={<Dashboard/>}/>
            <Route path='income' element={<Income/>}/>
            <Route path='reviews' element={<Reviews/>}/>
            <Route path='host-vans' element={<HostVans/>}/>
            <Route path='host-vans/:id' element={<HostVansDetail/>}/>
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
    </Provider>

    </>
  )
}

export default App

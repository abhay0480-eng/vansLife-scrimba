import React from 'react'
import Button from '../components/Common/Button'
import { Link } from 'react-router-dom'

const PageNotFound = () => {
  return (
    <div className='flex flex-col justify-center h-48 text-center '>
      <div className='w-2/3 mx-auto'>
      <h1 className='text-[#161616] font-bold test-[32px] my-5'>Sorry, the page you were looking for was not found.</h1>
      <div  className="bg-[#161616] text-white font-bold test-[32px] w-full p-10 text-center my-5">
      <Link to='/'>Return to home</Link>
      </div>
      </div>
     
    </div>
  )
}

export default PageNotFound
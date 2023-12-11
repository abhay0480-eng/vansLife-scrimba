import React, { useEffect } from 'react'
import { Outlet } from 'react-router-dom'
import HostVansList from '../../components/HostVansList'
import { useDispatch, useSelector } from 'react-redux'

const Dashboard = () => {

  return (
    <>
    
    <Outlet/>
    <div className='px-10 py-5 bg-[#FFEAD0]'>
      <h1 className='text-[#161616] text-[36px] font-bold'>Welcome!</h1>
      <div className='flex justify-between items-center text-[#4D4D4D] text-[16px] font-medium my-5'>
        <p>Income last <span className='text-[#161616]'>30 days</span></p>
        <p className='text-[#161616]'>Details</p>
      </div>
      <p className='text-[#161616] text-[48px] font-bold'>$2,260</p>
    </div>


    <div className='flex justify-between items-center p-5 bg-[#FFDDB2]'>
      <div className='flex justify-center items-center'>
        <p className='text-[#161616] text-[24px] font-bold mx-5'>Review score</p>
        <p className='text-[#161616]'>5.0 <span className='text-[#4D4D4D]'>/5</span></p>
      </div>
      <p className='text-[#161616]'>Details</p>
    </div>

    <HostVansList/>
    
    
    </>
  )
}

export default Dashboard
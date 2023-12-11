import React from 'react'

const Income = () => {
  return (
    <div className='px-10 bg-[#FFF7ED] pb-10'>
    <h1 className='text-[#161616] text-[36px] font-bold '>Income</h1>
    <p className='my-6'>Last <span className='text-[#4D4D4D] font-bold underline'>30 days</span></p>
    <p className='text-[#161616] text-[46px] font-extrabold my-6'>$2,260</p>

    <div>
        graph
    </div>
    <div>
        <div className='flex justify-between items-center'>
            <p className='text-[#161616] font-bold text-[24px]'>Your transactions (3)</p>
            <p className='my-6'>Last <span className='text-[#4D4D4D] font-bold underline'>30 days</span></p>
        </div>
        <div className='flex justify-between items-center bg-white px-5 py-5 text-[#161616]' >
            <p className='text-[36px] font-semibold'>$720</p>
            <p className='text-[#4D4D4D] text-[20px] font-medium'>1/12/22</p>
        </div>
    </div>
    </div>
  )
}

export default Income
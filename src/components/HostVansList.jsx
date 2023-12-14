import React from 'react'
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom'

const HostVansList = () => {
    const vanList = useSelector((state) => state.hostVan?.hostVanList);
    console.log(vanList);

  return (
    <div className='bg-[#FFF7ED] p-5'>
    <div className='flex justify-between items-center text-[#161616] py-5 px-10'>
      <p className='text-[24px] font-bold'>Your listed vans</p>
      <p className='text-[16px] font-medium'>View all</p>
    </div>

    {vanList.map((van)=>{
        return(
            <Link key={van.id} to={`host-vans/${van.id}`} className='flex justify-between items-center bg-[#FFF] p-5 mx-10 my-5'>
            <div className='flex  items-center '>
                <div>
                    <img src={van.imageUrl} alt='van' className='w-32' />
                </div>
                <div className='mx-4'>
                    <p className='text-[#161616] text-[20px] font-semibold'>{van.name}</p>
                    <p className='text-[#4D4D4D] font-medium text-[16px] mt-2'>{`$${van.price}/day`}</p>
                </div>
            </div>
            <div className='text-[#161616] font-medium text-[16px]'>Edit</div>
            </Link>
        )
    })}
  </div>
  )
}

export default HostVansList
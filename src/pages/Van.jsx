import React, { useEffect } from 'react'
import Button from '../components/Common/Button'
import { Link } from 'react-router-dom'
import {  useSelector } from 'react-redux';

const Van = () => {
  const vanList = useSelector((state) => state.van.vanList);
  console.log("vanList", vanList);
   
  return (
    <>
    <h1 className='text-[#161616] text-[32px] font-bold'>Explore our van options</h1>
    <div className='flex justify-between items-center my-10'>
        <Button className="bg-[#FFEAD0] rounded-md py-2 px-7 max-w-xs !text-[#4D4D4D]">Simple</Button>
        <Button className="bg-[#FFEAD0] rounded-md py-2 px-7 max-w-xs !text-[#4D4D4D]">Luxury</Button>
        <Button className="bg-[#FFEAD0] rounded-md py-2 px-7 max-w-xs !text-[#4D4D4D]">Rugged</Button>
        <Button className="bg-[#fff] max-w-xs !text-[#4D4D4D] underline">Clear filters</Button>
    </div>
    <div className='grid grid-cols-4 gap-10 p-5'>
    {vanList.map((van)=>{
        return(
            <Link key={van.id} to={`/van-detail/${van.id}`} className='rounded-md'>
            <img src={van.imageUrl} alt="" className='w-full object-cover'/>
            <div className='flex justify-between items-center my-3'>
                <p>{van.name}</p>
                <p>${van.price}</p>
            </div>
            <Button className={`${van.type==="simple"?"!bg-[#E17654]":van.type==="luxury"?"!bg-[#161616]":"!bg-[#115E59]"}  max-w-xs`}>{van.type}</Button>
        </Link>
        )
       
    })}
        
    </div>
    </>
  )
}

export default Van
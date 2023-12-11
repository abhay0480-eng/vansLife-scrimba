import React, { useEffect } from 'react'
import Button from '../components/Common/Button'
import { Link, useSearchParams } from 'react-router-dom'
import {  useSelector } from 'react-redux';

const Van = () => {
  const [searchParams, setSearchParams] = useSearchParams()
  const filterType = searchParams.get("type")

  const vanList = useSelector((state) => state.van.vanList);

  const vansFilter = filterType?vanList.filter((van) => van.type.toLowerCase() === filterType): vanList
  console.log("vanList", vanList);
   
  return (
    <>
    <h1 className='text-[#161616] text-[32px] font-bold mt-5 px-5'>Explore our van options</h1>
    <div className='flex justify-evenly items-center my-10'>
        <Link to="?type=simple" className="bg-[#FFEAD0] rounded-md py-2 px-7 max-w-sm !text-[#4D4D4D]">Simple</Link>
        <Link to="?type=luxury" className="bg-[#FFEAD0] rounded-md py-2 px-7 max-w-sm !text-[#4D4D4D]">Luxury</Link>
        <Link to="?type=rugged" className="bg-[#FFEAD0] rounded-md py-2 px-7 max-w-sm !text-[#4D4D4D]">Rugged</Link>
        <Link to="." className="bg-[#fff] max-w-xs !text-[#4D4D4D] underline">Clear filters</Link>
        {/* <button onClick={() => setSearchParams("type=simple")}>Simple</button> */}
    </div>
    <div className='grid grid-cols-4 gap-10 p-5'>
    {vansFilter.map((van)=>{
        return(
            <Link key={van.id} to={`/van-detail/${van.id}`} className='rounded-md transition-transform transform hover:scale-110'>
            <img src={van.imageUrl} alt="" className='w-full object-cover rounded-md'/>
            <div className='flex justify-between items-center my-3 text-[#161616]'>
                <p className='text-[20px] font-semibold'>{van.name}</p>
                <p  className='text-[20px] font-semibold'>${van.price}/day</p>
            </div>
            <Button className={`${van.type==="simple"?"!bg-[#E17654]":van.type==="luxury"?"!bg-[#161616]":"!bg-[#115E59]"}  w-40`}>{van.type}</Button>
        </Link>
        )
       
    })}
        
    </div>
    </>
  )
}

export default Van
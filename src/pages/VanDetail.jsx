import React from 'react'
import Button from '../components/Common/Button'
import { Link, useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';

const VanDetail = () => {
  const {id} = useParams()
  const vanList = useSelector((state) => state.van.vanList);
  const foundVan = vanList.find(van => van.id === id);
  console.log("foundVan", foundVan);

  return (
    <>
    <Link to="/van" className='px-10'>Back to all vans</Link>
    <div className='grid grid-cols-4 gap-x-10 p-10'>
        <div className='col-span-1'>
            <img src={foundVan.imageUrl} alt='' className='w-full object-cover' />
        </div>
        <div className='col-span-3'>
        <Button className="bg-[#FFEAD0] rounded-md py-2 px-7 max-w-xs !text-[#4D4D4D]">{foundVan.type}</Button>
        <h1 className='text-[#161616] text-[32px] font-bold my-5'>{foundVan.name}</h1>
        <p className='text-[#161616] text-[32px] font-bold my-5'>{`$${foundVan.price}/day`}</p>
        <p className='text-[#161616] text-[16px] my-5'>{foundVan.description}</p>
        <Button className="bg-[#FF8C38] py-2 ">Rent this van</Button>


        </div>

    </div>
    </>
  )
}

export default VanDetail
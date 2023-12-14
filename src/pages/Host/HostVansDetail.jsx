import React from 'react'
import { useSelector } from 'react-redux';
import { Link, NavLink, Outlet, useParams } from 'react-router-dom';
import Button from '../../components/Common/Button';

const HostVansDetail = () => {
  const {id} = useParams()
  const vanList = useSelector((state) => state.hostVan?.hostVanList);
  const foundVan = vanList.find(van => van.id === id);
  return (
    <>
     <Link to=".." relative='path' className='px-10'>Back to all vans</Link>
    <div className='lg:grid lg:grid-cols-4 lg:gap-x-10 p-10'>
        <div className='col-span-1'>
            <img src={foundVan.imageUrl} alt='' className='w-[70%] object-cover mr-auto' />
        </div>
        <div className='col-span-3'>
        <Button className="bg-[#FFEAD0] rounded-md py-2 px-7 max-w-xs !text-[#4D4D4D]">{foundVan.type}</Button>
        <h1 className='text-[#161616] text-[32px] font-bold my-5'>{foundVan.name}</h1>
        <p className='text-[#161616] text-[32px] font-bold my-5'>{`$${foundVan.price}/day`}</p>
        {/* <p className='text-[#161616] text-[16px] my-5'>{foundVan.description}</p> */}
        </div>
    </div>
    <div>
    <nav className='px-5'>
        <NavLink to='.' end  className={({isActive}) => isActive?"underline mx-5 text-[16px] font-semibold":"text-[#4D4D4D] mx-5 text-[16px] font-semibold" }>Details</NavLink>
        <NavLink to='pricing'  className={({isActive}) => isActive?"underline mx-5 text-[16px] font-semibold":"text-[#4D4D4D] mx-5 text-[16px] font-semibold" }>Pricing</NavLink>
        <NavLink to='photos' className={({isActive}) => isActive?"underline mx-5 text-[16px] font-semibold":"text-[#4D4D4D] mx-5 text-[16px] font-semibold" }>Photos</NavLink>
    </nav>
    </div>
    <Outlet/>
    </>
  )
}

export default HostVansDetail
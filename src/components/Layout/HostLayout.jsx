import React, { useEffect } from 'react'
import { Link, NavLink, Outlet } from 'react-router-dom'
import Header from '../HeaderComponent/Header'
import { useDispatch } from 'react-redux'
import { getHostVanList } from '../../store/hostVanListSlice'

const HostLayout = () => {
  const dispatch = useDispatch()
  const HostVanList = JSON.parse(localStorage.getItem('HostVanList'));

  useEffect(() => {

    async function fetchData() {
      try {
        if(!HostVanList){
          const req = await fetch("/api/host/vans")
          const res = await req.json()
           console.log("res", res.vans);
           dispatch(getHostVanList(res.vans))
        }
        

      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }

    fetchData();
  }, []);
  return (
    <>
    <nav className='bg-[#FFF7ED] p-10'>
        <NavLink to='.' end  className={({isActive}) => isActive?"underline mx-5 text-[16px] font-semibold":"text-[#4D4D4D] mx-5 text-[16px] font-semibold" }>Dashboard</NavLink>
        <NavLink to='income'  className={({isActive}) => isActive?"underline mx-5 text-[16px] font-semibold":"text-[#4D4D4D] mx-5 text-[16px] font-semibold" }>Income</NavLink>
        <NavLink to='host-vans' className={({isActive}) => isActive?"underline mx-5 text-[16px] font-semibold":"text-[#4D4D4D] mx-5 text-[16px] font-semibold" }>Vans</NavLink>
        <NavLink to='reviews' className={({isActive}) => isActive?"underline mx-5 text-[16px] font-semibold":"text-[#4D4D4D] mx-5 text-[16px] font-semibold" }>Reviews</NavLink>
    </nav>
    <Outlet/>
    </>
  )
}

export default HostLayout
import React, { useEffect } from 'react'
import Button from '../components/Common/Button'
import { useDispatch } from 'react-redux'
import { getvanList } from '../store/vanListSlice'

const Home = () => {
  const dispatch = useDispatch()
const getVanList = JSON.parse(localStorage.getItem('getVanList'));


  useEffect(() => {

    async function fetchData() {
      try {
        if(!getVanList){
          const req = await fetch("/api/vans")
          const res = await req.json()
           console.log("res", res.vans);
           dispatch(getvanList(res.vans))
        }
        

      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }

    fetchData();
  }, []);

  return (
    <>
    <div className='relative '>
 
        <div className=' bg-[url("images/homeBackground.png")] bg-cover lg:h-full px-7 flex justify-center items-center py-20 bg-no-repeat'>
          <div>
            <h1 className='text-[36px] text-white font-extrabold text-center'>You got the travel plans, we got the travel vans.</h1>
            <p className='text-[16px] text-white font-medium text-center mt-10 mb-32'>Add adventure to your life by joining the #vanlife movement. Rent the perfect van to make your perfect road trip.</p>
            <Button>Find your van</Button>
          </div>
        </div>

    </div>
       
    </>
  )
}

export default Home
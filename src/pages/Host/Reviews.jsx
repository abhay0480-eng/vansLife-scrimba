import React from 'react'

const Reviews = () => {
  return (
    <div>
      <div className='flex'>
       <h1 className='text-[#161616] text-[36px] font-bold '>Your reviews</h1> 
        <p className='my-6'>Last <span className='text-[#4D4D4D] font-bold underline'>30 days</span></p>
      </div>
      <div>
        <div className='flex'>
          <p>5.0</p>
          <svg xmlns="http://www.w3.org/2000/svg" width="21" height="19" viewBox="0 0 21 19" fill="none">
            <path d="M9.30123 0.843597C9.64795 -0.117224 11.0068 -0.117225 11.3535 0.843596L13.0595 5.57118C13.2156 6.0036 13.6259 6.2918 14.0856 6.2918H19.3421C20.4264 6.2918 20.8467 7.70205 19.9393 8.29562L15.8905 10.9443C15.4675 11.221 15.29 11.7521 15.4615 12.2275L17.0532 16.6383C17.4087 17.6236 16.3064 18.495 15.4298 17.9215L10.9246 14.9743C10.5618 14.737 10.0929 14.737 9.73015 14.9743L5.22489 17.9215C4.34834 18.495 3.24599 17.6236 3.60154 16.6383L5.19321 12.2275C5.36479 11.7521 5.18728 11.221 4.76429 10.9443L0.715395 8.29562C-0.191962 7.70205 0.228344 6.2918 1.31261 6.2918H6.56909C7.0288 6.2918 7.43919 6.0036 7.59523 5.57118L9.30123 0.843597Z" fill="#FF8C38"/>
          </svg>
          <p>overall rating</p>
        </div>
        <div className='grid grid-cols-3 my-3 items-center'>
          <div>5 stars</div>
          <div className='w-full h-1 bg-[#FF8C38]'></div>
          <div>100%</div>
        </div>
        <div className='grid grid-cols-3 my-3 items-center'>
          <div>4 stars</div>
          <div className='w-full h-1 bg-[#B9B9B9]'></div>
          <div>0%</div>
        </div>
        <div className='grid grid-cols-3 my-3 items-center' > 
          <div>3 stars</div>
          <div className='w-full h-1 bg-[#B9B9B9]'></div>
          <div>0%</div>
        </div>
        <div className='grid grid-cols-3 my-3 items-center'>
          <div>2 stars</div>
          <div className='w-full h-1 bg-[#B9B9B9]'></div>
          <div>0%</div>
        </div>
        <div className='grid grid-cols-3 my-3 items-center'>
          <div>1 stars</div>
          <div className='w-full h-1 bg-[#B9B9B9]'></div>
          <div>0%</div>
        </div>
        
      </div>

    </div>
  )
}

export default Reviews
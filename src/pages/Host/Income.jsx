import React from 'react'

const Income = () => {
  return (
    <>
    <h1>Income</h1>
    <p>Last 30 days</p>
    <p>$2,260</p>
    <div>
        graph
    </div>
    <div>
        <div className='flex justify-between items-center'>
            <p>Your transactions (3)</p>
            <p>Last 30 days</p>
        </div>
        <div className='flex justify-between items-center'>
            <p>$720</p>
            <p>1/12/22</p>
        </div>
    </div>
    </>
  )
}

export default Income
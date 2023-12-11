import React from 'react'

const Button = ({children,className}) => {
  return (
    <button className={`bg-[#FF8C38] w-full rounded-md p-3 text-white ${className}`}>{children}</button>
  )
}

export default Button
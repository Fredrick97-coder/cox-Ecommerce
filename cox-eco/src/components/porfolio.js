import React from 'react'
import { Link } from 'react-router-dom'

const Porfolio = () => {
  return (
    <div className='bg-white h-screen flex flex-col justify-center items-center'>
      <Link
        to='/'
        className='py-6 px-10 bg-yellow-500 rounded-full text-3xl hover:bg-yellow-300 transition duration-300 easy-in-out animate-bounce'
      >
        buy me
      </Link>
    </div>
  )
}

export default Porfolio

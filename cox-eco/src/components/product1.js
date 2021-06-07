import React from 'react'

const Product1 = () => {
  return (
    <div className='grid grid-flow-col items-center justify-center gap-5 m-5'>
      <div className='items-center justify-center'>
        <img
          src='https://pbs.twimg.com/media/E2USvZpXIAIc8dR.jpg'
          className='w-66 h-56 cursor-pointer hover:opacity-40 transition duration-700'
        />
        <h2 className='mt-1  justify-center text-center'>Fries~$50</h2>
        <button className='flex border mt-2 p-2  ml-20 hover:bg-yellow-500'>
          Add to Cart
        </button>
      </div>
      <div className='items-center justify-center'>
        <img
          src='https://images.unsplash.com/photo-1549298916-f52d724204b4?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=701&q=80'
          className='w-66 h-56 cursor-pointer hover:opacity-40 transition duration-700'
        />
        <h2 className='mt-1 justify-center text-center'>Sneaker~yellow $50</h2>
        <button className='flex border mt-2 p-2  ml-24 hover:bg-yellow-500'>
          Add to Cart
        </button>
      </div>
      <div className='items-center justify-center'>
        <img
          src='https://pbs.twimg.com/media/E2USvZpXIAIc8dR.jpg'
          className='w-66 h-56 cursor-pointer hover:opacity-40 transition duration-700'
        />
        <h2 className='mt-1 justify-center text-center'>$50</h2>
        <button className='flex border mt-2 p-2  ml-20 hover:bg-yellow-500'>
          Add to Cart
        </button>
      </div>
    </div>
  )
}

export default Product1

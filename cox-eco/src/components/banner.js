import logo from '../assets/image/banner.jpg'
import logol from '../assets/image/l-banner.jpg'

const Banner = () => {
  return (
    <div className='grid grid-flow-col grid-cols-2 gap-4  border-t-4 auto-cols-fr justify-center items-center m-6 '>
      <img
        src={logol}
        className=' border mt-6 hover:opacity-40 transition duration-700'
      />
      <img
        src={logo}
        className=' border mt-6 hover:opacity-40 transition duration-700'
      />
    </div>
  )
}

export default Banner

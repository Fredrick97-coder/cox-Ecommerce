import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav
      className='flex justify-between items-center h-16 bg-white text-black relative shadow-sm font-mono'
      role='navigation'
    >
      <Link to='/' className='flex text-red-500 font-bold pl-10'>
        COX|<h1>ECOMMERCE</h1>
      </Link>
      <div className='px-4 cursor-pointer md:hidden'>
        <svg
          class='w-6 h-6 '
          fill='none'
          stroke='currentColor'
          viewBox='0 0 24 24'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path
            stroke-linecap='round'
            stroke-linejoin='round'
            stroke-width='2'
            d='M4 6h16M4 12h16M4 18h16'
          ></path>
        </svg>
      </div>
      <div className='pr-8 md:block hidden'>
        <Link to='/' className='pl-4 hover:text-yellow-300'>
          Login
        </Link>
        <Link to='/' className='pl-4 hover:text-yellow-300'>
          Help
        </Link>
        <Link to='/' className='pl-4 hover:text-yellow-300'>
          Cart
        </Link>
      </div>
    </nav>
  )
}

export default Navbar

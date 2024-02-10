import { useState } from 'react'
import { AiOutlineMail } from 'react-icons/ai'
import { FaGithub, FaYoutube, FaBars } from 'react-icons/fa'

const NavbarSecundary = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className='fixed top-0 w-full md:w-4/5 pb-6'>
      <nav className='bg-dark-100 flex items-center justify-between px-4 py-2 lg:py-4 lg:px-20'>
        <div className='px-2'>

          <form>
            <label htmlFor='default-search' className='mb-2 text-sm font-medium sr-only text-white'>Search</label>
            <div className='relative'>
              <div className='absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none'>
                <svg className='w-4 h-4 text-gray-400' aria-hidden='true' xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'>
                  <path stroke='currentColor' d='m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z' />
                </svg>
              </div>
              <input type='search' id='default-search' className='block w-full p-2 ps-10 text-sm border rounded-lg  bg-dark-300 border-gray-600 placeholder-gray-400 text-gray-300 focus:ring-gray-500 focus:border-gray-500' placeholder='Search' required />
            </div>
          </form>

        </div>
        <div className='md:hidden'>
          <button onClick={() => setIsOpen(!isOpen)}>
            <FaBars className='text-gray-400' />
          </button>
        </div>
        <div className={`md:flex gap-1 text-clr-secundary font-semibold ${isOpen ? 'flex-col' : 'hidden'} md:flex-row items-center`}>
          <div className='flex gap-4 justify-center items-center'>
            <button className='hover:text-primary-100'>
              Framework
            </button>
            <button className='hover:text-primary-100'>
              Packages
            </button>
            <button className='hover:text-primary-100'>
              Version
            </button>
          </div>

          <div className='flex gap-2 px-3 justify-center items-center'>
            <a href='https://github.com/Sleon4' target='_blank' >
              <FaGithub size={'1.5em'} className='hover:text-primary-100' />
            </a>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default NavbarSecundary

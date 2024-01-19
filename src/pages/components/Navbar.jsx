import { AiOutlineMail } from 'react-icons/ai'
import { FaGithub, FaYoutube, FaBars } from 'react-icons/fa'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import logo from './../../assets/img/icon_white_bg.png'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <nav className="bg-dark-100 flex items-center justify-between px-4 py-2 lg:py-4 lg:px-20">
        <div className="px-2">
          <Link to='/' >
            <img src={logo} width={64} height={64} />
          </Link>
        </div>
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)}>
            <FaBars className="text-gray-400" />
          </button>
        </div>
        <div className={`md:flex gap-1 text-clr-secundary font-semibold ${isOpen ? 'flex-col' : 'hidden'} md:flex-row items-center`}>
          <div className='flex gap-2 justify-center items-center'>
            <button className='underline underline-offset-2 decoration-primary-100 hover:decoration-gray-100'>
              Framework
            </button>
            <button className='underline underline-offset-2 decoration-primary-100 hover:decoration-gray-100'>
              Packages
            </button>
          </div>

          <div className='flex gap-2 px-3 justify-center items-center'>
            <a href="https://www.youtube.com/channel/UCJBOJVKok44BZt0kKlBeZyA" target='_blank' >
              <FaYoutube size={"1.5em"} className='hover:text-primary-100' />
            </a>
            <a href="https://github.com/Sleon4" target='_blank' >
              <FaGithub size={"1.5em"} className='hover:text-primary-100' />
            </a>
            <a href="mailto:sergioleon4004@hotmail.com" target='_blank'>
              <AiOutlineMail size={"1.5em"} className='hover:text-primary-100' />
            </a>
          </div>
        </div>
      </nav>
    </>
  )
}

export default Navbar;

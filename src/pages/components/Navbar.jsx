import { FaGithub, FaBars } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import logo from './../../assets/img/icon_white_bg.png'

const Navbar = () => {
  return (
    <>
      <nav className="bg-dark-100 border-gray-200 px-4 py-2 lg:py-4 lg:px-20">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <Link to='/' className="flex items-center space-x-3 rtl:space-x-reverse" >
            <img src={logo} width={64} height={64} alt="lion-logo" />
          </Link>
          <button data-collapse-toggle="navbar-default" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden focus:outline-none focus:ring-2 focus:ring-dark-300 " aria-controls="navbar-default" aria-expanded="false">
            <span className="sr-only">Open main menu</span>
            <FaBars className="text-gray-400" />
          </button>
          <div className="hidden w-full md:block md:w-auto" id="navbar-default">
            <ul className="font-medium flex flex-col p-4 md:p-0 mt-4  rounded-lg bg-dark-100 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 ">
              <li>
                <a href="#" className="block py-2 px-3 text-white rounded hover:bg-dark-300 hover:text-primary-100 md:hover:bg-transparent md:border-0 md:p-0 ">Framework</a>
              </li>
              <li>
                <a href="#" className="block py-2 px-3 text-white rounded hover:bg-dark-300 hover:text-primary-100  md:hover:bg-transparent md:border-0 md:p-0 ">Packages</a>
              </li>
              <li>
                <a href="https://github.com/Sleon4" target='_blank'
                  className="block py-2 px-3 text-gray-900 rounded hover:bg-dark-300 md:hover:bg-transparent md:border-0 md:p-0" >
                  <FaGithub size={"1.5em"} className='hover:text-primary-100 text-white' />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  )
}

export default Navbar;




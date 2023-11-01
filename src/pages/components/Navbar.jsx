import React from 'react'
import { AiOutlineMail } from "react-icons/ai";
import { FaGithub, FaYoutube } from "react-icons/fa"
import logo from "./../../assets/img/Lion_black_icon_long.png";

const Navbar = () => {
  return (
    <>
      <nav className="bg-dark-100 py-4 px-20 flex items-center justify-between">
        <div className="px-2">
          <img src={logo} width={154} height={56} />
        </div>
        <div className="flex gap-2 text-clr-secundary font-semibold ">
          <div className='flex gap-2 justify-center items-center'>
            <button className='underline underline-offset-2 decoration-primary-100 hover:decoration-gray-100'>Framework</button>
            <button className='underline underline-offset-2 decoration-primary-100 hover:decoration-gray-100'>Packages</button>
          </div>

          <div className='flex gap-2 justify-center items-center'>
            <a href="https://www.youtube.com/channel/UCJBOJVKok44BZt0kKlBeZyA" target='_blank' >
              <FaYoutube size={"1.5em"} />
            </a>
            <a href="https://github.com/Sleon4" target='_blank' >
              <FaGithub size={"1.5em"} />
            </a>
            <a href="mailto:sergioleon4004@hotmail.com" target='_blank'>
              <AiOutlineMail size={"1.5em"} />
            </a>
          </div>
        </div>
      </nav>
    </>
  )
}

export default Navbar

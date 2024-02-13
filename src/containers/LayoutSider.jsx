import React from 'react'
import { Outlet as Page } from 'react-router-dom'
import { docs } from '../hooks/Tools/Framework/framework-v1.json'
import Sidebar from '../pages/components/Sidebar'
import NavbarSecundary from '../pages/components/NavbarSecundary'

const LayoutSider = () => {
  return (
    <div className='flex'>
      <Sidebar docs={docs} />
      <div className='flex flex-col w-full'>
        <div className='md:ml-64 mt-14 md:mt-24'>
          <NavbarSecundary />
        </div>
        <div className='md:ml-64'>
          <Page />
        </div>
      </div>
    </div>
  )
}

export default LayoutSider

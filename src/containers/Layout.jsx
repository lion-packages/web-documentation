import { Outlet as Page } from 'react-router-dom'
import FooterNavigation from '../pages/components/FooterNavigation'
import Navbar from '../pages/components/Navbar'

const Layout = () => {
  return (
    <div className=''>
      <Navbar />
        <Page />
      <FooterNavigation />
    </div>
  )
}

export default Layout

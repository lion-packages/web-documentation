import FooterNavigation from "../pages/components/FooterNavigation"
import Navbar from "../pages/components/Navbar"

const Layout = ({ children }) => {
  return (
    <div className=''>
      <Navbar />
      {children}
      <FooterNavigation />  
    </div>
  )
}

export default Layout

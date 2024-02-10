import { Link } from 'react-router-dom'
import logo from './../../assets/img/icon_white_bg.png'
import { useContentLoader } from '../../hooks/useContentLoader'

const Sidebar = () => {
  const data = [
    'manzana',
    'pera',
    'freza'
  ]
  const titlesArray = data.map(item => item)
  return (
    <aside className='fixed top-0 left-0 z-40 w-64 h-screen pt-5 transition-transform -translate-x-full border-r sm:translate-x-0 bg-dark-100 border-gray-700'
      aria-label='Sidebar'>
      <div className='px-6 pb-3 border-b border-dark-300'>
        <Link to={'/'} className='flex gap-1 items-center m-0 p-0'>
          <img src={logo} width={36} height={36} />
          <span className='font-semibold text-white'>Lion-Framework</span>
        </Link>
      </div>
      <div className='h-full pt-2 px-3 pb-4 overflow-y-auto  bg-dark-100'>
        <ul className='space-y-2 text-sm'>
          {
            titlesArray.map((title, index) => (
              <li key={index}>
                <Link to={`/${title.toLowerCase()}`} className='flex items-center p-2 rounded-lg text-white hover:bg-dark-300'>
                  <span className='ml-3'>{title}</span>
                </Link>
              </li>
            ))
          }
        </ul>
      </div>
    </aside>
  )
}

export default Sidebar

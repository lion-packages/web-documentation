import CardInfo from './components/CardInfo'
import { infoDataCart } from '../infoData'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div>
      <section className='flex flex-col gap-4 items-center'>
        <div className='flex flex-col text-3xl lg:text-6xl italic tracking-tighter text-center opacity-100 font-medium text-white'>
          <span className='p-2 text-title-principal '>Boost your PHP development</span>
          <span className='p-2 text-title-principal '>With the Lion-Framework</span>
        </div>
        <p className='text-clr-secundary text-lg text-center max-w-prose '>
          Can also serve as an API backend for a JavaScript single page application or a mobile application.
        </p>

        <div className='flex gap-2'>
          <Link to={'guide'} className="text-white bg-primary-300 hover:bg-primary-100 focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-xs md:text-base px-5 py-2.5 mr-2 mb-2">Get Started</Link>

          <Link to={'library'} className="text-white bg-accent-200 hover:bg-accent-100 focus:ring-4 focus:ring-accent-200  font-medium rounded-lg text-xs md:text-base px-5 py-2.5 mr-2 mb-2 focus:outline-none ">Packges</Link>
        </div>
      </section>

      <section className='w-full h-full bg-gradient-to-r from-dark-100 via-dark-300 to-dark-100'>
        <article className='flex flex-col lg:grid lg:grid-cols-3 items-center m-16 p-8 gap-5'>
          {infoDataCart.map((data, index) => <CardInfo key={index} {...data} />)}
        </article>
      </section>
    </div>

  )
}

export default Home


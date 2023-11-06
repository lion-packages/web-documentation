import FooterNavigation from './components/FooterNavigation';
import Navbar from './components/Navbar';

function NotFound() {
  return (
    <>
      <Navbar />
      <section class="bg-dark-100">
        <div class="py-8 px-4 mx-auto max-w-screen-xl lg:py-4 lg:px-6">
          <div class="flex flex-col items-center  mx-auto max-w-screen-sm text-center">
            <h1 class="mb-4 text-4xl tracking-tight font-extrabold lg:text-6xl text-primary-100">
              404 Not Found
            </h1>
            <img className='w-full lg:w-3/5' src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/404/404-computer.svg" alt="page not found" />
            <p class="mb-4 text-3xl tracking-tight font-bold md:text-4xl text-white">
              Whoops! That page doesn’t exist.
            </p>
            <p class="mb-4 text-lg font-light text-gray-400">
              Sorry, we can't find that page. You'll find lots to explore on the home page.
            </p>
          </div>
        </div>
        <FooterNavigation />
      </section>
    </>
  );
}

export default NotFound;

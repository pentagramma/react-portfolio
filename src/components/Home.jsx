import React from 'react';
import HeroImage from '../assets/heroImage.png';
import { MdKeyboardArrowRight } from "react-icons/md";

const links = [
  { id: 1, link: 'home' },
  { id: 2, link: 'about' },
  { id: 3, link: 'portfolio' },
  { id: 4, link: 'experience' },
  { id: 5, link: 'contact' },
];

const Home = () => {
  const scrollToPortfolio = () => {
    const portfolioSection = document.querySelector('[name="portfolio"]');
    if (portfolioSection) {
      const offset = 60; // Adjust this value according to your needs
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = portfolioSection.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div name="home" className='h-screen w-full bg-gradient-to-b from-black via-black to-gray-800'>
      <div className='max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row'>
        <div className='flex flex-col justify-center h-full'>
          <h2 className='text-4xl sm:text-6xl font-bold text-white'>
            I'm a Full Stack Developer
          </h2>
          <p className='text-gray-500 py-4 max-w-md text-2xl'>
            Hey! I'm Sarthak. I write code and I love coffee!
          </p>
          <div>
            {/* Call scrollToPortfolio function on button click */}
            <button onClick={scrollToPortfolio} className='group text-blue w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-yellow-400 to-yellow-100 font-bold hover:scale-105 duration-500 hover:from-indigo-400 hover:to-indigo-400 hover:text-white'>
              Portfolio
              <span className='group-hover:rotate-90 duration-300'>
                <MdKeyboardArrowRight size={25} className='ml-3' />
              </span>
            </button>
          </div>
        </div>
        <div>
          <img src={HeroImage} alt="my profile" className='rounded-2xl mx-auto w-2/3 md:w-full' />
        </div>
      </div>
    </div>
  );
}

export default Home;

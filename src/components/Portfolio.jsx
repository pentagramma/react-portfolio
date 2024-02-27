import React from 'react';
import myPortfolio from '../assets/portfolio/myPortfolio.png'
import amazonClone from '../assets/portfolio/amazonClone.jpg'
import todoList from '../assets/portfolio/todoList.jpg'
import newsWebsite from '../assets/portfolio/newsWebsite.png'
import reactParallax from '../assets/portfolio/reactParallax.jpg'
import reactWeather from '../assets/portfolio/reactWeather.jpg'

const Portfolio = () => {

  const portfolios = [
    {
      id: 1,
      src: amazonClone
    },
    {
      id: 2,
      src: myPortfolio
    },
    {
      id: 3,
      src: todoList
    },
    {
      id: 4,
      src: newsWebsite
    },
    {
      id: 5,
      src: reactParallax
    },
    {
      id: 6,
      src: reactWeather
    },

  ]

  return (
    <div name = "portfolio" className='bg-gradient-to-b from-black to-gray-800 text-gray-400 md:h-screen'>

      <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
        <div className='pb-8'>
          <p className='text-4xl font-bold inline border-b-4 border-yellow-200'>
            Portfolio
            </p>
          <p className='py-6'>Check out some of my personal projects!</p>
        </div>

       

        <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0'>
        {
          portfolios.map(({id,src}) => (
            <div key={id} className='rounded-lg hover:scale-110 duration-200 border-solid border-2 hover:border-yellow-500 hover:border-double'>
            <img src= {src} alt="" className='rounded-md ' />
            <div className='flex items-center justify-center'>
              <button className='text-white bg-yellow hover:outline-yellow-500 w-1/2 px-4 py-3 m-4 hover:border border hover:border-yellow-500 hover:scale-110 duration-200 hover:bg-black hover:text-yellow-500'>Demo</button>
              <button className='text-white bg-yellow hover:outline-yellow-500 w-1/2 px-4 py-3 m-4 hover:border border hover:border-yellow-500 hover:scale-110 duration-200 hover:bg-black hover:text-yellow-500'>Code</button>
            </div>
          </div>

          ))
        }

          
        </div>
      </div>
    </div>
  )
}

export default Portfolio

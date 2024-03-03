import React from 'react';
import myPortfolio from '../assets/portfolio/myPortfolio.png'
import amazonClone from '../assets/portfolio/amazonClone.jpg'
import todoList from '../assets/portfolio/todoList.jpg'
import newsWebsite from '../assets/portfolio/newsWebsite.png'
import texteditor from '../assets/portfolio/texteditor.png'
import rps from '../assets/portfolio/rps.jpeg'

const Portfolio = () => {

  const portfolios = [
    {
      id: 1,
      src: amazonClone,
      repoLink: 'https://github.com/pentagramma/Amazon-clone',
      demoLink: 'https://sarthaks-amazonclone.netlify.app/',
    },
    {
      id: 2,
      src: myPortfolio,
      repoLink: 'https://github.com/pentagramma/react-portfolio',
      demoLink: 'https://portfolio-krsarthak.netlify.app/',
    },
    {
      id: 3,
      src: todoList,
      repoLink: 'https://github.com/pentagramma/todoList',
      demoLink: 'https://sarthak-todolist.netlify.app/',
    },
    {
      id: 4,
      src: newsWebsite,
      repoLink: 'https://github.com/pentagramma/Real-time-news',
      demoLink: 'https://drive.google.com/file/d/1Vnu5Il8o8tdNWy7K40MAMJr2Z9isonyA/view?usp=drive_link',
    },
    {
      id: 5,
      src: texteditor,
      repoLink: 'https://github.com/pentagramma/text-editor',
      demoLink: 'https://sarthaks-text-editor.netlify.app/',
    },
    {
      id: 6,
      src: rps,
      repoLink: 'https://github.com/pentagramma/Rock-Paper-Scissors',
      demoLink: 'https://sarthak-rps-vanilla.netlify.app/',
    },

  ]

  return (
    <div name="portfolio" className='bg-gradient-to-b from-black to-gray-800 text-gray-400 md:h-fit'>

      <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
        <div className='pb-6'>
          <p className='text-4xl font-bold inline border-b-4 border-yellow-200'>
            Portfolio
          </p>
          <p className='py-4'>Check out some of my personal projects!</p>
        </div>



        <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-6 px-12 sm:px-0'>
          {
            portfolios.map(({ id, src, repoLink, demoLink }) => (
              <div key={id} className='rounded-lg hover:scale-110 duration-200 border-solid border-2 hover:border-yellow-500 hover:border-double'>
                <img src={src} alt="" className='rounded-md' />
                <div className='flex items-center justify-center'>
                  <button className='text-white bg-yellow hover:outline-yellow-500 w-1/2 px-4 py-3 m-4 hover:border border hover:border-yellow-500 hover:scale-110 duration-200 hover:bg-black hover:text-yellow-500' onClick={() => window.open(demoLink, '_blank')}>Demo</button>
                  <button
                    className='text-white bg-yellow hover:outline-yellow-500 w-1/2 px-4 py-3 m-4 hover:border border hover:border-yellow-500 hover:scale-110 duration-200 hover:bg-black hover:text-yellow-500'
                    onClick={() => window.open(repoLink, '_blank')}
                  >
                    Code
                  </button>
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

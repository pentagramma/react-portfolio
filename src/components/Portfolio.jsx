import React from 'react';
import myPortfolio from '../assets/portfolio/myPortfolio.png'
import amazonClone from '../assets/portfolio/amazonClone.jpg'
import todoList from '../assets/portfolio/todoList.jpg'
import newsWebsite from '../assets/portfolio/newsWebsite.png'
import texteditor from '../assets/portfolio/texteditor.png'
import rps from '../assets/portfolio/rps.jpeg'
import quizUp from '../assets/portfolio/quizUp.jpeg'
import eCom from '../assets/portfolio/ecommerce.jpeg'
import spotify from '../assets/portfolio/spotify.jpeg'
import athlete from '../assets/portfolio/8lete.png'
import logistics from '../assets/portfolio/logistics.jpg'

const Portfolio = () => {

  const portfolios = [
    {
      id: 1,
      title: 'Amazon Clone',
      src: amazonClone,
      repoLink: 'https://github.com/pentagramma/Amazon-clone',
      demoLink: 'https://sarthaks-amazonclone.netlify.app/',
    },
    {
      id: 2,
      title: 'My Portfolio',
      src: myPortfolio,
      repoLink: 'https://github.com/pentagramma/react-portfolio',
      demoLink: 'https://portfolio-krsarthak.netlify.app/',
    },
    {
      id: 3,
      title: 'Logistic dashboard',
      src: logistics,
      repoLink: 'https://github.com/Traydo-Logistics/saas-frontend',
      demoLink: 'https://development.frayto.com',
    },
    {
      id: 4,
      title: 'Real-time News',
      src: newsWebsite,
      repoLink: 'https://github.com/pentagramma/Real-time-news',
      demoLink: 'https://drive.google.com/file/d/1Vnu5Il8o8tdNWy7K40MAMJr2Z9isonyA/view?usp=drive_link',
    },
    {
      id: 5,
      title: 'Text Editor',
      src: texteditor,
      repoLink: 'https://github.com/pentagramma/text-editor',
      demoLink: 'https://sarthaks-text-editor.netlify.app/',
    },
    {
      id: 6,
      title: '8lete landing page',
      src: athlete,
      repoLink: 'https://github.com/8lete/8lete-xyz',
      demoLink: 'https://8lete.xyz/',
    },
    // {
    //   id: 6,
    //   src: rps,
    //   repoLink: 'https://github.com/pentagramma/ThunderConcept',
    //   demoLink: 'https://thunderconcept.netlify.app/',
    // },
    {
      id: 7,
      title: 'QuizUp',
      src: quizUp,
      repoLink: 'https://github.com/pentagramma/QuizUp',
      demoLink: 'https://stellar-pudding-08ab00.netlify.app/',
    },
    {
      id: 8,
      title: 'Small Spotify clone',
      src: spotify,
      repoLink: 'https://github.com/pentagramma/samespace-spotify',
      demoLink:  'https://samespace-spotify-assessment.netlify.app/',
    },
    {
      id: 9,
      title: 'Small E-Commerce clone',
      src: eCom,
      repoLink: 'https://github.com/pentagramma/homble-frontend-assessment',
      demoLink: 'https://hombleassignment.netlify.app',
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
            portfolios.map(({ id, title, src, repoLink, demoLink }) => (
              <div key={id} className='rounded-lg hover:scale-110 duration-200 border-solid border-2 hover:border-yellow-500 hover:border-double object-contain'>
                <h3 className='text-white text-center text-lg font-semibold py-3 px-2'>{title}</h3>
                <img src={src} alt="" className='rounded-md ' />
                <div className='flex items-center justify-center'>
                  <button className='text-white bg-yellow hover:outline-yellow-500 w-1/2 px-4 py-3 m-4 hover:border border hover:border-yellow-500  hover:bg-black hover:text-yellow-500 duration-500 rounded-md' onClick={() => window.open(demoLink, '_blank')}>Demo</button>
                  <button
                    className='text-white bg-yellow hover:outline-yellow-500 w-1/2 px-4 py-3 m-4 hover:border border hover:border-yellow-500 duration-500 hover:bg-black hover:text-yellow-500 rounded-md'
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

import React from 'react'

import html from '../assets/html.png'
import css from '../assets/css.png'
import javascript from '../assets/javascript.png'
import reactImage from '../assets/react.png'
import tailwind from '../assets/tailwind.png'
import nodeJS from '../assets/node.png'
import git from '../assets/git.png'
import github from '../assets/github.png'
import express from '../assets/expressJS.png'



const Experience = () => {

  const techs = [
    {
      id: 1,
      source: html,
      title: 'HTML',
      style: 'shadow-orange-200 hover:shadow-orange-500',
      link: 'https://html.com/document/'
    },
    {
      id: 2,
      source: css,
      title: 'CSS',
      style: 'shadow-blue-200 hover:shadow-blue-500',
      link: 'https://css3.com/'
    },
    {
      id: 3,
      source: javascript,
      title: 'JavaScript',
      style: 'shadow-yellow-200 hover:shadow-yellow-500',
      link: 'https://www.javascript.com/'
    },
    {
      id: 4,
      source: reactImage,
      title: 'ReactJS',
      style: 'shadow-blue-300 hover:shadow-blue-600',
      link: 'https://react.dev/'
    },
    {
      id: 5,
      source: tailwind,
      title: 'TailwindCSS',
      style: 'shadow-sky-200 hover:shadow-sky-400',
      link: 'https://tailwindcss.com/'
    },
    {
      id: 6,
      source: nodeJS,
      title: 'NodeJS',
      style: 'shadow-lime-200 hover:shadow-lime-500',
      link: 'https://nodejs.org/en'
    },
    {
      id: 7,
      source: git,
      title: 'Git',
      style: 'shadow-red-300 hover:shadow-red-600',
      link: 'https://git-scm.com/'
    },
    {
      id: 8,
      source: github,
      title: 'GitHub',
      style: 'shadow-stone-400 hover:shadow-white',
      link: 'https://github.com/'
    },
    {
      id: 98,
      source: express,
      title: 'ExpressJs',
      style: 'shadow-stone-400 hover:shadow-white',
      link: 'https://github.com/'
    },

  ]
  return (
    <div name='experience' className='bg-gradient-to-b from-gray-800 to-black w-full h-fit pt-3 '>

      <div className='max-w-screen-lg mx-auto pb-5 p-4 flex flex-col justify-center w-full h-full text-gray-400'>
        <div>
          <p className='text-4xl font-bold inline border-b-4 border-yellow-200'>Experience</p>
          <p className='py-4'>These are the technologies I have worked with :</p>
        </div>
        <div className='w-full grid grid-cols-2 sm:grid-cols-3 gap-6 text-center py-8 px-12 sm:px-0'>

          {
            techs.map(({ id, source, title, style, link }) => (
              <a key={id} href={link} target="_blank" rel="noopener noreferrer">
                <div
                  className={`shadow-md hover:scale-105 duration-500 py-4 rounded-lg ${style}`}>
                  <img src={source} alt="" className='w-20 mx-auto' />
                  <p className='mt-4'>{title}</p>
                </div>
              </a>
            ))
          }


        </div>
      </div>
    </div>
  )
}

export default Experience

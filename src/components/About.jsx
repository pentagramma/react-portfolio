import React from 'react'

const About = () => {
  return (
    <div name='about'
      className='className= h-screen w-full bg-gradient-to-b from-gray-800 to-black text-gray-400'
    >

      <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
        <div className='pb-6'>
          <p className='text-4xl font-bold inline border-b-4 border-yellow-200'>
            About
          </p>
        </div>

        <p className='text-xl mt-10'>

          A dedicated web developer passionate about React.js, Node.js, and Tailwind CSS, showcasing unwavering determination and consistency. Committed to excellence, possessing good problem-solving skills, A thirst for learning, adaptability, and effective communication. Eager to contribute, fueled by creativity and a drive for continuous improvement, A continuous learner, I stay abreast of industry trends and emerging technologies to ensure cutting-edge development. Let's connect and collaborate to bring your web projects to life!
        </p>
        <br />

        <p className='text-xl'>

          A dedicated web developer proficient in React.js, Node.js, and Tailwind CSS, driven by determination and consistency. Apart from coding, I indulge in sports like football and badminton, seek inspiration from books, and find joy in gaming with Valorant, CS:GO, and Dota 2. Passionate about competitive gaming, fueled by coffee for excellence.
        </p>
      </div>

    </div>
  )
}

export default About;


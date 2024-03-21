import React, { useState, useEffect } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { Link as ScrollLink } from 'react-scroll';
import { MdOutlineMail } from "react-icons/md";
import { FaLinkedin } from "react-icons/fa";
import { FaRegIdCard } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

const TypingEffect = ({ text }) => {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showCursor, setShowCursor] = useState(true);

  useEffect(() => {
    let typingInterval = null;

    const startTyping = () => {
      typingInterval = setInterval(() => {
        if (currentIndex <= text.length) {
          setDisplayText(text.substring(0, currentIndex));
          setCurrentIndex(currentIndex + 1);
        } else {
          clearInterval(typingInterval);
          setTimeout(() => {
            setCurrentIndex(0);
            setDisplayText('');
          }, 3500); // Repeat every 3.5 seconds
        }
      }, 400); // Adjust typing speed (200 milliseconds)
    };

    startTyping();

    const cursorInterval = setInterval(() => {
      setShowCursor((prevShowCursor) => !prevShowCursor);
    }, 300); // Cursor blinking interval

    return () => {
      clearInterval(typingInterval);
      clearInterval(cursorInterval);
    };
  }, [text, currentIndex]);

  return (
    <span>
      {displayText}
      {showCursor && <span className="cursor">_</span>}
    </span>
  );
};

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const links = [
    { id: 1, link: 'home' },
    { id: 2, link: 'about' },
    { id: 3, link: 'portfolio' },
    { id: 4, link: 'experience' },
    { id: 5, link: 'contact' },
  ];

  const links1 = [
    { id1: 1, link1: <a href="https://www.linkedin.com/in/sarthak-kumar-034276258/" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a> },
    {
      id1: 2, link1: (
        <a href="/resume.pdf" download>
          <FaRegIdCard />
        </a>
      )
    },
    { id1: 3, link1: <a href="https://github.com/pentagramma" target="_blank" rel="noopener noreferrer"><FaGithub /></a> },
    { id1: 4, link1: <a href="mailto:krsarthak.17@gmail.com"><MdOutlineMail /></a> },
  ];


  const toggleNav = () => {
    setNav(!nav);
  };

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
      if (window.innerWidth > 768) {
        setNav(false);
      }
    };

    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className='flex justify-between items-center w-full h-20 text-white fixed bg-black px-4 z-50'>
      <div>
        <h1 className='text-5xl font-signature ml-2 text-violet-300'>
          <TypingEffect text="< सार्थक/>" />
        </h1>
      </div>
      <div className='md:hidden cursor-pointer pr-3 z-10 text-gray-400' onClick={toggleNav}>
        {nav ? <FaTimes size={23} /> : <FaBars size={25} />}
      </div>

      {nav && (
        <ul className='flex flex-col absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-black via-black to-gray-800 text-gray-500'>
          {/* Vertical column for links */}
          <div className="flex flex-col justify-center items-center mt-[100px]">
            {links.map(({ id, link }) => (
              <li key={id} className='px-4 cursor-pointer capitalize py-6 text-4xl text-gray-500 hover:scale-110 duration-200'>
                <ScrollLink
                  to={link}
                  smooth
                  duration={900}
                  offset={-59}
                  onClick={toggleNav}
                >
                  {link}
                </ScrollLink>
              </li>
            ))}
          </div>

          {/* Horizontal row for links1 */}
          <div className="flex justify-around items-center mt-[80px]">
            {links1.map(({ id1, link1 }) => (
              <li key={id1} className='px-4 cursor-pointer capitalize py-6 text-4xl text-gray-500 hover:scale-110 duration-200'>
                {link1}
              </li>
            ))}
          </div>
        </ul>
      )}

      <ul className='hidden md:flex'>
        {links.map(({ id, link }) => (
          <li key={id} className='px-4 cursor-pointer capitalize font-medium text-gray-500 hover:scale-110 duration-200 hover:text-yellow-600'>
            <ScrollLink
              to={link}
              smooth
              duration={900}
              offset={-59}
            >
              {link}
            </ScrollLink>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Navbar;

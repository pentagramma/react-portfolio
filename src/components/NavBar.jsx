import React, { useState, useEffect } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { Link as ScrollLink } from 'react-scroll';

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
          }, 3500); // Repeat every 4 seconds
        }
      }, 200); // Adjust typing speed (decreased to 200 milliseconds)
    };

    startTyping();

    const cursorInterval = setInterval(() => {
      setShowCursor((prevShowCursor) => !prevShowCursor);
    }, 500); // Cursor blinking interval

    return () => {
      clearInterval(typingInterval);
      clearInterval(cursorInterval);
    };
  }, [text, currentIndex]);

  return (
    <span>
      {displayText}
      {showCursor && <span className="cursor">?</span>}
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
          <TypingEffect text="</> सार्थक" />
        </h1>
      </div>
      {windowWidth <= 768 && (
        <div
          onClick={toggleNav}
          className='cursor-pointer pr-3 z-10 text-gray-400 md:hidden'
        >
          {nav ? <FaTimes size={23} /> : <FaBars size={25} />}
        </div>
      )}

      {nav && (
        <ul className='flex flex-col justify-center items-center absolute top-0 left-0 w-full h-fit bg-gradient-to-b from-black via-black to-gray-800 text-gray-500'>
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

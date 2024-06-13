import React from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { IoMdMail } from "react-icons/io";
import { BsFillPersonLinesFill } from 'react-icons/bs';


const SocialLinks = () => {

  const links = [
    {
      id: 1,
      child: (
        <>
          LinkedIn <FaLinkedin size={27} />
        </>
      ),
      href: 'https://www.linkedin.com/in/sarthak-kumar-034276258/',
      style: 'rounded-br-md rounded-tr-md',
    },
    {
      id: 2,
      child: (
        <>
          GitHub <FaGithub size={27} />
        </>
      ),
      href: 'https://github.com/pentagramma',
      style: 'rounded-br-md rounded-tr-md',

    },
    {
      id: 3,
      child: (
        <>
          Mail <IoMdMail size={27} />
        </>
      ),
      href: 'mailto:krsarthak.17@gmail.com',
      style: 'rounded-br-md rounded-tr-md',

    },
    {
      id: 4,
      child: (
        <>
          Resume <BsFillPersonLinesFill size={27} />
        </>
      ),
      href: "/Sarthak's-Resume.pdf",
      style: 'rounded-br-md rounded-tr-md',
      download: true,
    },
  ];

  return (
    <div className='hidden lg:flex flex-col top-[30%] left-0 fixed'>
      <ul>

        {links.map(({ child, id, href, style, download }) => (
          <li key={id} className={'flex justify-between items-center w-40 h-14 px-4 bg-gray-500 ml-[-100px] hover:ml-[-10px] hover:rounded-md my-1 duration-500' + " " + style}>
            <a href={href}
              className='flex justify-between items-center w-full text-white'
              download={download}
              target='_blank'
            >
              {child}
            </a>
          </li>
        ))}

      </ul>
    </div>
  );
};

export default SocialLinks;





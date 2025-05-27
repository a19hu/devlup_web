import React from 'react'
import { MdEmail } from "react-icons/md";
import { FaFacebook } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import Link from 'next/link';
export default function Footer() {
  return (
    <div className='p-5 flex justify-center'>
      <div className='flex-col flex items-center gap-3'>
      <div className='flex flex-row gap-2'>
        <Link href="mailto:devluplabs@iitj.ac.in" className='text-gray-900 hover:text-gray-600 transition duration-300'>
          <MdEmail size={30} />
        </Link>
        <Link href="https://github.com/devlup-labs" target="_blank" rel="noopener noreferrer" className='text-gray-900 hover:text-gray-600 transition duration-300'>
          <FaGithub size={30} />
        </Link>
        <Link href="https://linkedin.com/company/devlup-labs" target="_blank" rel="noopener noreferrer" className='text-gray-900 hover:text-gray-600 transition duration-300'>
          <FaLinkedin size={30} />
        </Link>
        {/* <FaFacebook size={30} />
        <FaInstagram size={30} /> */}
        </div>
        <div>
        © Copyright 2024 Devlup Labs 
        </div>
      </div>
      
    </div>
  )
}

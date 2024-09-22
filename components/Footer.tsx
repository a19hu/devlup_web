import React from 'react'
import { MdEmail } from "react-icons/md";
import { FaFacebook } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

export default function Footer() {
  return (
    <div className='p-5 flex justify-center'>
      <div className='flex-col flex items-center gap-3'>
      <div className='flex flex-row gap-2'>
        <MdEmail size={30} />
        <FaFacebook size={30} />
        <FaInstagram size={30} />
        <FaGithub size={30} />
        <FaLinkedin size={30} />
        </div>
        <div>
        © Copyright 2024 Devlup Labs 
        </div>
      </div>
      
    </div>
  )
}

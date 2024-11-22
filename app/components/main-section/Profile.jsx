'use client'

import React from 'react'
import { Linkedin, Github, Mail, Download  } from 'lucide-react'

const Profile = () => {  
    const downloadCV = () => {
    const link = document.createElement('a');
    link.href = '/asset/NatawatCV.pdf'
    link.download = 'NatawatCV'
    document.body.appendChild(link)
    link.click();
    document.body.removeChild(link)
  }
  return (
    <div className='w-full mt-[45px] grid justify-items-stretch xl:my-[200px] xl:flex xl:flex-row-reverse xl:items-end xl:justify-between'>  
      <img className='rounded-[12px] origin-top-left rotate-12 justify-self-end xl:w-[280px] md:w-[250px] w-[120px]' src='/asset/natawat.png' alt="" />    
      <div className='flex flex-col gap-2 dark:text-[#FFFF]'>            
        <p className='xl:text-[64px] md:text-[44px] text-[24px] font-bold'>NATAWAT <br /> CHOTIPONGCHAOWALIT</p>
        <p className='text-[12px] md:text-[20px] xl:text-[24px] italic'>Passionate about creating great experiences as a Software Developer.</p>
        <div className='flex items-center gap-2 md:gap-3'>
          <a href="https://www.linkedin.com/in/natawat-chotipongchaowalit-911705244/" target="_blank" ><Linkedin className='w-[20px] md:w-[32px] xl:w-[32px]'/></a> 
          <a href="https://github.com/NatawatDev" target="_blank" ><Github className='w-[20px] md:w-[32px] xl:w-[32px]'/></a>  
          <button onClick={() => window.location.href = 'mailto:natawat.cho@gmail.com'}><Mail className='w-[20px] md:w-[32px] xl:w-[32px]'/></button>     
          <button onClick={()=> downloadCV()} className="text-center bg-white p-2 md:py-1 rounded-[4px] text-black text-[10px] md:text-[12px] border-2 ">
            Download CV  
          </button>                     
        </div>
        
      </div>      
    </div>
  )
}

export default Profile
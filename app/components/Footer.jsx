import React from 'react'
import { PhoneCall, Mail } from 'lucide-react'

const Footer = () => {
  return (
    <div className='w-full flex justify-between pt-[200px] md:flex-col xl:flex-row'>
      <p className='dark:text-[#FFFF]/60 text-[#000000]/40 text-[80px] hidden md:inline xl:inline md:mb-[200px]'>LET’S WORK <br /> TOGETHER</p>
      <div className='flex flex-col gap-2 right-0'>
        <div className='dark:text-[#FFFF] w-full text-[24px]'>
          <p className='text-[24px] md:text-[32px] xl:text-[32px] mb-[32px] md:mb-0 xl:mb-0'>Thank you for watching my portfolio.</p>
          <div className='text-[12px] md:text-[24px] flex gap-2 items-center'>
            <Mail className='w-[16px] md:w-[32px]'/>
            <p>: natawat.cho@gmail.com</p>
          </div>
          <div className='text-[12px] md:text-[24px] flex gap-2 items-center'>
            <PhoneCall className='w-[16px] md:w-[32px]' />        
            <p>: (+66)95-725-1892</p>
          </div>
        </div>
        
        <div className='flex justify-end'>
          <button 
            className='text-[12px] md:text-[20px] text-center bg-[#FFFFFF] text-balck py-2 px-4 rounded-[8px]'
            onClick={() => window.location.href = 'mailto:natawat.cho@gmail.com'}
          >
            Talk with me
          </button>
        </div>
      </div>  
    </div>
  )
}

export default Footer
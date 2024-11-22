import React from 'react'

const CardSoftSkill = ({icon, title, detail }) => {
  return (
    <div className='w-full h-full p-5 bg-[#FFFF] rounded-[6px] text-black dark:bg-[#979797]/20 dark:text-[#FFFF] cursor-pointer dark:hover:bg-[#FFFF]/15'>
      <div className='flex flex-col gap-[32px] xl:gap-[64px] md:gap-[64px]'>
        <div className='w-[24px] xl:w-[40px]'>{icon}</div>
        <div>
          <p className='text-[16px] md:text-[20px] xl:text-[40px] font-bold'>{title}</p>
          <p className='text-[12px] md:text-[14px] xl:text-[24px] pt-[12px] xl:pt-[50px] '>{detail}</p>
        </div>        
      </div>      
    </div>
  )
}

export default CardSoftSkill
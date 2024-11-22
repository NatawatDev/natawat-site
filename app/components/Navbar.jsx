'use client'

import React, { useState, useEffect } from 'react'
import { Sun, Moon } from 'lucide-react'

const Navbar = () => {
  const [theme, setTheme] = useState('dark')

  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark')
      localStorage.setItem('theme', 'dark')
    } else {
      document.documentElement.classList.remove('dark')
      localStorage.setItem('theme', 'light')
    }
  }, [theme])

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'dark' ? 'light' : 'dark'))
  }
  
  return (
    <div className='flex justify-between'>
      <div className='flex items-center gap-3'> 
        <p className='dark:bg-[#FFFF] dark:text-black text-[#FFFF] bg-black p-1 rounded-[4px] font-bold text-[8px] md:text-[12px] xl:text-[16px]'>DEV</p>
        <p className='dark:text-[#FFFF] font-semibold text-[16px] md:text-[24px] xl:text-[32px]'>Software Developer</p>
      </div>
      <button className='flex justify-center items-center cursor-pointer dark:text-[#FFFF]' onClick={toggleTheme}>
        {theme === 'light' ? <Moon className='w-[25px] md:w-[36px] xl:w-[44px]' /> : <Sun className='w-[25px] md:w-[36px] xl:w-[44px]' />}
      </button>
    </div>
  )
}

export default Navbar
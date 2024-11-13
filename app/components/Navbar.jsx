'use client'

import React, { useState,useEffect } from 'react'
import { Sun, Moon } from 'lucide-react'

const Navbar = () => {
  const [isDarkMode, setIsDarkMode] = useState(false)
  useEffect(() => {
    const theme = localStorage.getItem('theme');
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
      setIsDarkMode(true)
    }
  }, [])
  const toggleTheme = () => {
    if (document.documentElement.classList.contains('dark')) {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
      setIsDarkMode(false)
    } else {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
      setIsDarkMode(true)
    }
  }
  
  return (
    <div className='flex justify-end items-center'>
      <button className='flex justify-center items-center cursor-pointer bg-slate-400 border rounded-lg w-[50px] py-2 px-2' onClick={toggleTheme}>
        {isDarkMode ? <Moon /> : <Sun/>}
      </button>
    </div>
  )
}

export default Navbar
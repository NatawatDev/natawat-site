import React from 'react'
import { ChevronRight } from 'lucide-react'

const CardExp = ({ title = 'Web Application', url, action }) => {
  return (
    <div className="group h-full rounded-lg bg-white/20 p-5 cursor-pointer transition-transform duration-500 ease-in-out hover:scale-105 hover:bg-gray-200">
      <div className="h-full flex flex-col">
      <img className="rounded-lg h-[90%] w-full object-contain xl:object-cover xl:h-[450px]" src={url} alt={`${title} thumbnail`}/>
        <div className="flex justify-between items-center xl:items-start pt-10">
          <p className="text-black text-[20px] md:text-[28px] xl:text-[32px] font-bold dark:text-white group-hover:text-black">{title}</p>
          <button onClick={action} className="flex items-center justify-center bg-white py-2 px-4 rounded-full text-[16px] text-black group-hover:border-2">
            Read 
            <ChevronRight size={12} className="ml-2" />
          </button>
        </div>  
      </div>
    </div>
  )
}

export default CardExp

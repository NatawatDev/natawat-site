'use client'

import React, { useState } from 'react'
import { Plus, Minus } from 'lucide-react'

const Accordion = ({ title, company, date, children }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className="w-full text-white rounded-lg shadow-md">
      <div
        className="w-full flex justify-between items-center p-4 bg-[#FFFF] text-black dark:bg-[#979797]/20 dark:text-[#FFFF] cursor-pointer dark:hover:bg-[#FFFF]/15"
        onClick={toggleExpand}
      >
        <div className="flex items-center gap-4 font-semibold">
          <div>{isExpanded ? <Minus /> : <Plus />}</div>
          <div className='duration-500 ease-in-out'>
            <p className='text-[16px] md:text-[24px] xl:text-[28px]'>{title}</p>
            <p className="text-[14px] md:text-[24px] text-black xl:text-[28px] dark:text-[#FFFF] mb-2 italic">{company}</p>
            <p className="text-[12px] md:text-[20px] md:hidden xl:hidden text-[#595E65] dark:text-[#B6B6B6]">{date}</p>
          </div>
        </div>
        <div className="hidden md:inline xl:inline text-[20px] text-[#595E65] dark:text-[#B6B6B6]">{date}</div>
      </div>
      <div
        className={`overflow-hidden transition-all duration-500 ease-in-out ${isExpanded ? 'max-h-[1000px]' : 'max-h-0'}`}
      >
        {isExpanded && (
          <div className="text-[12px] md:text-[16px] xl:text-[24px] p-4 bg-[#FFFF] text-black dark:bg-[#979797]/20 cursor-pointer dark:text-[#FFFF] dark:hover:bg-[#FFFF]/15">
            <div>{children}</div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Accordion;

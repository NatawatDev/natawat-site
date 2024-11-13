'use client'

import React, { useState } from 'react'
import { Plus, Minus  } from 'lucide-react'

const Accordion = ({ title, company, date, children }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className="w-full text-white rounded-lg shadow-md my-4">
      <div 
        className="w-full flex justify-between items-center p-4 bg-[#FFFF] text-black dark:bg-[#979797]/20 dark:text-[#FFFF] cursor-pointer dark:hover:bg-[#FFFF]/15"
        onClick={toggleExpand}
      >
        
        <div className="flex items-center gap-4 font-semibold">
          <div>{isExpanded ? <Minus /> : <Plus />}</div>
          <div>            
            <p>{title}</p>
            <p className="text-black dark:text-[#FFFF] mb-2">{company}</p>
          </div>                     
        </div>
        <div className="text-[#595E65] dark:text-[#B6B6B6]">{date}</div>
      </div>

      {isExpanded && (
        <div className="p-4 bg-gray-900">          
          <div>{children}</div>
        </div>
      )}
    </div>
  );
};

export default Accordion;
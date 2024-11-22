'use client'

import React, { useState } from 'react'
import { CircleArrowRight, CircleArrowLeft, CircleArrowUp, CircleArrowDown, Mail, MapPin, PhoneCall, Minus, Plus } from 'lucide-react'

const ContactInfo = () => {
  const [selectedSection, setSelectedSection] = useState('contact')

  const toggleSection = (section) => {
    setSelectedSection(section)
  }

  const [isExpandedContact, setIsExpandedContact] = useState(false);
  const [isExpandedSkill, setIsExpandedSkill] = useState(false);

  const toggleExpandContact = () => {
    setIsExpandedContact(!isExpandedContact);
  };

  const toggleExpandedSkill = () => {
    setIsExpandedSkill(!isExpandedSkill);
  };

  return (
    <div className='grid dark:text-[#FFFF] gap-[20px]'>
      <div className='tablet and mobile xl:hidden'>
        <div className="w-full text-white rounded-lg shadow-md">
          <div
            className="w-full h-[75px] md:h-[104px] flex justify-between items-center p-4 bg-[#FFFF] text-black dark:bg-[#979797]/20 dark:text-[#FFFF] cursor-pointer dark:hover:bg-[#FFFF]/15"
            onClick={() => toggleExpandContact()}
          >
            <div className="flex justify-between items-center gap-4 font-semibold">        
              <div className='duration-500 ease-in-out md:text-[24px]'>
                <p>CONTACT</p>           
              </div>
            </div>
            <div>{isExpandedContact ? <CircleArrowUp className='w-[16px] md:w-[24px]'/> : <CircleArrowDown className='w-[16px] md:w-[24px]'/>}</div>
          </div>
          <div
            className={`overflow-hidden transition-all duration-500 ease-in-out ${isExpandedContact ? 'max-h-[1000px]' : 'max-h-0'}`}
          >
            {isExpandedContact && (
              <div className="w-fulll h-full mt-2 p-4 bg-[#FFFF] text-black dark:bg-[#979797]/20 cursor-pointer dark:text-[#FFFF] dark:hover:bg-[#FFFF]/15">
                <div className='w-full h-full flex flex-col gap-5'>             
                  <div className='flex flex-col gap-2'>
                    <span className='flex gap-2'>
                      <Mail className='w-[16px] md:w-[20px]'/>
                      <p className='text-[16px] md:text-[20px]'>: natawat.cho@gmail.com</p>
                    </span>
                    <span className='flex gap-2'>
                      <PhoneCall className='w-[16px] md:w-[20px]'/>
                      <p className='text-[16px] md:text-[20px]'>: (+66)95-725-1892</p>
                    </span>
                    <span className='flex gap-2 items-center'>
                      <MapPin className='w-[16px] md:w-[20px] flex-shrink-0' />
                      <p className='flex-grow text-[16px] md:text-[20px] break-words'>: 17 Soi Udomsuk 37, Phra Khanong, Bang Chak, Bangkok 10260</p>
                    </span>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        <div className="w-full text-white rounded-lg shadow-md">
          <div
            className="w-full h-[75px] md:h-[104px] flex justify-between items-center p-4 bg-[#FFFF] text-black dark:bg-[#979797]/20 dark:text-[#FFFF] cursor-pointer dark:hover:bg-[#FFFF]/15"
            onClick={() => toggleExpandedSkill()}
          >
            <div className="flex justify-between items-center gap-4 font-semibold">        
              <div className='duration-500 ease-in-out md:text-[24px]'>
                <p>Programming Languages & Frameworks</p>           
              </div>
            </div>
            <div>{isExpandedSkill ? <CircleArrowUp className='w-[16px] md:w-[24px]'/> : <CircleArrowDown className='w-[16px] md:w-[24px]'/>}</div>
          </div>
          <div
            className={`overflow-hidden transition-all duration-500 ease-in-out ${isExpandedSkill ? 'max-h-[1000px]' : 'max-h-0'}`}
          >
            {isExpandedSkill && (
              <div className="h-full mt-2 p-4 bg-[#FFFF] text-black dark:bg-[#979797]/20 cursor-pointer dark:text-[#FFFF] dark:hover:bg-[#FFFF]/15">
                <div className='w-full h-full flex flex-col gap-5'>             
                <div className='flex flex-col w-full'>
                  <p className='text-[20px] md:text-[24px] font-bold'>Frontend :</p>
                  <div className='flex flex-col text-[16px] md:text-[20px]'>
                    <ul className='list-disc pl-6'>
                      <li>HTML, CSS, JavaScript</li>
                      <li>TypeScript , Vue.js, Next.js, React</li>
                      <li>TailwindCSS, Bootstrap</li>
                    </ul>
                  </div>
                </div>
                <div className='flex flex-col w-full'>
                  <p className='text-[20px] md:text-[24px] font-bold'>Backend & Database :</p>
                  <div className='flex flex-col text-[16px]'>
                    <ul className='list-disc pl-6'>
                      <li>Node.js (beginner)</li>
                      <li>MySQL (beginner)</li>
                      <li>PostgreSQL (beginner)</li>
                    </ul>
                  </div>
                </div>            
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
      
      <div className='xl:inline hidden'>
        <div className='flex w-full h-full gap-6'>
          <div className='w-[30%] h-full flex flex-col gap-6'>          
            <div
              className='w-full h-[104px] flex justify-between items-center rounded-[6px] p-6 bg-[#FFFF] text-black dark:bg-[#979797]/20 dark:text-[#FFFF] cursor-pointer dark:hover:bg-[#FFFF]/15'
              onClick={() => toggleSection('contact')}
            > 
              <p className='text-[20px] font-bold'>CONTACT</p>
              {selectedSection === 'contact' ? <CircleArrowRight className='w-[32px]'/> : <CircleArrowLeft className='w-[32px]'/>}
            </div>
            <div
              className='w-full h-[104px] flex justify-between items-center rounded-[6px] p-6 bg-[#FFFF] text-black dark:bg-[#979797]/20 dark:text-[#FFFF] cursor-pointer dark:hover:bg-[#FFFF]/15'
              onClick={() => toggleSection('skill')}
            >
              <p className='text-[20px] font-bold'>Programming Languages & Frameworks</p>
              {selectedSection === 'skill' ? <CircleArrowRight className='w-[32px]'/> : <CircleArrowLeft className='w-[32px]'/>}
            </div>      
          </div>

          <div className='w-[70%]'>
            <div className="relative w-full h-full rounded-[6px] p-6 bg-[#FFFF] text-black dark:bg-[#979797]/20 dark:text-[#FFFF] cursor-pointer dark:hover:bg-[#FFFF]/15">
              <div
                className={`absolute w-full transition-opacity duration-500 ease-in-out ${
                  selectedSection === 'contact' ? 'opacity-100' : 'opacity-0 pointer-events-none'
                }`}
              >
                {selectedSection === 'contact' && (
                  <div className='w-full flex flex-col gap-5'>
                    <p className='text-[32px] font-bold'>CONTACT</p>
                    <div className='flex flex-col text-[20px] gap-2'>
                      <span className='flex gap-2'>
                        <Mail />
                        <p>: natawat.cho@gmail.com</p>
                      </span>
                      <span className='flex gap-2'>
                        <PhoneCall />
                        <p>: (+66)95-725-1892</p>
                      </span>
                      <span className='flex gap-2'>
                        <MapPin />
                        <p>: 17 Soi Udomsuk 37, Phra Khanong, Bang Chak, Bangkok 10260</p>
                      </span>
                    </div>
                  </div>
                )}
              </div>

              <div
                className={`absolute w-full transition-opacity duration-500 ease-in-out ${
                  selectedSection === 'skill' ? 'opacity-100' : 'opacity-0 pointer-events-none'
                }`}
              >
                {selectedSection === 'skill' && (
                  <div className='w-full flex gap-4'>
                    <div className='flex flex-col gap-2 w-full'>
                      <p className='text-[32px] font-bold'>Frontend :</p>
                      <div className='flex flex-col gap-2 text-[20px]'>
                        <ul className='list-disc pl-6'>
                          <li>HTML, CSS, JavaScript</li>
                          <li>TypeScript , Vue.js, Next.js, React</li>
                          <li>TailwindCSS, Bootstrap</li>
                        </ul>
                      </div>
                    </div>
                    <div className='flex flex-col gap-2 w-full'>
                      <p className='text-[32px] font-bold'>Backend & Database :</p>
                      <div className='flex flex-col gap-2 text-[20px]'>
                        <ul className='list-disc pl-6'>
                          <li>Node.js (beginner)</li>
                          <li>MySQL (beginner)</li>
                          <li>PostgreSQL (beginner)</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>       
        </div> 
      </div>           
    </div>
  );
};

export default ContactInfo;

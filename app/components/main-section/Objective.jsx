'use client'

import React from 'react'
import CardSoftSkill from '../CardSoftSkill'
import ContactInfo from '../ContactInfo'
import { Brain, Users, Globe } from 'lucide-react'

const Objective = () => {
  const softSkills = [
    {
      icon: <Brain/>,
      title: 'Problem-Solving and Growth Mindset',
      detail: 'Drive solutions with a proactive mindset, continuously learning and adapting to overcome challenges.'
    },
    {
      icon: <Users/>,
      title: 'Teamwork and Collaboration',
      detail: 'Collaborate effectively with diverse teams, ensuring clear communication and shared goals for success.'
    },
    {
      icon: <Globe/>,
      title: 'Continuous and Curiosity Learning',
      detail: 'Embrace curiosity, constantly learning new skills to innovate and stay ahead in a dynamic world.'
    }
  ]
  return (
    <div className='grid gap-y-[64px] pt-[120px] md:gap-y-[44px] xl:gap-y-[100px]'>
      <div className="text-center dark:text-[#FFFF]">
        <p className="text-[24px] md:text-[28px] xl:text-[64px] font-bold">CAREER OBJECTIVE</p>
        <p className="text-[16px] md:text-[16px] xl:text-[32px]">
          I aim to leverage my extensive experience in front-end technologies and my growing expertise in backend development to excel as a full-stack developer. I am focused on building scalable and efficient solutions that enhance user experience and streamline business operations.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-[24px] xl:gap-[24px] h-full">
      {softSkills.map((item, index) => (
        <div key={index} className="h-full">
          <CardSoftSkill title={item.title} detail={item.detail} icon={item.icon} />
        </div>
      ))}
      </div>

      <ContactInfo />
    </div>
  )
}

export default Objective
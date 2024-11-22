'use client'

import React from 'react'
import WorkAccordion from '../WorkAccordion'


const WorkExperience = () => {
  return (
  <div className="flex flex-col dark:text-[#FFFF] pt-[64px]">
    <p className="text-[24px] mb-[32px] mg:text-[40px] xl:text-[64px] font-bold">WORK EXPERIENCE</p>
    <WorkAccordion
      title="Front-End Developer"
      company="Sansiri Public Company Limited (Outsource)"
      date="November 2023 - Present"
    >
      <ul className="list-disc pl-6">
        <li>Develop and maintain web applications using Vue.js (Options API) and Bootstrap UI components.</li>
        <li>Collaborate with backend developers to integrate APIs for seamless data flow.</li>
        <li>Design and implement new features based on business requirements.</li>
        <li>Troubleshoot and resolve frontend issues to ensure smooth functionality.</li>
        <li>Optimize web performance for improved responsiveness and user experience.</li>
      </ul>
    </WorkAccordion>
    <WorkAccordion
      title="Front-End Developer"
      company="Choco Card Enterprise Company Limited"
      date="August 2022 - November 2023"
    >
      <ul className="list-disc pl-6">
        <li>Developed and maintained web pages using Vue.js (Composition API) and React.</li>
        <li>Integrated APIs with backend teams to ensure data consistency.</li>
        <li>Documented front-end processes for handover and updates.</li>
        <li>Enhanced UI/UX design for cross-browser and cross-platform compatibility.</li>
        <li>Coordinated with teams to meet project standards and timelines.</li>
      </ul>
    </WorkAccordion>
  </div>
  )
}

export default WorkExperience
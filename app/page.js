'use client'

import Accordion from "./components/Accordion"

export default function Home() {
  return (
    <div className="w-full">
      <div className="w-full">
        <Accordion 
          title="Front-End Developer" 
          company="Sansiri Public Company Limited (Outsource)" 
          date="November 2023 - Present"
        >
          <p>Develop and maintain web applications using Vue.js...</p>
        </Accordion>
      </div>

      
      <Accordion 
        title="Front-End Developer" 
        company="Choco Card Enterprise Company Limited" 
        date="August 2022 - November 2023"
      >
        <p>Developed and maintained web pages using Vue.js...</p>
      </Accordion>
    </div>
  )
}
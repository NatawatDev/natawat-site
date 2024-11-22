'use client'

import React, { useEffect } from 'react'
import CardExp from '../CardExp'
import { useRouter } from "next/navigation"
import { workExpDetail } from '../../constant'

const WorkDetail = () => {
  const router = useRouter()
  const profileExp = workExpDetail

  const hanldeClickDetail = (item) => {
    router.push(`/works?detail=${item.prefix}`)
  }
  
  useEffect(() => {
    const fromWorkDetail = sessionStorage.getItem('fromWorkDetail')
    if (fromWorkDetail) {
      const section = document.querySelector('#see-my-works')
      if (section) {
        section.scrollIntoView({ behavior: 'smooth' })
      }
      sessionStorage.removeItem('fromWorkDetail')
    }
  }, []);

  return (
    <div className="flex flex-col gap-[24px] md:gap-[44px] xl:gap-[60px] dark:text-[#FFFF]" id='see-my-works'>
    <div>
      <p className="text-[24px] md:text-[40px] xl:text-[52px] font-bold">SEE MY WORKS</p>
      <p className="text-[12px] md:text-[20px] xl:text-[32px]">Explore a selection of my featured projects for clients</p>
    </div>
    <div className="grid grid-cols-1 xl:grid-cols-2 gap-[32px]">
      {profileExp && profileExp.map((item, index) => (
        <CardExp key={index} title={item.title} url={item.mainUrl} detail={item.detail} action={() => hanldeClickDetail(item)} />
      ))}
    </div>
  </div>
  )
}

export default WorkDetail
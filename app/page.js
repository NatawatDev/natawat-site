'use client'

import Profile from "./components/main-section/Profile"
import Objective from "./components/main-section/Objective"
import WorkExperience from "./components/main-section/WorkExperience"
import WorkDetail from "./components/main-section/WorkDetail"
import Head from "next/head"

export default function Home() {
  return (
    <div className="flex flex-col gap-[64px] sm:space-y-12 md:space-y-16 lg:space-y-[200px]">
      <Head>
        <title>Natwat Site - Web Developer Portfolio</title>
        <meta name="description" content="Welcome to Natwat's web portfolio. Explore my projects, skills, and achievements as a frontend developer." />
        <link rel="icon" href="/assets/natawat.png" type="image/png" />
      </Head>
      <Profile />
      <Objective />
      <WorkExperience />
      <WorkDetail />
    </div>
  )
}
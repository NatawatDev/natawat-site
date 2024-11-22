'use client'

import Profile from "./components/main-section/Profile"
import Objective from "./components/main-section/Objective"
import WorkExperience from "./components/main-section/WorkExperience"
import WorkDetail from "./components/main-section/WorkDetail"

export default function Home() {
  return (
    <div className="flex flex-col gap-[64px] sm:space-y-12 md:space-y-16 lg:space-y-[200px]">
      <Profile />
      <Objective />
      <WorkExperience />
      <WorkDetail />
    </div>
  )
}
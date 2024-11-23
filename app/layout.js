'use client'

import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import "./globals.css"

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="dark">
      <head>
        <title>Natwat Site - Web Developer Portfolio</title>
        <meta name="description" content="Welcome to Natwat's web portfolio. Explore my projects, skills, and achievements as a frontend developer." />
        <link rel="icon" href="/code.svg" type="image/png" />
      </head>
      <body className="min-h-screen bg-cover px-[20px] py-[24px] xl:px-[100px] xl:py-[50px] md:p-[50px] bg-center bg-no-repeat bg-[url('/asset/images/bg-light.jpg')] dark:bg-[url('/asset/images/bg-dark.jpg')]">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}

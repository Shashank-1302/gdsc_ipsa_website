'use client'
import React from "react"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"

export default function RootLayout({ children }) {
  return (
    <html lang="en">
    <body className='mx-auto max-w-3xl px-4 sm:px-6 md:max-w-5xl'>
   
   <Navbar />
      <main>{children}  </main>
      
      <Footer/>
   </body>
    </html>
  )
}

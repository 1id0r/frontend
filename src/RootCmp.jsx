import React, { useEffect } from 'react'
import { Routes, Route } from 'react-router'
import AOS from 'aos'
import 'aos/dist/aos.css'
import { HomePage } from './pages/HomePage'
import { AppHeader } from './cmps/AppHeader'

export function RootCmp() {
  useEffect(() => {
    AOS.init({
      duration: 500,
      easing: 'ease-in-out',
      once: true,
    })
  }, [])

  return (
    <div className='main-container'>
      <AppHeader />
      <main>
        <Routes>
          <Route path='' element={<HomePage />} />
        </Routes>
      </main>
    </div>
  )
}

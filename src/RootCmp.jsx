import React from 'react'
import { Routes, Route } from 'react-router'
import { HomePage } from './pages/HomePage'
import { AboutUs } from './pages/AboutUs'
import { AppHeader } from './cmps/AppHeader'

export function RootCmp() {
  return (
    <div className='main-container'>
      <AppHeader />

      <main>
        <Routes>
          <Route path='' element={<HomePage />} />
          <Route path='about' element={<AboutUs />} />
        </Routes>
      </main>
    </div>
  )
}

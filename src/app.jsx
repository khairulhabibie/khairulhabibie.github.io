import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import HomePage from './Pages/HomePage'
import PageNotFound from './Pages/PageNotFound'

const app = () => {
  return (
    <Routes>
      <Route path='/' exact element={<HomePage />}></Route>
      <Route path='/404' element={<PageNotFound />}></Route>
      <Route path='*' element={<Navigate to='/404' />}></Route>
    </Routes >
  )
}

export default app
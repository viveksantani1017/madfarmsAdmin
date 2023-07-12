import React from 'react'
import { Route, Router, Routes } from 'react-router-dom'
import ManageRecords from './ManageRecords'
import Home from './Home'
const Pages = () => {
  return (
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/managerecords' element={<ManageRecords/>}/>
    </Routes>
  )
}

export default Pages

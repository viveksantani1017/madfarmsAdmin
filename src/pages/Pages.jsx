import React from 'react'
import { Route, Router, Routes } from 'react-router-dom'
import ManageRecords from './ManageRecords'
import Home from './Home'
import Login from './Login'
import Register from './Register'
const Pages = () => {
  return (
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/register' element={<Register/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/managerecords' element={<ManageRecords/>}/>
    </Routes>
  )
}

export default Pages

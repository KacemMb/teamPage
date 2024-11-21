import React from 'react'
import '../Styles/Home.css'
import Navbar from '../Components/Navbar'
import { Outlet } from 'react-router-dom'

const Home = () => {
  return (
    <div className='Home'>
      <Navbar />
      <Outlet />
    </div>
  )
}

export default Home

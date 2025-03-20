import React from 'react'
import { Outlet } from 'react-router-dom'
import NavBar from '../component/NavBar'
import Footer from '../component/Footer'

const Layout = () => {

  return (
    <div>
        <NavBar/>
        <main>
            <Outlet/>
        </main>
        <Footer/>
    </div>
  )
}

export default Layout
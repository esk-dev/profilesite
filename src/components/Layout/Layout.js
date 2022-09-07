import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../Navbar/Navbar'
import Sidebar from '../Sidebar/Sidebar'
import './Layout.scss'
function Layout() {
  return (
    <div className="App">
      <Navbar />
      <Sidebar />
      <div className="page">
        <Outlet/>
      </div>
    </div>
  )
}

export default Layout;

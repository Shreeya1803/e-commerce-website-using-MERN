import React from 'react'
import "./Navbar.css"
import navlogo from "../../assets/logo.png"
import navprofileIcon from "../../assets/nav-profile.png"


const Navbar = () => {
  return (
    <div className='navbar'>
      <img src={navlogo} className='nav-logo' alt="" />
      <h3 className='nav-text'>Admin Panel</h3>
      <img src={navprofileIcon} className='nav-profile' alt="" />
    </div>
  )
}

export default Navbar
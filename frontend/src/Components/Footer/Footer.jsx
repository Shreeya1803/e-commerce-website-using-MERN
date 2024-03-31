import React from 'react'
import './Footer.css'

import footer_logo from '../Assets/logo.png'
import instagram_icon from '../Assets/instagram_icon.png'
import pintrest_icon from '../Assets/pintester_icon.png'
import whatsapp_icon from '../Assets/whatsapp_icon.png'
import { Link } from "react-router-dom"; 
const Footer = () => {
  return (
    <div className='footer'>
      <div className="footer-logo">
        <img src={footer_logo} alt="" />
        <p>CLOTHIFY</p>
      </div>
      <ul className="footer-links">
        <li><Link style={{textDecoration:'none'}} to="/">Shop</Link></li>
        <li><Link style={{textDecoration:'none'}} to="/mens">Men</Link></li>
        <li><Link style={{textDecoration:'none'}} to="/womens">Women</Link></li>
        <li><Link style={{textDecoration:'none'}} to="/kids">Kid</Link></li>
        <li><Link style={{textDecoration:'none'}} to="/">Contact</Link></li>
      </ul>
      <div className="footer-social-icons">
        <div className="footer-icons-container">
            <img src={instagram_icon} alt="" />
        </div>
        <div className="footer-icons-container">
            <img src={pintrest_icon} alt="" />
        </div>
        <div className="footer-icons-container">
            <img src={whatsapp_icon} alt="" />
        </div>
      </div>
      <div className="footer-copyright">
        <hr />
        <p>Copyright @ 2024 - All Right Reserved.</p>
      </div>
    </div>
  )
}

export default Footer

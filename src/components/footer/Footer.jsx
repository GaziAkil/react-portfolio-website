import React from 'react'
import './footer.css'
import {FaFacebookF} from 'react-icons/fa'
import {FiInstagram} from 'react-icons/fi'
import {IoLogoTwitter} from 'react-icons/io'

export default function Footer() {
  return (
    <footer>
      <a href="#" className='footer__logo'>GA.</a>
      <ul className="permalinks">
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#testimonials">Testimonials</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      <div className="footer__socials">
        <a href="http://facebook.com" target="_blank"><FaFacebookF/></a>
        <a href="http://instagram.com" target="_blank"><FiInstagram/></a>
        <a href="http://twitter.com" target="_blank"><IoLogoTwitter/></a>
      </div>

      <div className="footer__copyright">
        <small>&copy; Gazi Muhammad Akil. All rights reserved.</small>
      </div>
    </footer>
  )
}

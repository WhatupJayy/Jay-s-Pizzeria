import React from 'react'
import InstagramIcon from '@mui/icons-material/Instagram';
import PhoneIcon from '@mui/icons-material/Phone';
import XIcon from '@mui/icons-material/X';
import FacebookIcon from '@mui/icons-material/Facebook';
import '../styles/Footer.css'

function Footer() {
  return (
    <div className='footer'>
        <div className='socialMedia'>
            <PhoneIcon />
            <InstagramIcon />
            <XIcon />
            <FacebookIcon />
        </div>
        <p> &copy; 2024 jaypizza.com</p>
    </div>
  )
}

export default Footer

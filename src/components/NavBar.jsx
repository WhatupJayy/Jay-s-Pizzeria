import React from 'react'
import Logo from '../assets/pizzaLogo.png'
import { Link } from "react-router-dom"
import ReorderIcon from '@mui/icons-material/Reorder';
import "../styles/NavBar.css"
import Reorder from '@mui/icons-material/Reorder';

function NavBar() {
  return (
    <div className='NavBar'>
      <div className='leftSide'><img src={Logo} /></div>
      <div className='rightSide'>
        <Link to="/">Home</Link>
        <Link to="/menu">Menu</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
        <button><Reorder /></button>
      </div>
    </div>
  )
}

export default NavBar

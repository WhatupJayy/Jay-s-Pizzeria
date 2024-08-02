import React from 'react'
import Pizza from '../assets/pizza.jpeg'
import '../styles/Home.css'
import { Link } from 'react-router-dom'

function Home() {
  return (
    <div className='home' style={{backgroundImage: `url(${Pizza})`}}>
        <div className='headerContainer'>
            <h1>Jay's Pizzaria</h1>
            <p>PIZZA TO FIT ANY TASTE</p>
            <Link to="/menu">
                <button>ORDER NOW</button>
            </Link>
        </div>
    </div>
  )
}

export default Home

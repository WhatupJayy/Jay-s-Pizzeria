import React from 'react'
import multiplePizzas from "../assets/multiplePizzas.jpeg"
import"../styles/About.css"
import makingpizza from "../assets/makingpizza.jpeg"

function About() {
  return (
    <div className='about'>
        <div className='aboutTop' style={{ backgroundImage: `url(${multiplePizzas})` }}></div>
        <div className='aboutBottom'>
            <div className='aboutLeft'><img src={makingpizza} /></div>
            <div className='aboutRight'>
            <h2>ABOUT US</h2>
            <p>Welcome to Jay's Pizzeria, where passion meets perfection in every slice! Since our doors opened in 2005, we've been committed to crafting the finest pizzas using only the freshest ingredients and traditional recipes handed down through generations. Located in the heart of Grove Street, Jay's Pizzeria is a beloved local staple where friends and families gather to enjoy the authentic taste of Italy. Our dough is hand-tossed daily, our sauces are made from scratch, and each pizza is baked to golden perfection in our wood-fired oven. Whether you're a fan of classic Margherita, crave the rich flavors of our gourmet toppings, or prefer a build-your-own adventure, Jay's Pizzeria offers something for every palate. Join us for a slice of joy, a piece of tradition, and a memorable dining experience that brings people together. Welcome to Jay's, where every pizza tells a story!</p>
            </div>
        </div>
    </div>
  )
}

export default About

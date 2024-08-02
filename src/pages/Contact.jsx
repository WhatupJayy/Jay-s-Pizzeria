import React from 'react'
import pizzaLeft from "../assets/pizzaLeft.jpg"
import "../styles/Contact.css"

function Contact() {
  return (
    <div className='contact'>
        <div className='leftSide' style={{ backgroundImage: `url(${pizzaLeft})`}}></div>
        <div className='rightSide'>
            <h1>Contact Us</h1>
            <form id='contact-form' method='POST'>
                <label htmlFor="name">Full Name</label>
                <input name='name' type="text" placeholder='Enter Full Name' />
                <label htmlFor="email">Email</label>
                <input name='email' type="email" placeholder='Enter Email' />
                <label htmlFor="message">Message</label>
                <textarea name="message" placeholder='Enter Message'></textarea>
                <button type='submit'>Send Message</button>
            </form>
        </div>
      
    </div>
  )
}

export default Contact

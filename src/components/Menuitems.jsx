import React from 'react'

function Menuitems({image, Iname, price}) {
  return (
    <div className='menuItem'>
        <div style = {{ backgroundImage: `url(${image})`}}></div>
        <h1> {Iname} </h1>
        <p>${price}</p>
    </div>
  )
}

export default Menuitems

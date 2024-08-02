import React from 'react'
import { MenuList } from "../helpers/MenuList"
import Menuitems from '../components/Menuitems'
import"../styles/Menu.css"

function Menu() {
  return (
    <div className='menu'>
        <h1 className='menuTitle'>Our Menu</h1>
        <div className='menuList'>
            {MenuList.map((menuItem,key) => {
                return <Menuitems key={key} image={menuItem.image} Iname={menuItem.name} price={menuItem.price} />
            })}
        </div>  
    </div>
  )
}

export default Menu

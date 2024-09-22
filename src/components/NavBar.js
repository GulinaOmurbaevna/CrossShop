import React from 'react'
import logo from '../assets/logo.png'
import heart from '../assets/heart.svg'
import Union from '../assets/Union.svg'
import Vector from  '../assets/Vector.png'
import '../styles/NavBar.css'

function NavBar({size, setShow}) {
  return (
    <nav>
      <div className="nav_box ">
 

        <div className='nav_logo flex items-center '>
            <img className='h-[40px] w-[40px]' src={logo} alt="" />
           <div>
           <h2 onClick={() => setShow(true)}>KROSS STORE</h2>
           <p>Магазин лучших кроссовок</p>
           </div>
           </div>
         

 
        <div className="nav_details gap-5">
            <div className='flex gap-1'>
            <img onClick={() => setShow(false)} className='korzina' src={Vector} alt="" /><span>{size}</span>
            </div>
            <div className='flex gap-1'>
            <img src={heart} alt="" /><span>Закладки</span>
            </div>
            <div className='flex gap-1'>
            <img src={Union} alt="" /><span>Профиль</span>
            </div>
        </div>
      
      </div>
       
    </nav>
  )
}

export default NavBar

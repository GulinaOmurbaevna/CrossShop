import React, { useState } from 'react'
import '../styles/Card.css'
import plus from "../assets/plus.svg"
import check from '../assets/check.svg'
 

function Card({item,handleClick }) {
    const {title, price, img} = item
    const [isChecked, setIsChecked] = useState(false);

    const handleClickCheck = () => {
        setIsChecked(!isChecked);
        
      };
  return (
    <div>
    <div className='cards'>
         <div className="card">
            <div className="card_img">
                <img src={img} alt="" />
            </div>

        <div className="details">
                <p className='title'>{title}</p>
                <div className=' flex mt-2 gap-16 justify-center ml-2'>

                <div className='price'>
                <p>цена </p>
                <p className='num'>{price }руб</p>
                </div>

                <button onClick={handleClickCheck}  >
      {isChecked ? (
      
          <img src={check} alt="Plus" />
      ) : (
        <img onClick={() => handleClick(item)} className='plus' src={plus} alt="" />
      )}
    </button>
          
                     
             
                </div>
            </div>
         </div>
    </div>
    </div>
  )
}

export default Card

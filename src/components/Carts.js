
import React, { useEffect, useState } from 'react';
import '../styles/Cart.css'; // Import the CSS file
import remove from '../assets/Group 91.png'


function Carts({cart, setCart}) {
       const [price, setPrice] = useState(0);

    const handlePrice = () => {
        let ans = 0;
        cart.map((item) => (
            ans += item.amount * item.price
        )) 
        setPrice(ans)
    }

    const handleRemove = (id) => {
        const arr = cart.filter((item) => item.id !== id);
        setCart(arr);
    }

    useEffect(() => {
        handlePrice();
    })
  return (
    <div className="carts-container">
      <h2>Корзина</h2>
      <div className="content">
        { 
             cart?.map((item) => (
                                <div className="cart_box flex" key={item.id}>
                                    <div className="cart_img">
                                        <img src={item.img} alt="" />
                                      
                                    </div>
                            
                                    <div className='ml-4'>

                                       <p className='title'>{item.title}</p>
                                  
                                  <div className='prices'>
                                        <p className='num'>{item.price}руб</p>
                                       <img src={remove} alt="" onClick={() => handleRemove(item.id)}/>
                                  </div>

                                    </div>
                           
                                </div>
                            ))
                        }
                        <p>{price}</p>
      
      </div>
    </div>
  );
}

export default Carts;

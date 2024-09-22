 
import { useState } from 'react';
import Amazon from './components/Amazon';
import Carts from './components/Carts';
import NavBar from './components/NavBar';
 

function App() {
  const [show, setShow] = useState([]);
  const [cart, setCart] = useState([])

  const handleClick = (item)=> {
    let isPresent = false;
    cart.forEach((product) => {
     if(item.id === product.id)
       isPresent = true;
    })
  
   setCart([...cart, item])
 }
  return (
    <div className="App">
          <NavBar size={cart.length} setShow={setShow}/>
         {
    show ? <Amazon handleClick={handleClick}/>:<Carts cart={cart} setCart={setCart}/>
         }
    </div>
  );
}

export default App;

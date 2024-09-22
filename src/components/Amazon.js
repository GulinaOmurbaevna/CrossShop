import React from 'react'
import list from '../data'
import Card from './Card'

function Amazon({handleClick}) {
  return (
    <div>
        <div className='cross'>
            <h2>Все кроссовки</h2>
            <i class="fa-solid fa-magnifying-glass"></i>
            <input type="text" placeholder='search' /> 
        </div>
     <section>
          {
            list.map((item) => (
                <Card item={item} handleClick={handleClick} />
            ))
          }
     </section>
    </div>
  )
}

export default Amazon

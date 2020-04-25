import React from 'react'

function Orders ({info}) {
  if (!info){
    return <h3>Working on your order</h3>

  }
  return(
    <div className='orders'>
      <h2>Name: {info.name}</h2>
      <h2>Size: {info.size}</h2>
      {
        !!info.sauce && !!info.sauce.length &&
          <div>
          <h2>Sauce:</h2>
          <ul>
            {
              info.sauce.map((yes, no) => <li key={no}>{yes}</li>)
            }
          </ul>
          </div>
      }
      {
        !!info.toppings && !!info.toppings.length &&
          <div>
          <h2>Toppings:</h2>
          <ul>
            {
              info.toppings.map((yay, ney) => <li key={ney}>{yay}</li>)
            }
          </ul>
          </div>
      }


      <h2>Special Instructions: {info.special}</h2>
    </div>


  )
}

export default Orders

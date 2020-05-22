import React from 'react'


export default function Home(){
    return(
    <div className='container'>
          <h1>Lambda Eats</h1>
            <h2>Pizza Hot and Ready for You</h2>
           <img src={ require("./images/Pizza.jpg") }/>
    </div>
    )
}
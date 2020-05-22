import React from 'react'


export default function Home(){
    return(
    <div className='container'>
        <div className='title'>
          <h1>Lambda Eats</h1>
            <h3>Pizza Hot and Ready for You</h3>
        </div>    
           <img src={ require("./images/Pizza.jpg") }/>
    </div>
    )
}
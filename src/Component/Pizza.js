import React from "react";
import {Route, Link} from "react-router-dom"
import HomePage from "./HomePage"
import '../App.css'

const Pizza = () => {
  const stopAd = (e)=>{
   e.preventDefault();

  }

 const fromSubmit = (event) =>{
   event.preventDefault();
   props.addOrder(order)

   setOrder({name:"", size:"", sauce:"", special:""})
 }

  return (
    <>
      <h1>Panucci's Online Ordering</h1>
      <form onSubmit={formSubmit}>
        <label>
          <input></input>
        </label>
        <label>
          <input></input>
        </label>
        <label>
          <input></input>
        </label>
        <label>
          <input></input>
        </label>
        <label>
          <input></input>
        </label>
      </form>



      <Route exact path="/" component={HomePage}/>
      <Link to="/">
        <h2>winner winner ordered dinner...</h2>
      </Link>
      <div className="gif">
        <iframe onMouseOver={stopAd} title="gif"src="https://giphy.com/embed/9fuvOqZ8tbZOU" frameBorder="0" className="giphy-embed" allowFullScreen></iframe>
      </div>
      {/* <p><a href="https://giphy.com/gifs/happiness-9fuvOqZ8tbZOU">Seymour says Hi, click on that pizza!</a></p> */}
    </>
  );
};
export default Pizza;

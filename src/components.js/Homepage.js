import React from "react"
import { Link } from "react-router-dom"

const Homepage = () => {

    return (
<div className = "home-wrapper">
    <img 
    className = "home-image"
    src="./Pizza.jpg"
    alt = "homepage_image"
    />
<Link to ="/pizza">
      <button>
        Order a Pizza!
    </button>
</Link>
  


</div>
    )
}

export default Homepage
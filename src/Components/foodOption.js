import React from 'react';

export default function FoodOption(props) {
    const foodImg = {
        width: '100%',
        height: '400px',
        backgroundImage: `url(${props.image})`,
        backgroundSize:'contain',
        backgroundPosition:'center center',
        backgroundRepeat:'no-repeat'

    }
    return(
        <div className="foodOptionContainer">

            <div style={foodImg}></div>
            <h2>{props.name}</h2>
            <p>{props.tags}</p>
            <div className="averageTime">{props.time}</div>
            <div className="fee">{props.fee}</div>


        </div>
    )
}
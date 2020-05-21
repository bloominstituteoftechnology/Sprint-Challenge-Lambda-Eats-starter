import React from 'react';
import {Route} from 'react-router-dom';

import Header from "../Components/Header";
import FoodOption from "../Components/foodOption";

import Mcds from '../Images/mcds.png';
import sweet from '../Images/sweet.jpg';
import starbucks from '../Images/starbucks.jpg';

export default function Home(props){
    return(
        <>
        <Header />

        <section className="foodSection">

            <h1 className="title">Food Delivery in Gotham City</h1>
            <FoodOption
            image = {Mcds}
            name="McDonald's"
            tags = "$ - American - Fast Food - Burgers"
            time = "20 - 30 Min"
            fee = "$5.99 Delivery Fee"
            />

            <FoodOption
                image = {sweet}
                name="Sweet Greens"
                tags = "$ - Healthy - Salads"
                time = "30 - 45 Min"
                fee = "$4.99 Delivery Fee"
            />

            <FoodOption
                image = {starbucks}
                name="Starbucks"
                tags = "$ - Cafe - Coffee & Tea - Breakfast and Brunch"
                time = "10 - 20 Min"
                fee = "$3.99 Delivery Fee"
            />







        </section>
        </>
    )
}
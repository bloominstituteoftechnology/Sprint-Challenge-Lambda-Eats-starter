import React from "react";
import { Link } from "react-router-dom";
import "./App.css";

const Home = () => {
  return (
    <div className="home-div">
      <div>
        <h2>Choose Your Product</h2>
      </div>
      <div className="img-div">
        <div className="pizza-div">
          <Link to="/pizza">
            <img
              className="cheese-pizza"
              alt="cheese pizza"
              src="https://files2.hungryforever.com/wp-content/uploads/2017/03/25125257/Cheese-PIzza1.jpg"
            />
          </Link>
        </div>

        <div className="pizza-div">
          <img
            className="cheese-pizza"
            alt="subs"
            src="https://www.chewboom.com/wp-content/uploads/2018/09/Firehouse-Subs-Offers-Free-Medium-Sub-With-Purchase-Of-Medium-Or-Large-Sub-Chips-Drink-Through-September-3-2918-678x381.jpg"
          />
        </div>
        <div className="pizza-div">
          <img
            className="cheese-pizza"
            alt="subs"
            src="https://media.olivegarden.com/en_us/images/product/stuffed-ziti-fritta-appetizer-dpv-590x365.jpg"
          />
        </div>
        <div className="pizza-div">
          <img
            className="cheese-pizza"
            alt="subs"
            src="https://upload.wikimedia.org/wikipedia/commons/6/67/Fries_2.jpg"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;

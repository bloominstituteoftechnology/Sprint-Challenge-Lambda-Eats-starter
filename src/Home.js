import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="home-div">
      <h2>Choose Your Product</h2>
      <div className="img-div">
        <Link to="/pizza">
          <img
            alt="cheese pizza"
            src="https://files2.hungryforever.com/wp-content/uploads/2017/03/25125257/Cheese-PIzza1.jpg"
          />
        </Link>
      </div>

      <div className="img-div">
        <img
          alt="subs"
          src="https://www.chewboom.com/wp-content/uploads/2018/09/Firehouse-Subs-Offers-Free-Medium-Sub-With-Purchase-Of-Medium-Or-Large-Sub-Chips-Drink-Through-September-3-2918-678x381.jpg"
        />
      </div>
    </div>
  );
};

export default Home;

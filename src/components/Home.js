import React from "react";
import { useHistory } from "react-router-dom";

function Home() {
    const history = useHistory();
  return (
    <div className="home-wrapper">
      <img
        className="home-image"
        src= "../Assets/Pizza.jpg"
      />
      <button className="md-button shop-button" onClick={() => history.push("/items")}
      >Pizza?</button>
    </div>
  );
}

export default Home;

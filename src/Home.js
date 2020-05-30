import React from "react";
import { Route, Link } from "react-router-dom";
//import link from react router

function Home() {
  return (
    <div>
      <ul className="navbar">
        <li>
          <Link to="/Pizza">Pizza</Link>
        </li>
      </ul>
    </div>
  );
}
export default Home;

// styled components for home page

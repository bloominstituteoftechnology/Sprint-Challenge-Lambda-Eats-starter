import React from "react";
import { useHistory } from "react-router-dom";

function Home() {
  const history = useHistory();
  return (
    <div className="home-wrapper">
      <button data-test-id="homePizzaButton" onClick={() => history.push("/pizza")}>
        Pizza?
      </button>
    </div>
  );
}

export default Home;

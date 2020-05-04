import React from "react";
import { useHistory } from "react-router-dom";

function Home(props) {

  const history = useHistory();
  console.log(history);
  const routeToForm = event => {
    history.push("/pizza");
  };

  return (
    <div className="home-wrapper">
      <img
        className="home-image"
        src="https://www.monsterchildren.com/wp-content/uploads/2017/09/pizzanista-850x567.jpg"
        alt=""
      />
      <button className="md-button pizza-button" onClick={routeToForm}>
        Build Your Pizza!
      </button>
    </div>
  );
}

export default Home;

import React from 'react';
import { useHistory } from "react-router-dom";

function Home() {
    const history = useHistory();
    console.log(history);

    const orderPizza = event => {
        setTimeout(() => {
            history.push("/pizza");
        }, 2000);
    };
  return (
    <div>
      <img src="../../Assets/Pizza.jpg" alt="Pizza" />
      <button onClick={orderPizza}>Pizza!</button>
    </div>
  );
}

export default Home;
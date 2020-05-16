import React, {useState} from "react";
import {BrowserRouter, Link, Route} from "react-router-dom";
import Header from "./Header";
import Form from "./Form";

const App = () => {
  const [pizza, setPizza] = useState([{
        name: "",
        size: "",
        sauce:"",
        toppings: [""],
        instructions: ""
  }]);

  const addPizza = pie => {
    const newPizza = {
      name: pie.name,
      size: pie.size,
      sauce: pie.sauce,
      toppings: pie.toppings,
      instructions: pie.instructions
    };

    setPizza([...pizza, newPizza]);
  };

  return (
    <BrowserRouter>
      <Header/>
      <Route exact path="/" >
        <div className="home">
          <h2>Build Your Own Pizza</h2>
          <p>Choose from four sauces and over a dozen toppings.</p>
          <Link to="/pizza">
            <button type="button">Order Now</button>
          </Link>
        </div>
      </Route>

      <Route path="/pizza">
        <Form addPizza={addPizza}/>
      </Route>
    </BrowserRouter>
  );
};
export default App;

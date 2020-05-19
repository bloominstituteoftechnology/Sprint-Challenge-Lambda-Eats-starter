import React, {useState} from "react";
import Form from "./components/Form";
import Home from "./components/Home";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

const App = () => {
  const [orders, setOrders] = useState([]);

  // addOrder is a function – pass user as a prop
  const addOrder = (order) => {
    const newOrder = {
      name: order.name,
      sizes: order.sizes,
      toppings: order.toppings,
      instructions: order.instructions,
    };
    setOrders([...orders, newOrder]);
  };
  console.log(orders);

  return (
    <div className="App">
      <nav>
        <h1 className="pizza-header">Lambda Eats!</h1>
        <div className="nav-links">
          <Link to="/pizza">Pizza</Link>
          <Link to="/">Home</Link>
        </div>
      </nav>
      <Route exact path="/">
        <Home home={Home} />
      </Route>
      <Route path="/pizza" component={Form} addOrder={addOrder} formsers={orders}/>
    </div>
  );
};
export default App;

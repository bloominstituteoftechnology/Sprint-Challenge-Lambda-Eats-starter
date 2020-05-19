import React, {useState} from "react";
import Form from "./components/Form";
import Home from "./components/Home";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

const App = () => {
  const [users, setUsers] = useState([]);

  // addUser is a function – pass user as a prop
  const addUser = (user) => {
    const newUser = {
      name: user.name,
      sizes: user.sizes,
      toppings: user.toppings,
      instructions: user.instructions,
    };
    setUsers([...users, newUser]);
  };
  console.log(users);

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
      <Route path="/pizza" component={Form} addUser={addUser} users={users}/>
    </div>
  );
};
export default App;

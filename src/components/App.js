import React, { useState } from "react";
import { Route, Switch, Link } from 'react-router-dom';
import Axios from 'axios';


// Components
import Header from './Header';
import Hero from './Hero';
import CTA from './CTA';
import Form from './Form';
import FormContainer from "./FormContainer";

const App = () => {
  const initialFormValues = {
    size: '',
    sauce: '',
    pepperonni: '',
    olives: '',
    sausage: '',
    extraCheese: '',
    veggies: '',
    instructions: '', 
  }

  const [formValues, setFormValues] = useState(initialFormValues);
  const [orders, setOrders] = useState([])

  const onInputChange = evt => {
    const name = evt.target.name;
    const value = evt.target.value;
    const type = evt.target.type;

    if(type === "checkbox") {
      const isChecked = evt.target.checked;

      return isChecked
        ? setFormValues({
          ...formValues,
          [name]: value,
        })
        : setFormValues({
          ...formValues,
          [name]: '',
        })
    }

    return setFormValues({
      ...formValues,
      [name]: value,
    })
  }

  const submitHandler = evt => {
    evt.preventDefault();

    return Axios.post('https://reqres.in/api/users', formValues)
      .then(res => {
        return setOrders([
          ...orders,
          res.data
        ])
      });
  }

  return (
    <>
      <Header>
        <h1>Lambda Eats</h1>
        <Link className="h5" to="/">Home</Link>
      </Header>

      <Switch>
        <Route path="/pizza">
          <FormContainer>
          <Form changeHandler={onInputChange} submitHandler={submitHandler}/>
          </FormContainer>
          {orders.map(order => {
          return <pre style={{ fontSize: "1.6rem", margin: "1rem auto", padding: "0.5rem", width: "75vw"}} key={order.id}>{JSON.stringify(order)}</pre>
        })}
        </Route>
        <Route path="/">
          <Hero>
            <CTA />
          </Hero>
        </Route>
      </Switch>
    </>
  );
};
export default App;

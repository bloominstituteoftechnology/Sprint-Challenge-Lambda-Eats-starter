import React, {useState, useEffect} from "react";
import {Route, Switch, Link} from "react-router-dom";
import "./App.css";

import axios from "axios";
import * as yup from "yup";

import Form from "./components/form";
import Orders from "./components/orders";
import Home from "./components/home";

const url = "https://reqres.in/api/pizza";

const initialFormValues = {
  name: "",
  size: "",
  sauce: {
    ranch: false,
    marinara: false,
    cheese: false
  },
  toppings: {
    pepperoni: false,
    sausage: false,
    jalapenos: false,
    bacon: false,
    beef: false
  },
  special: ""
};

const initialFormErrors = {
  name: "",
  size: ""
};

const formSchema = yup.object().shape({
  name: yup
    .string()
    .min(3, "username must have at least 3 characters!")
    .required("this is required"),
  size: yup.string().required("this is required"),

  special: yup.string()
});

export default function App() {
  const [newOrder, setNewOrder] = useState([]);
  const [formValues, setFormValues] = useState(initialFormValues);
  const [formErrors, setFormErrors] = useState(initialFormErrors);

  const onInputChange = evt => {
    const name = evt.target.name;
    const value = evt.target.value;

    yup
      .reach(formSchema, name)
      .validate(value)
      .then(valid => {
        setFormErrors({
          ...formErrors,
          [name]: ""
        });
      })
      .catch(error => {
        setFormErrors({
          ...formErrors,
          [name]: error.errors[0]
        });
      });
    setFormValues({
      ...formValues,
      [name]: value
    });
  };

  const onCheckboxChange = evt => {
    setFormValues({
      ...formValues,

      sauce: {
        ...formValues.sauce,
        [evt.target.name]: evt.target.checked
      },
      toppings: {
        ...formValues.toppings,
        [evt.target.name]: evt.target.checked
      }
    });
  };

  const postOrder = order => {
    axios
      .post(url, order)
      .then(res => {
        setNewOrder([res.data, ...newOrder]);
        console.log(res.data);
      })
      .catch(err => {
        console.log("error");
      });
  };

  const onSubmit = evt => {
    evt.preventDefault();

    const newOrder = {
      name: formValues.name,
      size: formValues.size,
      sauce: Object.keys(formValues.sauce).filter(
        sauce => formValues.sauce[sauce] === true
      ),
      toppings: Object.keys(formValues.toppings).filter(
        topping => formValues.toppings[topping] === true
      ),
      special: formValues.special
    };

    postOrder(newOrder);
    setFormValues(initialFormValues);
  };

  return (
    <div className="landing">
      <header>
        <h1 className="headerTitle"></h1>
        <Route path="/pizza">
          <Link to="/">Home</Link>
        </Route>
      </header>
      <Switch>
        <Route exact path="/" component={Home} />

        <Route path="/pizza">
          <Form
            values={formValues}
            onInputChange={onInputChange}
            onCheckboxChange={onCheckboxChange}
            onSubmit={onSubmit}
            errors={formErrors}
          />
        </Route>
      </Switch>

      {newOrder.map(order => {
        return <Orders key={order.name} info={order} />;
      })}
    </div>
  );
}

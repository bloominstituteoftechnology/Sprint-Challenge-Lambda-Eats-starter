import React, { useState, useEffect } from 'react';
import axios from 'axios';
import * as yup from 'yup';

import PizzaForm from './PizzaForm';
import Pizza from './PizzaCard';
import PizzaCard from './PizzaCard';

                                    //---> Url <---
const url = 'https://reqres.in/api/users';

// axios
//   .get(url)
//   .then(res => {
//     console.log(res.data);
//   })
//   .catch(err => {
//     console.log(err);
//   });

                                    //---> Initial Values <---
const initialFormValues = {
  //Text input
  username: '',
  //DropDown
  sizes: '',
  //Checkboxes
  toppings: {
    pepperoni: false,
    bacon: false,
    extra_cheese: false,
    chicken: false,
  },
  //Text Input
  information: '',
};

                                    //---> initial Errors <---
const initialFormErrors = {
  username: '',
  sizes: '',
};

                                     //---> Yup Errors <---
const formSchema = yup.object().shape({
  username: yup
    .string()
    .min(3, 'Username must have at least 3 characters!')
    .required('Username is required!'),
  sizes: yup.string(),

  information: yup.string(),
});

function BuildPizza() {
                                     //---> State <---
  const [pizzas, setPizzas] = useState([]);
  const [formValues, setFormValues] = useState(initialFormValues);

  // const [formDisabled, setFormDisabled] = useState(true);
  const [formErrors, setFormErrors] = useState(initialFormErrors);

  const postPizza = pizza => {
    // minus id
    axios
      .post(url, pizza)
      .then(res => {
        setPizzas([res.data, ...pizzas]);
      })
      .catch(err => {
        debugger;
      });
  };

                                    //--->Handlers <---
  const onInputChange = evt => {
    const name = evt.target.name;
    const value = evt.target.value;

                                    //---> Yup Validator for username <---
    yup
      .reach(formSchema, name)
      .validate(value)
      .then(valid => {
        //Validates
        //Clear Error
        setFormErrors({
          ...formErrors,
          [name]: '',
        });
      })
      .catch(err => {
        setFormErrors({
          ...formErrors,
          [name]: err.errors[0],
        });
      });

    setFormValues({
      ...formValues,
      [name]: value,
    });
  };

  const onCheckboxChange = evt => {
    const { name } = evt.target;
    const isChecked = evt.target.checked;

    setFormValues({
      ...formValues,
      toppings: {
        ...formValues.toppings,
        [name]: isChecked,
      },
    });
  };

  const onSubmit = evt => {
    evt.preventDefault();

    const newPizza = {
      username: formValues.username,
      info: formValues.info,
      sizes: formValues.sizes,
      toppings: Object.keys(formValues.toppings).filter(
        topping => formValues.toppings[topping] === true
      ),
    };

    postPizza(newPizza);
    setFormValues(initialFormValues);
  };

  return (
    <div>
      <h1>Build Your Pizza here</h1>
      <PizzaForm
        values={formValues}
        onInputChange={onInputChange}
        onCheckboxChange={onCheckboxChange}
        onSubmit={onSubmit}
        errors={formErrors}
      />
      {pizzas.map(pizza => {
        return <PizzaCard key={pizza.id} details={pizza} values={formValues} />;
      })}
    </div>
  );
}

export default BuildPizza;
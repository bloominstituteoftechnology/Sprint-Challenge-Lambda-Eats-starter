import React, {useState, useEffect} from 'react';
import {Route, Switch, Link} from 'react-router-dom';

import axios from 'axios';
import Form from './components/Forms';

// Post URL
const url = 'https://reqres.in/api/users'

// Form Values
const initialFormValues = {
  customer_name: '',
  size: '',
  sauce: '',
  toppings: '',
  instructions: ''
}

const initialOrderList = {
  customer_name: 'Initial-Test',
  size: 'Extra-Large',
  sauce: 'BBQ',
  toppings: [
    'all meat'
  ],
  instructions: 'Contact-less Delivery'
}

const App = () =>{
  const [orderList, setOrderList] = useState([]);
  const [formValues, setFormValues] = useState(initialFormValues);

  const getOrders = () => {
    axios
      .get(url)

      .then(res => {
        console.log(res.data)
        setOrderList(res.data)
      })

      .catch(err => {
        console.log(err)
      })
  }

  useEffect(() => {
    getOrders()
  }, [])

  const postOrder = order => {
    axios
      .post(url, order)

      .then(res => {
        console.log(res)
        setOrderList([
          ...orderList,
          res.data
        ])
      })

      .catch(err => {
        console.log(err)
      })
  }

  const onInputChange = evt => {
    const name = evt.target.name;
    const value = evt.target.value;

    setFormValues({
      ...formValues,
      [name]: value
    })
  }

  const onCheckBoxChange = evt => {
    const {name} = evt.target;
    const isChecked = evt.target.checked;

    setFormValues({
      ...formValues,
      
      toppings: {
        ...formValues.toppings,
        [name]: isChecked
      }
    })
  }

  const onRadioChange = evt => {
    const {name} = evt.target
    const value = evt.target.value

    setFormValues({
      ...formValues,

      sauce: {
        ...formValues.sauce,
        [name]: value
      }
    })
  }

  const onSubmit = evt => {
    evt.preventDefault()

    const newOrder = {
      customer_name: formValues.customer_name,
      size: formValues.size,
      sauce: Object.keys(formValues.sauce),
      toppings: Object.keys(formValues.toppings)
        .filter(topping => formValues.toppings[topping] === true)
    }

    postOrder(newOrder)
    setFormValues(initialFormValues)
  }

  return (
    <div>
      <div className = {'header container'}>
        <h1>Lambda Eats</h1>

        <div className = {'header-buttons'}>
          <Link to = '/'>
            <button id = {'home-button'}>
              Home
            </button>
          </Link>

          <button id = {'help-button'}>
            Help
          </button>
        </div>
      </div>

      <Switch>
        <Route path = '/Pizza'>
          <Form
            values = {formValues}
            onInputChange = {onInputChange}
            onCheckBoxChange = {onCheckBoxChange}
            onRadioChange = {onRadioChange}
            onSubmit = {onSubmit}
          />
        </Route>

        <Route path = '/'>
          <div className = {'hero-image container'}>
            <img src = './Image/Pizza.jpg' alt = 'Build your own pizza'/>

            <div className = {'centered'}>
              Your Favoirte Food, Delivered While Your Learning!!!
            </div>

            <Link to = '/Pizza'>
              <button>
                CLICK NOW!!!
              </button>
            </Link>
            
          </div>
        </Route>
      </Switch>
    </div>
  );
};

export default App;

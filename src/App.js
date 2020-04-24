import React, { useState, useEffect } from 'react';
import { Route, Switch, Link } from 'react-router-dom';
import './App.css';


import axios from 'axios'
import * as yup from 'yup'
import Form from './components/form'
import User from './components/Users';
import Home from './components/home'

const url = 'https://reqres.in/api/users'

const initialFormValues = {
  size: '',
  sauce: {
    ranch: false,
    marinara: false,
    cheese: false,
  },
  toppings: {
    pepperoni: false,
    sausage: false,
    jalapenos: false,
    bacon: false,
    beef: false,
  },
  special: '',

}

const initialFormErrors = {
  size: '',
  sauce: '',
  toppings: '',
  special: '',
}

const formSchema = yup.object().shape({

choice: yup
  .string()
  .matches(/(Small|Large)/)
  .required('this is required'),


  sauce: yup
      .string()
      .matches(/(ranch|marinara|cheese)/, 'either single or married')
      .required('civil status is required'),
      toppings: yup
          .string()
          .matches(/(pepperoni|sausage|jalapenos|bacon|beef)/, 'either single or married')
          .required('civil status is required'),
          special: yup
            .string()
            .min(3, 'username must have at least 3 characters!')
            .required('username is required!'),


})

export default function App() {
  const [users, setUsers] = useState([])
  const [formValues, setFormValues] = useState(initialFormValues)

  const [formDisabled, setFormDisabled] = useState(true)
  const [formErrors, setFormErrors] = useState(initialFormErrors)


  const postUsers = user => {

    axios.post(url, user)
    .then(res => {
      setUsers([...users, res.data])

    })
    .catch(error => {

    })
  }

  useEffect(() => {

    formSchema.isValid(formValues)
    .then(valid => {
      setFormDisabled(!valid)
    })
  }, [formValues])


  const onSubmit = evt => {
    evt.preventDefault()


  const newUsers = {
    size: formValues.size,
    sauce: formValues.sauce,
    toppings: formValues.toppings,
    terms: formValues.terms,
  }

  postUsers(newUsers)
  setFormValues(initialFormValues)

}

const onInputChange = evt => {
  const name = evt.target.name
  const value = evt.target.value

  yup.reach(formSchema, name)
  .validate(value)
  .then(valid => {

    setFormErrors({
      ...formErrors,
      [name]: '',
    })
  })
  .catch(error => {
    setFormErrors({
      ...formErrors,
      [name]: error.errors[0]
    })
  })
  setFormValues({
    ...formValues,
    [name]: value,
  })
}

const onCheckboxChange = evt => {
  const { name } = evt.target
  const isChecked = evt.target.checked

  setFormValues({
    ...formValues,
    sauce: {
      ...formValues.sauce,
      [name]: isChecked,
    },
    toppings: {
      ...formValues.sauce,
      [name]: isChecked,
    }
  })
}


 return (
    <div className="App">




          <Form
            values={formValues}
            onInputChange={onInputChange}
            onCheckboxChange={onCheckboxChange}
            onSubmit={onSubmit}
            disabled={formDisabled}
            errors={formErrors}
          />


          {
            users.map(user => {
              return (
                <User key={user.id} details={user} />
              )
            })
          }



    </div>
  )
}

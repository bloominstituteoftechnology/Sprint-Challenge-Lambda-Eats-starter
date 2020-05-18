import React, {useState, useEffect} from 'react';
import { Form, Input, FormGroup, Label, CustomInput, Button, FormFeedback } from 'reactstrap';
import * as yup from 'yup';
import axios from 'axios';
import './Form.css';

const formSchema = yup.object().shape({
  person: yup
  .string()
  .required('Please input your name.')
  .min(2, 'Name must be longer than 2 characters.'),
  size: yup
  .string(),
  sauce: yup
  .string(),
  pepperoni: yup
  .boolean(),
  sausage: yup
  .boolean(),
  bacon: yup
  .boolean(),
  extraCheese: yup
  .boolean(),
  gfSelector: yup
  .boolean(),
  specialInstruction: yup
  .string(),
   amountOrdered: yup
   .number(),
});


const OrderForm = () => {

  // Form default State
  const [formState, setFormState] = useState({
    person: '',
    size: '',
    sauce: '',
    pepperoni: false,
    sausage: false,
    bacon: false,
    extraCheese: false,
    gfSelector: false,
    specialInstruction: '',
    amountOrdered: "",
  })

  const [buttonDisabled, setButtonDisabled] = useState(true);

  useEffect(() => {
    formSchema.isValid(formState).then(valid => {
      setButtonDisabled(!valid);
    });
  }, [formState]);

  // Setting error State
  const [errorState, setErrorState] = useState({
    person: '',
    size: '',
    sauce: '',
    pepperoni: '',
    sausage: '',
    bacon: '',
    extraCheese: '',
    gfSelector: '',
    specialInstruction: '',
    amountOrdered: "",
  });

  // Check Validation for name and amount ordered
  const validate = e => {
    let value = e.target.type === 'checkbox' ? e.target.checked : e.target.value
    yup
      .reach(formSchema, e.target.name)
      .validate(value)
      .then(valid => {
        setErrorState({
          ...errorState,
          [e.target.name]: ''
        });
      })
      .catch(err => {
        setErrorState({
          ...errorState,
          [e.target.name]: err.errors[0]
        });
      });
  };

  const inputChange = e => {
    e.persist();
    validate(e);
    let value = e.target.type === 'checkbox' ? e.target.checked : e.target.value
    setFormState({ ...formState, [e.target.name]: value });
    };

  const formSubmit = e => {
    e.preventDefault();
    axios
      .post('https://reqres.in/api/users', formState)
      .then( (response) => {
        console.log(response.data)})
      .catch(err => console.log(err));
  };

  return (
    <Form onSubmit={formSubmit}>
      <h1>Build Your Own Pizza</h1>
      <FormGroup>
        <Label for='person'>
          <h2>Your Name</h2>
          <Input type='text' name='person' id='person' placeholder='Name or no pizza' onChange={inputChange} value={formState.name} data-cy="name-input"/>
          {errorState.person.length > 0 ? <FormFeedback>{errorState.person}</FormFeedback> : null}
        </Label>
      </FormGroup>
      <FormGroup>
        <Label for='size'>
          <h2>Choice of Size</h2>
          <p>*Required</p>
          <div>
          <Input type='select' name='size' id='size' placeholder='Select' onChange={inputChange} value={formState.size}>
            <option>Small</option>
            <option>Medium</option>
            <option>Large</option>
            <option>Extra Large</option>
          </Input>
          {errorState.size.length > 0 ? <FormFeedback>{errorState.size}</FormFeedback> : null}
          </div>
        </Label>
      </FormGroup>
      <FormGroup>
        <Label for='c'>
          <h3>Choice of sauce</h3>
          <p>*Required</p>
        <div>
        <Input type='select' name='sauce' id='sauce' placeholder='Select' onChange={inputChange} value={formState.size}>
            <option>Original Red</option>
            <option>Garlic Ranch</option>
            <option>BBQ</option>
          </Input>
          {errorState.sauce.length > 0 ? <FormFeedback>{errorState.sauce}</FormFeedback> : null}
        </div>
        </Label>
      </FormGroup>
      <FormGroup check>
      <h2>Choose Your Toppings</h2>
        <Label check for='pepperoni'>
            <Input type='checkbox' name='pepperoni' id='pepperoni' onChange={inputChange} value={formState.pepperoni} data-cy="checkbox" />{' '}
              Pepperoni
        </Label>
        {errorState.pepperoni.length > 0 ? <FormFeedback>{errorState.pepperoni}</FormFeedback> : null}
       <Label check for='sausage'>
            <Input type='checkbox' name='sausage' id='sausage' onChange={inputChange} value={formState.sausage} data-cy="checkbox" />{' '}
              Sausage
        </Label>
        {errorState.sausage.length > 0 ? <FormFeedback>{errorState.sausage}</FormFeedback> : null}
        <Label check for='bacon'>
              <Input type='checkbox' name='bacon' id='bacon' onChange={inputChange} value={formState.bacon} data-cy="checkbox" />{' '}
              Bacon
        </Label>
        {errorState.bacon.length > 0 ? <FormFeedback>{errorState.bacon}</FormFeedback> : null}
        <Label check for='extraCheese'>
              <Input type='checkbox' name='extraCheese' id='extraCheese' onChange={inputChange} value={formState.extraCheese} data-cy="checkbox" />{' '}
              Bacon
        </Label>
        {errorState.extraCheese.length > 0 ? <FormFeedback>{errorState.extraCheese}</FormFeedback> : null}
      </FormGroup>
      <FormGroup>
        <Label for='gfSelector'>
          <h2>Choice of Subtitute</h2>
          <CustomInput type='switch' name='gfSelector' id='gfSelector' label='Gluten-Free Crust (+ $5.00, Small size only)' onChange={inputChange} value={formState.gfSelector} />
          {errorState.gfSelector.length > 0 ? <FormFeedback>{errorState.gfSelector}</FormFeedback> : null}
        </Label>
      </FormGroup>
      <FormGroup>
        <Label for='specialInstruction'>
          <Input type='textarea' name='specialInstruction' id='specialInstruction' placeholder='Anything else you need to tell us?' onChange={inputChange} value={formState.specialIntructions} />
          {errorState.specialInstruction.length > 0 ? <FormFeedback>{errorState.specialInstruction}</FormFeedback> : null}
        </Label>
      </FormGroup>
      <FormGroup>
        <Label for='amountOrdered'>
          <Input type='number' name='amountOrdered' id='amountOrdered' onChange={inputChange} value={formState.amountOrdered} />
        </Label>
      </FormGroup>
      <pre>{JSON.stringify(formState, null, 2)}</pre>
      <Button disabled={buttonDisabled} data-cy="submit">Add to Order</Button>
    </Form>
  )
}

export default OrderForm;
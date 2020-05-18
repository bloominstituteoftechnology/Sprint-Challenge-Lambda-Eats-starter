import React, {useState, useEffect} from 'react';
import { Form, Input, FormGroup, Label, CustomInput, Button, FormFeedback } from 'reactstrap';
import * as yup from 'yup';
import axios from 'axios';

const formSchema = yup.object().shape({
  person: yup
  .string()
  .required('Please input your name.')
  .min(2, 'Name must be longer than 2 characters.'),
  size: yup
  .string()
  .required('Please select a size.'),
  sauce: yup
  .string(),
  toppings: yup
  .string(),
  gfSelector: yup
  .boolean(),
  specialInstruction: yup
  .string(),
   amountOrdered: yup
   .number()
   .required('At least 1 pizza needed for purchase')
   .min(1, 'Amount can not be lower than 1.')
});


const OrderForm = () => {

  // Form default State
  const [formState, setFormState] = useState({
    person: '',
    size: '',
    sauce: '',
    toppings: '',
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
    toppings: '',
    gfSelector: "",
    specialInstruction: '',
    amountOrdered: "",
  });

  // Check Validation for name and amount ordered
  const validate = e => {
    let value = '';
    if (e.target.type === 'checkbox' || e.target.type === 'radio') {
      if (e.target.checked) {
        value = e.target.value;
      }
    } else {
      value = e.target.value;
    }
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
    let value = '';
    if (e.target.type === 'checkbox' || e.target.type === 'radio') {
      if (e.target.checked) {
        value = e.target.value;
      }
    } else {
      value = e.target.value;
    }
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
          <Input type='text' name='person' id='person' placeholder='Name or no pizza' onChange={inputChange} value={formState.name}/>
          {errorState.person.length > 0 ? <FormFeedback>{errorState.person}</FormFeedback> : null}
        </Label>
      </FormGroup>
      <FormGroup>
        <Label for='size'>
          <h2>Choice of Size</h2>
          <p>Required</p>
          <div>
          <Input type='select' name='size' id='size' placeholder='Select' onChange={inputChange} value={formState.size}>
            <option>Small</option>
            <option>Medium</option>
            <option>Large</option>
            <option>Extra Large</option>
          </Input>
          {errorState.size.length > 0 ? <FormFeedback>{errorState.person}</FormFeedback> : null}
          </div>
        </Label>
      </FormGroup>
      <FormGroup>
        <Label for='sauce'>
          <h3>Choice of sauce</h3>
          <p>Required</p>
        <div>
          <Input type='radio' name='sauce' id='sauceOR' onChange={inputChange} value ='OriginalRed' />
          Original Red
          <Input type='radio' name='sauce' id='sauceGR' onChange={inputChange} value='GarlicRanch' />
          Garlic Ranch
          <Input type='radio' name='sauce' id='sauceBBQ' onChange={inputChange} value='BBQSuace' />
          BBQ Sauce
        </div>
        {errorState.sauce.length > 0 ? <FormFeedback>{errorState.sauce}</FormFeedback> : null}
        </Label>
      </FormGroup>
      <FormGroup check>
        <Label check for='toppings'>
          <h2>Choose Your Toppings</h2>
          <div className='toppingCheckboxes'>
            <Input type='checkbox' name='toppings' id='pepperoni' onChange={inputChange} value='Pepperoni'/>{' '}
              Pepperoni
            <Input type='checkbox' name='toppings' id='sausage' onChange={inputChange} value='Sausage'/>{' '}
              Sausage
            <Input type='checkbox' name='toppings' id='bacon' onChange={inputChange} value='Bacon'/>{' '}
              Bacon
          </div>
          {errorState.toppings.length > 0 ? <FormFeedback>{errorState.toppings}</FormFeedback> : null}
        </Label>
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
      <Button disabled={buttonDisabled}>Add to Order</Button>
    </Form>
  )
}

export default OrderForm;
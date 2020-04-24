import React from 'react';
import { Button, Form, FormGroup, Label, Input, FormText, Alert } from 'reactstrap';

const FormComponent = (props) => {
  const { changeHandler, submitHandler, errors } = props;

  return (
    <div>
      <h1>Build your own Pizza</h1>
      <Form>
        <FormGroup>
          <Label for="name">Name for order</Label>
          <Alert style={{ display: `${errors.name ? "block" : "none"}`}} color="danger">{errors.name}</Alert>
          <Input 
            onChange={changeHandler}
            type="text" 
            name="name" 
            id="name"
          >
          </Input>
        </FormGroup>
        <FormGroup>
          <Label for="size">Choice of Size</Label>
          <Input 
            onChange={changeHandler}
            type="select" 
            name="size" 
            id="size"
          >
            <option defaultValue>Please Choose a size</option>
            <option>Sm</option>
            <option>M</option>
            <option>L</option>
            <option>XL</option>
          </Input>
        </FormGroup>
        <FormGroup tag="fieldset">
          <legend>Choice of Sauce</legend>
          <FormGroup check>
            <Label check>
              <Input
              onChange={changeHandler}
                type="radio" 
                name="sauce" 
                value="Original Red"
              />{' '}
              Original Red
            </Label>
          </FormGroup>
          <FormGroup check>
            <Label check>
              <Input
                onChange={changeHandler}
                type="radio" 
                name="sauce" 
                value="Garlic Ranch"
              />{' '}
              Garlic Ranch
            </Label>
          </FormGroup>
          <FormGroup check>
          <Label check>
            <Input 
              onChange={changeHandler}
              type="radio" 
              name="sauce" 
              value="BBQ Sauce"
            />{' '}
              BBQ Sauce
          </Label>
          </FormGroup>
        </FormGroup>
        <FormGroup tag="fieldset">
          <legend>Choice of toppings</legend>
          <FormGroup check>
          <Label check>
            <Input
              onChange={changeHandler}
              name="pepperonni"
              value="pepperonni"
              type="checkbox" 
            />{' '}
            Pepperonni
          </Label>
        </FormGroup>
        <FormGroup check>
          <Label check>
          <Input
              onChange={changeHandler}
              name="olives"
              value="olives"
              type="checkbox" 
            />{' '}
            Olives
          </Label>
        </FormGroup>
        <FormGroup check>
          <Label check>
          <Input
              onChange={changeHandler}
              name="sausage"
              value="sausage"
              type="checkbox" 
            />{' '}
            Sausage
          </Label>
        </FormGroup>
        <FormGroup check>
          <Label check>
          <Input
              onChange={changeHandler}
              name="extraCheese"
              value="extra cheese"
              type="checkbox" 
            />{' '}
            Extra Cheese
          </Label>
        </FormGroup>
        <FormGroup check>
          <Label check>
          <Input
              onChange={changeHandler}
              name="veggies"
              value="veggies"
              type="checkbox" 
            />{' '}
            Veggies
          </Label>
        </FormGroup>
        </FormGroup>
        <FormGroup>
          <Label for="specialInstructions">Special Instructions</Label>
          <Input 
            onChange={changeHandler}
            type="textarea" 
            name="instructions" 
            id="specialInstructions" 
          />
        </FormGroup>
        <FormGroup>
          <FormText color="muted">
            Anything else?
          </FormText>
        </FormGroup>
        <Button onClick={submitHandler}>Add to Order</Button>
      </Form>
    </div>
  );
}

export default FormComponent;

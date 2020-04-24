import React from 'react';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

const FormComponent = (props) => {
  return (
    <div>
      <h1>Build your own Pizza</h1>
      <Form>
        <FormGroup>
          <Label for="size">Choice of Size</Label>
          <Input type="select" name="size" id="size">
            <option defaultValue>Please Choose a size</option>
            <option>Sm</option>
            <option>M</option>
            <option>L</option>
            <option>XL</option>
          </Input>
        </FormGroup>
        {/* <FormGroup>
          <Label for="exampleText">Text Area</Label>
          <Input type="textarea" name="text" id="exampleText" />
        </FormGroup>
        <FormGroup>
          <FormText color="muted">
            This is some placeholder block-level help text for the above input.
            It's a bit lighter and easily wraps to a new line.
          </FormText>
        </FormGroup> */}
        <FormGroup tag="fieldset">
          <legend>Choice of Sauce</legend>
          <FormGroup check>
            <Label check>
              <Input type="radio" name="radio1" />{' '}
              Original Red
            </Label>
          </FormGroup>
          <FormGroup check>
            <Label check>
              <Input type="radio" name="radio1" />{' '}
              Garlic Ranch
            </Label>
          </FormGroup>
          <FormGroup check>
          <Label check>
            <Input type="radio" name="radio1" />{' '}
              BBQ Sauce
          </Label>
          </FormGroup>
        </FormGroup>
        <FormGroup tag="fieldset">
          <legend>Choice of toppings</legend>
          <FormGroup check>
          <Label check>
            <Input type="checkbox" />{' '}
            Pepperonni
          </Label>
        </FormGroup>
        <FormGroup check>
          <Label check>
            <Input type="checkbox" />{' '}
            Olives
          </Label>
        </FormGroup>
        <FormGroup check>
          <Label check>
            <Input type="checkbox" />{' '}
            Extra Cheese
          </Label>
        </FormGroup>
        <FormGroup check>
          <Label check>
            <Input type="checkbox" />{' '}
            Veggies
          </Label>
        </FormGroup>
        </FormGroup>
        <Button>Submit</Button>
      </Form>
    </div>
  );
}

export default FormComponent;

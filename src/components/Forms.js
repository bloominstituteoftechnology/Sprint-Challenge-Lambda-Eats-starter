import React from 'react'

export default function Form(props) {
  const {
    values,
    onInputChange,
    onCheckBoxChange,
    onRadioChange, 
    onSubmit
  } = props

  return (
    <form className = 'pizza'>
      <div className = 'errors'>

      </div>

      <h2>Build Your Own Pizza</h2>
      <img src = './Image/Pizza' alt='A pizza you can build'></img>

      <h2>Name:</h2>
      <label>
        <input
          value = {values.customer_name}
          onChange = {onInputChange}
          name = 'customer_name'
          type = 'text'
        />
      </label>

      <h2>Choice of Size:</h2>
      <label>
        <select
          value = {values.size}
          onChange = {onInputChange}
          name = 'size'
        >
          <option value = ''>Select 1:</option>
          <option value = 'Small'>Small</option>
          <option value = 'Medium'>Medium</option>
          <option value = 'Large'>Large</option>
        </select>
      </label>

      <h2>Choice of Sauce</h2>
      <div>
        <input
          type = 'radio'
          id = 'sauce_choice1'
          name = 'sauce'
          value = 'original'
          onChange = {onRadioChange}
          checked
        />
        <label>Original Red</label>

        <input
          type = 'radio'
          id = 'sauce_choice2'
          name = 'sauce'
          value = 'garlic_ranch'
          onChange = {onRadioChange}
        />
        <label>Garlic Ranch</label>

        <input
          type = 'radio'
          id = 'sauce_choice3'
          name = 'sauce'
          value = 'bbq'
          onChange = {onRadioChange}
        />
        <label>BBQ</label>

        <input
          type = 'radio'
          id = 'sauce_choice4'
          name = 'sauce'
          value = 'alfredo'
          onChange = {onRadioChange}
        />
        <label>Spinich Alfredo</label>
      </div>

      <h2>Choice of Toppings:</h2>
      <label>
        <input
          checked = {values.toppings.pepperoni}
          onChange = {onCheckBoxChange}
          name = 'pepperoni'
          type = 'checkbox'
        />
        Pepperoni
      </label>

      <label>
        <input
          checked = {values.toppings.sausage}
          onChange = {onCheckBoxChange}
          name = 'sausage'
          type = 'checkbox'
        />
        Sausage
      </label>

      <label>
        <input
          checked = {values.toppings.peppers}
          onChange = {onCheckBoxChange}
          name = 'peppers'
          type = 'checkbox'
        />
        Peppers
      </label>

      <label>
        <input
          checked = {values.toppings.ham}
          onChange = {onCheckBoxChange}
          name = 'ham'
          type = 'checkbox'
        />
        Ham
      </label>

      <h2>Special Delivery Istructions:</h2>
      <label>
        <input
          value = {values.instructions}
          onChange = {onInputChange}
          name = 'instructions'
          type = 'text'
        />
      </label>

      <button
        onClick = {onSubmit}
      >
        Place Order
      </button>
    </form>
  )
}
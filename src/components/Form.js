import React from 'react';

function PizzaForm({
  values,
  onInputChange,
  onCheckboxChange,
  onSubmit,
  disabled,
  errors,
}) {
  return (
    <form onSubmit={onSubmit}>
      <h1>Pizza Form</h1>
                                    {/* ---> For Errors <--- */}
      <div>
        <h1>{errors.username}</h1>
      </div>
      <h4>User Name</h4>
      <label>
        <input
          value={values.username}
          onChange={onInputChange}
          name='username'
          type='text'
        />
      </label>
                                    {/* ---> For Drop down <--- */}
      <label>
        <select
          value={values.sizes}
          onChange={onInputChange}
          name='sizes'
          id=''
        >
          <option defaultValue=''>Please choose a size</option>
          <option value='small'>Small</option>
          <option value='medium'>Medium</option>
          <option value='large'>Large</option>
        </select>
      </label>
                                     {/* ---> For The CheckBox <--- */}
      <h4>Add Toppings</h4>
      <label>
        <input
          value={values.toppings.pepperoni}
          onChange={onCheckboxChange}
          name='pepperoni'
          type='checkbox'
        />
        Pepperoni
      </label>
      <label>
        <input
          value={values.toppings.bacon}
          onChange={onCheckboxChange}
          name='bacon'
          type='checkbox'
        />
        Bacon
      </label>
      <label>
        <input
          value={values.toppings.extra_cheese}
          onChange={onCheckboxChange}
          name='extra_cheese'
          type='checkbox'
        />
        Extra Cheese
      </label>
      <label>
        <input
          value={values.toppings.chicken}
          onChange={onCheckboxChange}
          name='chicken'
          type='checkbox'
        />
        Chicken
      </label>
                                     {/* ---> The Text Input <---*/}
      <h4>Special Instructions</h4>
      <label>
        <input
          value={values.information}
          onChange={onInputChange}
          name='information'
          type='text'
        />
      </label>
      <button name='user_submit_form'>Add to Order</button>
    </form>
  );
}

export default PizzaForm;
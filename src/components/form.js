import React from 'react'

function Form(props){
  const {
    values,
    onInputChange,
    onCheckboxChange,
    onSubmit,
    errors,
  } = props


  return(
    <form className='form-class'>
      <h1>Build Your Own Pizza</h1>
        <div className='errors'>
        {errors.name}
        </div>
        <div className='title settings'>
          <label><h2>Name:</h2>
          <input
            value={values.name}
            onChange={onInputChange}
            name='name'
            type='text'
            /></label>
            </div>
        <div className='choice settings'>
        <label><h2>Choice of Size:</h2>
          <select
            value={values.size}
            onChange={onInputChange}
            name='size'
          >
            <option defaultValue=''>Please Choose</option>
            <option value='small'>Small</option>
            <option value='large'>Large</option>
          </select></label>
          </div>

          <div className='sauce settings'>
          <h2>Choice of Sauce</h2>
        <label><input
          checked={values.sauce.ranch}
          onChange={onCheckboxChange}
          name='ranch'
          type='checkbox'/> Ranch</label>

        <label><input
          checked={values.sauce.marinara}
          onChange={onCheckboxChange}
          name='marinara'
          type='checkbox'/> Marinara</label>

        <label><input
          checked={values.sauce.cheese}
          onChange={onCheckboxChange}
          name='cheese'
          type='checkbox'/> Cheese</label>
          </div>

            <div className='toppings settings'>
              <h2>Choice of Toppings</h2>
            <label><input
              checked={values.toppings.pepperoni}
              onChange={onCheckboxChange}
              name='pepperoni'
              type='checkbox'/> Pepperoni</label>

            <label><input
              checked={values.toppings.sausage}
              onChange={onCheckboxChange}
              name='sausage'
              type='checkbox'/> Sausage</label>

            <label><input
              checked={values.toppings.jalapenos}
              onChange={onCheckboxChange}
              name='jalapenos'
              type='checkbox'/> Jalapenos</label>

              <label><input
                checked={values.toppings.bacon}
                onChange={onCheckboxChange}
                name='bacon'
                type='checkbox'/> Bacon</label>

                <label><input
                  checked={values.toppings.beef}
                  onChange={onCheckboxChange}
                  name='beef'
                  type='checkbox'/> Beef</label>

                    </div>

                <div className='special settings'>
                  <label><h2>Special Instructions</h2>
                  <input
                    value={values.special}
                    onChange={onInputChange}
                    name='special'
                    type='text'
                    /></label>

                  <div className='order'>
                    <button onClick={onSubmit} >submit</button>

                  </div>


              </div>




    </form>
  )
}

export default Form

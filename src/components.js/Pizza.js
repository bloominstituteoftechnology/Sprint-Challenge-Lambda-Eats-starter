import React from 'react';
import { Link } from 'react-router-dom';

const Pizza = () => {
  return (
    <div>
      <Link to="/">Home</Link>

      <form>
        <label htmlFor="Name">
          Customer Name:
          <input />
        </label>
        <br />
        <label htmlFor="Pizza Size">
          Pizza Size:
          <select id="size" name="PizzaSize">
            <option value="XS">XS</option>
            <option value="S">S</option>
            <optipon value="M">M</optipon>
            <option value="L">L</option>
            <option value="XL">XL</option>
          </select>
        </label>
        <br />
        <label htmlFor="toppings" className="toppings">
          <input type="checkbox" name="toppings" checked={false} />
          Sausage
        </label>
        <br />
        <label htmlFor="toppings" className="toppings">
          <input type="checkbox" name="toppings" checked={false} />
          Bacon
        </label>{' '}
        <br />
        <label htmlFor="toppings" className="toppings">
          <input type="checkbox" name="toppings" checked={false} />
         Pineapple
        </label>
        <br />
        <label htmlFor="toppings" className="toppings">
          <input type="checkbox" name="toppings" checked={false} />
          BBQ
        </label>
        <label>
        <br/>
            Special Instructions:
            <br/>
            <textarea name="instructions" />
        </label>
        <br/>
        <button >Add to order</button>
      </form>
    </div>
  );
};

export default Pizza;

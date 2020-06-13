import React from 'react';

function Pizza() {
  return (
    <div className="container">
        <div className="form">
        <form>
            <h1>Build Your Own Pizza</h1>
            <div className="header">
                <h2>Choice of Size</h2>
                <p>Required</p>
            </div>
            <div>
                <select>
                    <option value="">Select</option>
                    <option>Small</option>
                    <option>Medium</option>
                    <option>Large</option>
                    <option>Xtra Large</option>
                </select>
            </div>
            <div className="header">
                <h2>Choice of Sauce</h2>
                <p>Required</p>
            </div>
            <div>
                <label><input type="radio" />Original Red</label><br />
                <label><input type="radio" />Garlic Ranch</label><br />
                <label><input type="radio" />BBQ Sauce</label><br />
                <label><input type="radio" />Spinach Alfredo</label>
            </div>
            <div className="header">
                <h2>Add Toppings</h2>
                <p>Choose up to 10</p>
            </div>
            <div className="check">
                <label><input type="checkbox" />Peperoni</label>
                <label><input type="checkbox" />Diced Tomatoes</label>
                <label><input type="checkbox" />Sausage</label>
                <label><input type="checkbox" />Black Olives</label>
                <label><input type="checkbox" />Canadian Bacon</label>
                <label><input type="checkbox" />Roasted Garlic</label>
                <label><input type="checkbox" />Spicy Italian Sausage</label>
                <label><input type="checkbox" />Artichoke Hearts</label>
                <label><input type="checkbox" />Grilled Chicken</label>
                <label><input type="checkbox" />Three Cheese</label>
                <label><input type="checkbox" />Onions</label>
                <label><input type="checkbox" />Pineapple</label>
                <label><input type="checkbox" />Green Pepper</label>
                <label><input type="checkbox" />Extra Cheese</label>
            </div>
            <div className="header">
                <h2>Choice of Substitute</h2>
                <p>Choose up to 1</p>
            </div>
            <div>
                <label><input type="checkbox" />Gluten Free Crust (+ $1.00)</label>
            </div>
            <div className="header">
                <h2>Special Instructions</h2>
            </div>
            <div><textarea placeholder="Anything else you'd like to add?" /></div>
        </form>
        <br /><br />
        </div>
    </div>
  );
}

export default Pizza;
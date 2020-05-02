import React from "react";
import ReactDOM from "react-dom";
import { Link } from "react-router-dom";

const Pizza = () => {
    return (
        <div className="main">
            <p>Build your Own Pizza</p>
            <p>Choice of Size</p>
            <form>
                {/* <label for="cars">Choose a car:</label> */}
                <select id="size" name="sizelist" form="size1">
                    <option value="small">Small</option>
                    <option value="medium">Medium</option>
                    <option value="large">Large</option>
                    <option value="extralarge">Extra Large</option>
                </select>


                <div className="radio">
                    <label>
                        <input type="radio" value="option1" checked={true} />
            Original Red
          </label>
                </div>
                <div className="radio">
                    <label>
                        <input type="radio" value="option2" />
            Garlic Ranch
          </label>

                </div>
                <div

                    className="radio">
                    <label>

                        <input type="radio" value="option3" />
                       BBQ Sauce
                    </label>
                </div>

            </form>

            <div className="radio">
                <label>

                    <input type="radio" value="option4" />
                Spinach Alfredo

                   </label>

                   <p>Add Topping</p>

               
            </div>

        </div>
    );
};

export default Pizza;

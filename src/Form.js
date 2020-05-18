import React, { useState } from "react";

//add state

const [zaData, zaSetter] = useState({
  name: "",
  email: "",
  olive: "",
  jalapeno: "",
  mushroom: "",
  feta: "",
});

export default function someZa(props) {
  return (
    //inputs for checkbox
    <div>
      <form>
        <label>
          Olives
          <input type="" name="" onChange="" />
        </label>
        <label>
          Jalapeno
          <input type="" name="" onChange="" />
        </label>
        <label>
          Mushrooms
          <input type="" name="" onChange="" />
        </label>
        <label>
          Feta
          <input type="" name="" onChange="" />
        </label>
      </form>
    </div>
  );
}

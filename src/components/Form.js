import React, {useState, useEffect} from 'react';
import axios from 'axios';
import * as Yup from 'yup';




const pizzaForm = () => {

    const [post, setPost] = useState([])

    


    const [inputForm, setInputForm] = useState({name: "", psize: "", toppings: "", instructions: ""})
    
    
    const handleSubmit = event => {

        event.preventDefault();
        // setInputForms([...inputForms, { ...inputForm, id: Date.now() }]);
        axios.post("https://reqres.in/api/users", inputForm)
        .then(res => {setPost(res.data)
        
           setInputForm({

            name: "", 
            psize: "",
            toppings: "",
            instructions: ""

           }) ;
        }).catch(err => console.log(err.res));
    }; 



    const formSchema = Yup.object().shape({
       name: Yup
       .string()
       .required("Must input a Name."),
        psize: Yup
          .string()
          .required("Must choose a size."),
        toppings: Yup
          .boolean(),
          
        instructions: Yup
          .string()
          
      });

      const [isButtonDisabled, setIsButtonDisabled] = useState(true); 
    
      const [errors, setErrors] = useState({
        name: "",
        psize: "",
        toppings: "",
        instructions: ""
      });

      


      const inputChange = event => {
       
        event.persist();

        const newFormData = {

            ...inputForm,
            [event.target.name]: event.target.type === "checkbox" ? event.target.checked : event.target.value

        };
        validateChange(event);
        setInputForm(newFormData);
    
    };

    useEffect(() => {

        formSchema.isValid(inputForm)
        .then(valid => {

            setIsButtonDisabled(!valid);
        });

    }, [inputForm]);
    

    const validateChange = event => {

        Yup.reach(formSchema, event.target.name)
        .validate(event.target.value)
        .then( valid => {

           setErrors({...errors, [event.target.name]: ""}) 
        })
        .catch(err => setErrors({...errors, [event.target.name]: err.errors[0] }));
    }




    return (

        <form onSubmit={handleSubmit}>

            <label htmlFor="name" >
                Name:
            <input id="name" type="text" name="name" value={inputForm.name} onChange={inputChange} />
            </label>
            <select htmlFor="psize">
                Pizza Size:
            <options id="psize" type="dropdown" name="psize" value="personal" onChange={inputChange} />
            <options id="psize" type="dropdown" name="psize" value="small" onChange={inputChange} />

            <options id="psize" type="dropdown" name="psize" value="medium" onChange={inputChange} />

            <options id="psize" type="dropdown" name="psize" value="large" onChange={inputChange} />
            <options id="psize" type="dropdown" name="psize" value="xtralarge" onChange={inputChange} />


            </select>
            <label htmlFor="toppings">
                Toppings:
            <input type="radio"  value="Plain" onChange={inputChange} />
            <input type="radio"    value="Pepperoni" onChange={inputChange} />
            <input type="radio"   value="Cheese" onChange={inputChange} />
            <input type="radio"   value="Mushrooms" onChange={inputChange} />
            </label>
            <label htmlFor="instructions">
                Special instructions:
            <input id="instructions" type="textbox" name="instructions" value={inputForm.instructions} onChange={inputChange} />
            </label>
            <button >Order Now</button>

        </form>


    )


} 

export default pizzaForm;
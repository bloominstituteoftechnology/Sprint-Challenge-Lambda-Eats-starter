import React, {useState, useEffect} from 'react';
import axios from 'axios';
import * as Yup from 'yup';




const PizzaForm = () => {

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
            toppings:"",
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
          .string(),
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
            [event.target.name]: event.target.type === "radio" ? event.target.checked : event.target.value

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
            {errors.name.length > 0 ? <p className="error">{errors.name}</p> : null}
            </label> 
           
            <label htmlFor="psize"> 
             Pizza Size:
            <select id="psize" name="psize" onChange={inputChange}>
            <option  value="Personal" >Personal</option>
            <option  value="Small" >Small</option>
            <option  value="Medium">Medium</option>
            <option  value="Large" >Large</option>
            <option  value="Xtralarge" >Xtra Large</option>
            </select>
            {errors.psize.length > 0 ? <p className="error">{errors.psize}</p> : null}
            </label>
           
            <label htmlFor="toppings">
                Toppings:
                Plain
            <input id="toppings1" type="radio" name="toppings" value="Plain"   onChange={inputChange} />
            Pepporoni
            <input id="toppings2" type="radio" name="toppings"   value="Pepperoni"  onChange={inputChange} />
            Cheese
            <input id="toppings3" type="radio" name="toppings"  value="Cheese"  onChange={inputChange} />
            Mushrooms
            <input id="toppings4" type="radio" name="toppings" value="Mushrooms"  onChange={inputChange} />
            </label>
           
            <label htmlFor="instructions">
                Special instructions:
            <textarea id="instructions" type="text" name="instructions" value={inputForm.instructions} onChange={inputChange} />
            </label>
           
            <button >Order Now</button>

            <pre>{JSON.stringify(post, null, 2)}</pre>

        </form>


    )


} 

export default PizzaForm;
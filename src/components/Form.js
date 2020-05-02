import React, {useState, useEffect} from 'react';


const pizzaForm = () => {

    const [post, setPost] = useState([])

    
    // const {inputForms, setInputForms} = props;


    const [inputForm, setInputForm] = useState({name: "", psize: "", toppings: "", instructions: ""})
    
    // const handleChange = event => {

    //     setInputForm({...inputForm, [event.target.name]: event.target.value});
    // }

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
        email: Yup
          .string()
          .email("Must be a valid email address.")
          .required("Must include email address."),
        password: Yup
          .string()
          .min(6, "Passwords must be at least 6 characters long.")
          .required("Password is Required"),
        terms: Yup
          .boolean()
          .oneOf([true], "You must accept Terms and Conditions")
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
            <label htmlFor="psize">
                Pizza Size:
            <input id="psize" type="dropdown" name="psize" value={inputForm.psize} onChange={inputChange} />
            </label>
            <label htmlFor="toppings">
                Toppings:
            <input id="toppings" type="checkbox" name="toppings" value={inputForm.toppings} onChange={inputChange} />
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
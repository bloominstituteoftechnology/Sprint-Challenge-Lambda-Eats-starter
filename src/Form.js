import React, {useState} from 'react'
import { Card, CardImg, Form, FormGroup, Input, Dropdown, DropdownToggle, DropdownMenu, Label, Button } from 'reactstrap'
import axios from 'axios'
import * as yup from 'yup'
const Order = () => {
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const [formData, setformData] = useState({
        name: '',
        number: 0,
        sauce: '',
        peppers: false,
        bacon: false,
        onions: false,
        none: false,
        special: ''
    });
    const schema = yup.object().shape({
        name: yup.string().required().min(2),
        number: yup.number().required().positive().integer().min(1),
        sauce: yup.string().required(),
        special: yup.string(),
        bacon: yup.boolean(),
        peppers: yup.boolean(),
        onions: yup.boolean(),
        none: yup.boolean()
    })
    const submit = () => {
        schema.validate(formData).then(() => {
            axios.post('https://reqres.in/api/users', formData).then((res) => {
                console.log("This is your data", res.data)
            })
        })
    }
    const handleChange = (e) => {
        setformData({...formData, [e.target.name]: e.target.value})
    }
    const handleToppings = (e) => {
        setformData({...formData, [e.target.name]: e.target.checked})
    }
    const toggle = () => setDropdownOpen((prevState) => !prevState)
    return(
        <>
        <Card color='info'>
            <h2 style={{color: 'white', margin: '0 auto'}}>
                Make Your Pizza!
            </h2>
            <CardImg src={require('./Assets/Pizza.jpg')} style={{width:'50%', margin: '0 auto'}}/>
        </Card>

        <Form data-cy='submit' style={{margin: '5%'}} onSubmit={(e) => {
            e.preventDefault()
            submit()
        }}>
                <p>Build Your Pizza</p>
                <legend>Name</legend>
                <Input type='text' name='name'data-cy='name' value={formData.name} onChange={handleChange}/>
            <FormGroup>
                <Dropdown isOpen={dropdownOpen} toggle={toggle}>
                    <DropdownToggle caret>
                        {formData.number === 0 ? 'Pizza Size' : formData.number}
                    </DropdownToggle>
                    <DropdownMenu>
                        <div onClick={() => {
                            toggle();
                            setformData({...formData, number: 0})
                        }}>0"</div>
                        <div onClick={() => {
                            toggle();
                            setformData({...formData, number: 12})
                        }}>12"</div>
                        <div onClick={() => {
                            toggle();
                            setformData({...formData, number: 24})
                        }}>24"</div>
                        <div onClick={() => {
                            toggle();
                            setformData({...formData, number: 48})
                        }}>48"</div>
                        <div onClick={() => {
                            toggle();
                            setformData({...formData, number: 60})
                        }}>60"</div>
                    </DropdownMenu>
                </Dropdown>
            </FormGroup>

            <FormGroup tag='fieldset'>
                <legend>Sauce</legend>
                <FormGroup check>
                    <Label check>
                        <Input type='radio' name='sauce' value='red' onChange={handleChange}/>
                        Red
                    </Label>
                    </FormGroup>

                    <FormGroup check>
                    <Label check>
                        <Input type='radio' name='sauce' value='white' onChange={handleChange}/>
                        White
                    </Label>
                    </FormGroup>

                    <FormGroup check>
                    <Label check>
                        <Input type='radio' name='sauce' value='bbq' onChange={handleChange}/>
                        BBQ
                    </Label>
                    </FormGroup>

                    <FormGroup check>
                    <Label check>
                        <Input type='radio' name='sauce' value='none' onChange={handleChange}/>
                        None
                    </Label>
                </FormGroup>
           </FormGroup>

           <FormGroup tag='fieldset'>
                <legend>Toppings</legend>
                <FormGroup check>
                    <Label check>
                        <Input type='checkbox' name='peppers' data-cy='checkbox1' checked={formData.peppers} onChange={handleToppings}/>
                        Green Peppers
                    </Label>
                    </FormGroup>

                    <FormGroup check>
                    <Label check>
                        <Input type='checkbox' name='bacon' data-cy='checkbox2' checked={formData.bacon} onChange={handleToppings}/>
                        Bacon
                    </Label>
                    </FormGroup>

                    <FormGroup check>
                    <Label check>
                        <Input type='checkbox' name='onions'data-cy='checkbox3' checked={formData.onions} onChange={handleToppings}/>
                        Onions
                    </Label>
                    </FormGroup>

                    <FormGroup check>
                    <Label check>
                        <Input type='checkbox' name='none'data-cy='checkbox4' checked={formData.none} onChange={handleToppings} />
                        None
                    </Label>
                </FormGroup>
            </FormGroup>

            <FormGroup>
                <legend>Special Instuctions</legend>
                <Input type='textarea' name='special'value={formData.special} onChange={handleChange} />
            </FormGroup>
            <Button>
                Submit Order
            </Button>
        </Form>
        </>
    )
}

export default Order;
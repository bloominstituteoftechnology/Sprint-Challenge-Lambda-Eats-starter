import React, {useState} from 'react';
import {Form,Card,CardHeader,Dropdown,DropdownItem,DropdownMenu,FormGroup,Label,CardBody,Row,Col, DropdownToggle} from 'reactstrap'
import * as yup from 'yup';
import Axios from 'axios'


const OrderForm = () => {

    const validate = (event) => {
        yup.reach(schema, event.target.name)
    }

    const schema = yup.object().shape({
        name:yup.string().required('must include at least 2 characters').min(2),
        size:yup.string().required('size required'),
        pepperoni:yup.boolean(),
        chicken:yup.boolean(),
        onion:yup.boolean(),        
        peppers:yup.boolean(),
        pineapple:yup.boolean(),
        bacon:yup.boolean(),
        tofu:yup.boolean(),        
    })

    const [formdata, setFormdata] = useState({
        name:'',
        size:'',
        pepperoni:false,
        chicken:false,
        onion:false,        
        peppers:false,
        pineapple:false,
        bacon:false,
        tofu:false,
    })

    const [dropdownOpen, setDropdownOpen]=useState(false)
   
    const toggle = () => {
        setDropdownOpen(isOpen => !isOpen)
    }

    const eventChange = (event) => {
        event.persist()
        setFormdata({...formdata,
            [event.target.name]: event.target.type === 'checKbox'? event.target.checked: event.target.value
        })
    }
   
    console.log(formdata)
    return(
    
    <Card>
        <CardHeader>

        </CardHeader>
        <CardBody>
            <Form>
                <FormGroup>
                    <input type='text' name='name' data-cy='name' value={formdata.name} onChange={eventChange} placeholder='Name here'></input>
                    <Dropdown isOpen={dropdownOpen} toggle={toggle}>
                        <DropdownToggle caret>choose size</DropdownToggle>
                        <DropdownMenu>
                            <DropdownItem onClick={ () => {
                                setFormdata({...formdata, size:'small'})
                            }}>
                                Small
                            </DropdownItem>
                            <DropdownItem onClick={ () => {
                                setFormdata({...formdata, size:'medium'})
                            }}>
                                Medium
                            </DropdownItem>
                            <DropdownItem onClick={ () => {
                                setFormdata({...formdata, size:'large'})
                            }}>
                                Large
                            </DropdownItem>
                            <DropdownItem onClick={ () => {
                                setFormdata({...formdata, size:'x-large'})
                            }}>
                                X Large
                            </DropdownItem>
                        </DropdownMenu>
                    </Dropdown>
                </FormGroup>
                <FormGroup>
                    <h4>Toppings</h4>
                    <FormGroup>
                        <Label>
                            <input type ="checkbox" name='pepperoni' data-cy='pepperoni' value={formdata.pepperoni} onChange={eventChange}></input>
                            Pepperoni
                        </Label>
                    </FormGroup>
                    <FormGroup>
                        <Label>
                            <input type ="checkbox" name='chicken' data-cy='chicken' value={formdata.chicken} onChange={eventChange}></input>
                            Chicken
                        </Label>
                    </FormGroup>
                    <FormGroup>
                        <Label>
                            <input type ="checkbox" name='onion' data-cy='onion' value={formdata.onion} onChange={eventChange}></input>
                            onion
                        </Label>
                    </FormGroup>
                    <FormGroup>
                        <Label>
                            <input type ="checkbox" name='peppers' data-cy='peppers'value={formdata.peppers} onChange={eventChange}></input>
                            Peppers
                        </Label>
                    </FormGroup>
                    <FormGroup>
                        <Label>
                            <input type ="checkbox" name='pineapple' data-cy='pineapple'value={formdata.pineapple} onChange={eventChange}></input>
                            Pineapple
                        </Label>
                    </FormGroup>
                    <FormGroup>
                        <Label>
                            <input type ="checkbox" name='bacon' data-cy='bacon'value={formdata.bacon} onChange={eventChange}></input>
                            Bacon
                        </Label>
                    </FormGroup>
                    <FormGroup>
                        <Label>
                            <input type ="checkbox" name='tofu' data-cy='tofu' value={formdata.tofu} onChange={eventChange}></input>
                            Tofu
                        </Label>
                    </FormGroup>
                </FormGroup>
            </Form>
        </CardBody>
    </Card>
    
    )
}

export default OrderForm
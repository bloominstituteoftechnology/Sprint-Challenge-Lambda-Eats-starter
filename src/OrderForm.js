import React, { useState } from "react";
import { Card, CardImg, Button, Form, FormGroup, Dropdown, DropdownToggle, DropdownMenu } from 'reactstrap';
import axios from 'axios';
import * as yup from 'yup';

const OrderForm = () => {
    const [DropDownOpen, setDropDownOpen] = useState(false);
    const toggle = () => setDropDownOpen((prevState) => !prevState);
    const [formData, setFormData] = useState({
        name: '',
        size: '',
        sauce: '',
        meat: '',
        onions: false,
        greenPepper: false,
        tomato: false,
        bolives: false,
        garlic: false,
        hearts: false,
        pineApple: false,
        tcheese: false,
        xcheese: false,
        special: ''
    });

    const formSchema = yup.object().shape({
        name: yup.string().required(),
        size: yup.string().required(),
        sauce: yup.string().required(),
        meat: yup.string().required(),
        onions: yup.boolean(),
        greenPepper: yup.boolean(),
        tomato: yup.boolean(),
        bolives: yup.boolean(),
        garlic: yup.boolean(),
        hearts: yup.boolean(),
        pineApple: yup.boolean(),
        tcheese: yup.boolean(),
        xcheese: yup.boolean(),
        special: yup.string()
    });
    const submit = () => {
        formSchema.validate(formData)
            .then(() => {
                axios.post('https://reqres.in/api/users', formData)
                    .then((res) => {
                        console.log('This is your order post', res.data)
                    })
            })
    }

    const onInputChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };
    const handleToppings = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.checked
        });
    };
    return (
        <>
            <Card style={{ width: '80%', margin: '0 auto' }}>
                <CardImg src={require('./Pizza.jpg')} />
            </Card>
            <Form onSubmit={(e) => {
                e.preventDefault();
                submit();
            }}
                style={{ margin: '5%' }}>
                <FormGroup>
                    <legend>
                        Name
                    </legend>
                    <input
                        type='name'
                        name='name'
                        value={formData.name}
                        onChange={onInputChange} />
                </FormGroup>
                <FormGroup>
                    <legend>Build Your Own Pizza
                    </legend>
                    <Dropdown isOpen={DropDownOpen} toggle={toggle}>
                        <DropdownToggle color='warning' caret>
                            {formData.size === '' ? 'Size' : formData.size}
                        </DropdownToggle>
                        <DropdownMenu>
                            <div onClick={() => {
                                toggle();
                                setFormData({ ...formData, size: 'personal' })
                            }}>
                                Personal
                            </div>
                            <div onClick={() => {
                                toggle();
                                setFormData({ ...formData, size: 'small' })
                            }}>
                                Small
                            </div>
                            <div onClick={() => {
                                toggle();
                                setFormData({ ...formData, size: 'medium' })
                            }}>
                                Medium
                            </div>
                            <div onClick={() => {
                                toggle();
                                setFormData({ ...formData, size: 'large' })
                            }}>
                                Large
                            </div>
                        </DropdownMenu>
                    </Dropdown >
                </FormGroup >
                <FormGroup tag='fieldset'>
                    <legend>Sauce</legend>
                    <FormGroup check>
                        <label check>
                            <input
                                type='radio'
                                name='sauce'
                                value='red'
                                onChange={onInputChange} />
                                Original Red
                        </label>
                    </FormGroup>
                    <FormGroup check>
                        <label check>
                            <input
                                type='radio'
                                name='sauce'
                                value='salfredo'
                                onChange={onInputChange} />
                                Spinach Alfredo

                        </label>
                    </FormGroup>
                    <FormGroup>
                        <FormGroup check>
                            <label check>
                                <input
                                    type='radio'
                                    name='sauce'
                                    value='granch'
                                    onChange={onInputChange} />
                                Garlic Ranch

                        </label>
                        </FormGroup>
                        <FormGroup check>
                            <label check>
                                <input
                                    type='radio'
                                    name='sauce'
                                    value='bbq'
                                    onChange={onInputChange} />
                                BBQ Sauce

                        </label>
                        </FormGroup>

                    </FormGroup>
                    <FormGroup tag='fieldset'>
                        <legend>Meat Toppings</legend>

                        <FormGroup check>
                            <label check>
                                <input
                                    type='radio'
                                    name='meat'
                                    value='pepperoni'
                                    onChange={onInputChange} />
                                Pepperoni

                        </label>
                        </FormGroup>
                        <FormGroup check>
                            <label check>
                                <input
                                    type='radio'
                                    name='meat'
                                    value='sausage'
                                    onChange={onInputChange} />
                                Sausage

                        </label>
                        </FormGroup>
                        <FormGroup check>
                            <label check>
                                <input
                                    type='radio'
                                    name='meat'
                                    value='cbacon'
                                    onChange={onInputChange} />
                                Canadian Bacon

                        </label>
                        </FormGroup>
                        <FormGroup check>
                            <label check>
                                <input
                                    type='radio'
                                    name='meat'
                                    value='spicy'
                                    onChange={onInputChange} />
                                Spicy Italian Sausage

                        </label>
                        </FormGroup>
                        <FormGroup check>
                            <label check>
                                <input
                                    type='radio'
                                    name='meat'
                                    value='chicken'
                                    onChange={onInputChange} />
                                Grilled Chicken

                        </label>
                        </FormGroup>
                    </FormGroup>
                </FormGroup>
                <FormGroup>
                    <legend>Other Toppings</legend>
                    <FormGroup check>
                        <label check>
                            <input
                                type='checkbox'
                                name='onions'
                                checked={formData.onions}
                                onChange={handleToppings} />
                                Onions
                        </label>
                    </FormGroup>
                    <FormGroup check>
                        <label check>
                            <input
                                type='checkbox'
                                name='greePepper'
                                checked={formData.greenPepper}
                                onChange={handleToppings} />
                                Green Pepper
                        </label>
                    </FormGroup>
                    <FormGroup check>
                        <label check>
                            <input
                                type='checkbox'
                                name='tomato'
                                checked={formData.tomato}
                                onChange={handleToppings} />
                                Diced Tomatos
                        </label>
                    </FormGroup>
                    <FormGroup check>
                        <label check>
                            <input
                                type='checkbox'
                                name='bolives'
                                checked={formData.bolives}
                                onChange={handleToppings} />
                                Black olives
                        </label>
                    </FormGroup>
                    <FormGroup check>
                        <label check>
                            <input
                                type='checkbox'
                                name='garlic'
                                checked={formData.garlic}
                                onChange={handleToppings} />
                                Roasted Garlic
                        </label>
                    </FormGroup>
                    <FormGroup check>
                        <label check>
                            <input
                                type='checkbox'
                                name='hearts'
                                checked={formData.hearts}
                                onChange={handleToppings} />
                                Artichoke Hearts
                        </label>
                    </FormGroup>
                    <FormGroup check>
                        <label check>
                            <input
                                type='checkbox'
                                name='tcheese'
                                checked={formData.tcheese}
                                onChange={handleToppings} />
                                Three Cheese
                        </label>
                    </FormGroup>
                    <FormGroup check>
                        <label check>
                            <input
                                type='checkbox'
                                name='pineApple'
                                checked={formData.pineApple}
                                onChange={handleToppings} />
                                Pineapple
                        </label>
                    </FormGroup>
                    <FormGroup check>
                        <label check>
                            <input
                                type='checkbox'
                                name='xcheese'
                                checked={formData.xcheese}
                                onChange={handleToppings} />
                                Extra Cheese
                        </label>
                    </FormGroup>
                    <FormGroup>
                        <legend>Special Instructions</legend>
                        <input type='textarea' name='special' value={formData.special}
                            onChange={onInputChange} />
                    </FormGroup>
                    <Button>Add to Order</Button>
                </FormGroup>

            </Form >


        </>
    )
};

export default OrderForm;
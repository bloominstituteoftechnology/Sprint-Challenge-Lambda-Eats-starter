import React, { useState } from "react";
import { Card, CardImg, Button, Form, FormGroup, Dropdown, DropdownToggle, DropdownMenu } from 'reactstrap';

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
        pineApple: false,
        tcheese: false,
        xcheese: false,
        special: ''
    });
    return (
        <>
            <Card style={{ width: '80%', margin: '0 auto' }}>
                <CardImg src={require('./Pizza.jpg')} />
            </Card>
            <Form
                style={{ margin: '5%' }}>
                <FormGroup>
                    <legend>
                        Name
                    </legend>
                    <input
                        type='name'
                        name='name' />
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
                                setFormData({ size: 'personal' })
                            }}>
                                Personal
                            </div>
                            <div onClick={() => {
                                toggle();
                                setFormData({ size: 'small' })
                            }}>
                                Small
                            </div>
                            <div onClick={() => {
                                toggle();
                                setFormData({ size: 'medium' })
                            }}>
                                Medium
                            </div>
                            <div onClick={() => {
                                toggle();
                                setFormData({ size: 'large' })
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
                                value='red' />
                                Original Red
                        </label>
                    </FormGroup>
                    <FormGroup check>
                        <label check>
                            <input
                                type='radio'
                                name='sauce'
                                value='salfredo' />
                                Spinach Alfredo

                        </label>
                    </FormGroup>
                    <FormGroup>
                        <FormGroup check>
                            <label check>
                                <input
                                    type='radio'
                                    name='sauce'
                                    value='granch' />
                                Garlic Ranch

                        </label>
                        </FormGroup>
                        <FormGroup check>
                            <label check>
                                <input
                                    type='radio'
                                    name='sauce'
                                    value='bbq' />
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
                                    value='pepperoni' />
                                Pepperoni

                        </label>
                        </FormGroup>
                        <FormGroup check>
                            <label check>
                                <input
                                    type='radio'
                                    name='meat'
                                    value='sausage' />
                                Sausage

                        </label>
                        </FormGroup>
                        <FormGroup check>
                            <label check>
                                <input
                                    type='radio'
                                    name='meat'
                                    value='cbacon' />
                                Canadian Bacon

                        </label>
                        </FormGroup>
                        <FormGroup check>
                            <label check>
                                <input
                                    type='radio'
                                    name='meat'
                                    value='spicy' />
                                Spicy Italian Sausage

                        </label>
                        </FormGroup>
                        <FormGroup check>
                            <label check>
                                <input
                                    type='radio'
                                    name='meat'
                                    value='chicken' />
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
                                name='onion'
                                checked={false} />
                                Onions
                        </label>
                    </FormGroup>
                </FormGroup>

            </Form >


        </>
    )
};

export default OrderForm;
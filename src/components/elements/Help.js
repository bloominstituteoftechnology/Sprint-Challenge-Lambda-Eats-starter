import React, { useState, useEffect } from "react";
import * as yup from "yup";
import axios from "axios";

/// Validate Pizza Form through Yup
const formSchema = yup.object().shape({
    pizzasize: yup.string().required("Must choose a size yo!"),
    //sauce: yup.string().required("choose a sauce will ya?"),
    howmany: yup.number().moreThan(0),
    name: yup.string().required("Name is a required field."),
    email: yup
        .string('abc@xyz.com', 'Email already taken')
        .email("Must be a valid email address.")
        .required("Must include email address."),
    positions: yup.string(),
    password: yup.string()
        .required("Password must be 8 charaters or more")
        .min(8, 'Password is too short - should be 8 chars minimum.')
        .matches(/[a-zA-Z]/, 'Password can only contain Latin letters.'),
    terms: yup.boolean().oneOf([true], "please agree to terms of use"),


});

export default function Help() {
    return (
        <div>
            This is the help form
        </div>
    )
}

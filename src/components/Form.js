import React, { useState, useEffect } from 'react';
import axios from 'axios';
import * as yup from 'yup';

const formSchema = yup.object().shape({
	name: yup.string().required('Name is a required field.'),
	deepdish: yup.string().required('What size pizza'),
	size: yup.string().required('What size pizza'),
	instructions: yup.string('Anything special'),
	toppings: yup.boolean().oneOf([true], 'please agree to terms of use'),
	sausage: yup.boolean().oneOf([true]),
	pepperoni: yup.boolean().oneOf([true]),
	chicken: yup.boolean().oneOf([true]),
	beef: yup.boolean().oneOf([true]),
});

export default function Form() {
	const [buttonDisabled, setButtonDisabled] = useState(true);

	// managing state for our form inputs
	const [formState, setFormState] = useState({
		name: '',
		size: '',
		deepdish: '',
		toppings: '',
		instructions: '',
	});

	const [errors, setErrors] = useState({
		name: '',
		size: '',
		deepdish: '',
		toppings: '',
		instructions: '',
	});

	const [post, setPost] = useState([]);

	useEffect(() => {
		formSchema.isValid(formState).then((valid) => {
			setButtonDisabled(!valid);
		});
	}, [formState]);

	const formSubmit = (e) => {
		e.preventDefault();
		axios
			.post('https://reqres.in/api/users', formState)
			.then((res) => {
				setPost(res.data);
				console.log('success', post);
				// reset form if successful
				setFormState({
					name: '',
					size: '',
					deepdish: '',
					toppings: '',
					instructions: '',
				});
			})
			.catch((err) => console.log(err.response));
	};

	const validateChange = (e) => {
		yup
			.reach(formSchema, e.target.name)
			.validate(e.target.value)
			.then((valid) => {
				setErrors({
					...errors,
					[e.target.name]: '',
				});
			})
			.catch((err) => {
				setErrors({
					...errors,
					[e.target.name]: err.errors[0],
				});
			});
	};

	const inputChange = (e) => {
		e.persist();
		const newFormData = {
			...formState,
			[e.target.name]:
				e.target.type === 'checkbox' ? e.target.checked : e.target.value,
		};

		validateChange(e);
		setFormState(newFormData);
	};

	return (
		<form className="form-bg" onSubmit={formSubmit}>
			<label htmlFor="name">
				NAME
				<input
					type="text"
					name="name"
					value={formState.name}
					onChange={inputChange}
					//*   CALLING CYPRESS BELOW
					data-cy="name"
				/>
				{errors.name.length > 0 ? <p className="error">{errors.name}</p> : null}
			</label>
			<label htmlFor="Size">
				SIZE
				<select
					value={formState.size}
					id="size"
					name="size"
					onChange={inputChange}
				>
					<option value="Small">Small</option>
					<option value="Medium">Medium</option>
					<option value="Large">Large</option>
					<option value="Party">Party</option>
				</select>
			</label>
			<label htmlFor="deepdish">
				Deep Dish
				<select
					value={formState.deepdish}
					id="deepdish"
					name="deepdish"
					onChange={inputChange}
				>
					<option value="Yes">Yes</option>
					<option value="No">No</option>
				</select>
			</label>
			<label htmlFor="instructions">
				ANY SPECIAL INSTRUCTIONS
				<textarea
					name="instructions"
					value={formState.instructions}
					onChange={inputChange}
					data-cy="textarea"
				/>
				{errors.instructions.length > 0 ? (
					<p className="error">{errors.instructions}</p>
				) : null}
			</label>
			{/* <label htmlFor="terms" className="terms">
				<input
					type="checkbox"
					name="terms"
					checked={formState.terms}
					onChange={inputChange}
				/>
				Terms & Conditions
			</label> */}
			SAUSAGE
			<label htmlFor="toppings" className="toppings">
				Sausage
				<input
					type="checkbox"
					name="toppings"
					checked={formState.terms}
					onChange={inputChange}
				/>
				Pepperoni
				<input
					type="checkbox"
					name="sausage"
					checked={formState.terms}
					onChange={inputChange}
				/>
				Chicken
				<input
					type="checkbox"
					name="sausage"
					checked={formState.terms}
					onChange={inputChange}
				/>
				Beef
				<input
					type="checkbox"
					name="sausage"
					checked={formState.terms}
					onChange={inputChange}
				/>
			</label>
			{/* displaying our post request data */}
			<pre>{JSON.stringify(post, null, 2)}</pre>
			<button disabled={buttonDisabled}>Submit</button>
		</form>
	);
}

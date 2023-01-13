import { useEffect, useMemo, useState } from "react";

export const useForm = ( initialForm = {}, formValidators = {} ) => {

	const [formState, setFormState] = useState( initialForm );
	const [ formValidation, setFormValidation ] = useState( {} );

	useEffect(
		() => {
			createValidators();
		}, 
	[ formState ]);

	const isFormValid = useMemo(
		() => {
			return (
				(Object.values(formValidation))
					.every( field => field === null ) ? true : false
			);
		}, 
	[ formValidation ]);

   const onFormChange = ({ target }) => 
      setFormState({ ...formState, [ target.name ]: target.value });

	const onFormReset = () => 
		setFormState( initialForm );

	const createValidators = () => {
		const formCheckedValues = {};

		for (const formField of Object.keys( formValidators )) {
			const [ validator, errorMessage ] = formValidators[ formField ];

			formCheckedValues[`${ formField }Valid`] = 
				validator(formState[formField]) ? null : errorMessage;
		};

		setFormValidation( formCheckedValues );
	};

	return {
		...formState,
		formState,
		...formValidation,
		formValidation,
		isFormValid,
		onFormChange,
		onFormReset,
	};

};

// TODO: create function validators for each type of input using RegExp
// 	1. email
// 	2. text
// 	3. number
//		...

/* 
	Email

	emailValidation = {
		user: 	'^[a-z][\w.]{2,}',
		arroba: 	'[@]'
		domain: 	'[\w]{2,}',
		dot: 		'[.]'
		origin: 	'[\w]{2,}'
	}

	(?<user>^[a-z][\w.]{2,})
	([@])
	(?<domain>[\w]{2,})
	([.])
	(?<origin>[\w]{2,}) 
*/
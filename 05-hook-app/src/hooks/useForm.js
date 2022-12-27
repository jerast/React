import { useState } from "react";

export const useForm = ( initialForm = {} ) => {
	const [formState, setFormState] = useState( initialForm );

   const onFormChange = ({ target }) => 
      setFormState({ ...formState, [ target.name ]: target.value });

	const onFormReset = () => 
		setFormState( initialForm );

	return {
		...formState,
		formState,
		onFormChange,
		onFormReset,
	};
};

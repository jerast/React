import { useState } from "react"

export const AddCategory = ({ handleAddCategory }) => {

	const [ inputValue, setInputValue ] = useState( '' );

	const handleChange = ({ target }) => {
		setInputValue( target.value );
	}

	const handleSubmit = ( event ) => {
		event.preventDefault();

		const value = inputValue.replace(/\s+/g, ' ').trim();
		if ( !value ) return;
		
		handleAddCategory( value );
		setInputValue( '' );
	}

	return (
		<form onSubmit={ handleSubmit }>
			<input 
				type="text" 
				placeholder="Search gifs"
				value={ inputValue }
				onChange={ handleChange }
				autoFocus
				required
			/>
		</form>
	)
}

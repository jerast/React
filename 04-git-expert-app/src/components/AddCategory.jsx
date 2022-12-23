import { useState } from "react";
import PropTypes from 'prop-types';


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
		<form onSubmit={ handleSubmit } role="form">
			<input 
				type="text" 
				placeholder="Search gifs"
				value={ inputValue }
				onChange={ handleChange }
				autoFocus
				// required
			/>
		</form>
	)
}

AddCategory.propTypes = {
	handleAddCategory: PropTypes.func.isRequired,
}
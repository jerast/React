import { useForm } from '../hooks';

export const TodoAdd = ({ handleCreateTodo }) => {

   const { description, onFormChange, onFormReset } = useForm({ description: '' });

   const onFormSubmit = (event) => {
      event.preventDefault();
      
      if ( !description ) return;

      const newTodo = {
         id: new Date().getTime(),
         description,
         done: false,
      }

      handleCreateTodo( newTodo );
      onFormReset();
   } 

	return (
		<form onSubmit={ onFormSubmit }>
			<input
				type="text"
				placeholder="What's to do?"
				name="description"
				value={ description }
				onChange={ onFormChange }
            required
			/>
			<button>+</button>
		</form>
	);
};

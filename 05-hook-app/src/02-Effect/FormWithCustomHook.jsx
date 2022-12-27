import { useForm } from "../hooks/useForm";
import { Message } from "./Message";

export const FormWithCustomHook = () => {
   const { formState, onFormChange, onFormReset } = useForm({
      username: '',
      email: '',
      password: '',
   }); 

   const { username, email, password } = formState;

	return (
		<>
			<h1 className="title">Formulario con Custom Hook</h1>
         <hr />
			<input 
            type="text" 
            placeholder="Username" 
            name="username"
            value={ username }
            onChange={ onFormChange }
         />
			<input 
            type="email" 
            placeholder="user@domain.com" 
            name="email"
            value={ email }
            onChange={ onFormChange }
         />
			<input 
            type="password" 
            placeholder="********" 
            name="password"
            value={ password }
            onChange={ onFormChange }
         />
         <button onClick={ onFormReset }>Reset</button>
         { (username === 'Jerast2') && <Message /> }
		</>
	);
};

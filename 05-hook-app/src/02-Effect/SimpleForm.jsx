import { useEffect, useState } from "react";
import { Message } from "./Message";

export const SimpleForm = () => {
   const [formState, setformState] = useState({
      username: 'Jerast',
      email: 'jerast@github.com',
   })

   const { username, email } = formState;

   const onFormChange = ({ target }) => 
      setformState({
         ...formState,
         [ target.name ]: target.value,
      });

   // useEffect(() => {
   //    console.log('Effect called!')
   // }, []);

   // useEffect(() => {
   //    console.log('formState changed!')
   // }, [formState]);

   // useEffect(() => {
   //    console.log('email changed!')
   // }, [email]);

	return (
		<>
			<h1 className="title">Formulario Simple</h1>
         <hr />
			<input 
            type="text" 
            className="input" 
            placeholder="Username" 
            name="username"
            value={ username }
            onChange={ onFormChange }
         />
			<input 
            type="email" 
            className="input" 
            placeholder="user@domain.com" 
            name="email"
            value={ email }
            onChange={ onFormChange }
         />
         { (username === 'Jerast2') && <Message /> }
		</>
	);
};

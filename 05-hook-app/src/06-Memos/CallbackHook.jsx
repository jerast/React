import { useCallback, useState } from 'react';
import { ShowIncrement } from './ShowIncrement';

export const CallbackHook = () => {
	const [counter, setCounter] = useState(10);

   const increment = useCallback(
      (steps = 1) => {
         setCounter( value => value + steps);
      }, 
      [],
   );

	return (
		<>
			<h1 className="title">CallbackHook { counter }</h1>
			<hr />

			<ShowIncrement increment={ increment } />
		</>
	);
};

import { useState } from "react";

export const useCounter = ( initialValue = 10 ) => {

	const [counter, setCounter] = useState( initialValue );

	const increment = ( steps = 1 ) => setCounter( counter => counter + steps );
	const decrement = ( steps = 1 ) => setCounter( counter => counter - steps );
	const reset = () => setCounter( initialValue );

	return {
		counter,
		increment,
		decrement,
		reset
	};
};
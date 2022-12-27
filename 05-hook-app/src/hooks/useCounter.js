import { useState } from "react";

export const useCounter = ( initialValue = 10, steps = 1 ) => {

	const [counter, setCounter] = useState( initialValue );

	const increment = () => setCounter( counter + steps );
	const decrement = () => setCounter( counter - steps );
	const reset = () => setCounter( initialValue );

	return {
		counter,
		increment,
		decrement,
		reset
	};
};
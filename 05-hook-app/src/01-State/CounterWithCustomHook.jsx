import { useCounter } from "../hooks/useCounter";

export const CounterWithCustomHook = () => {

	const { 
		counter, 
		increment, 
		decrement, 
		reset 
	} = useCounter( 0 );

	return (
		<>
			<h1 className="title">Counter with Hook: { counter }</h1>
			<hr />
			<button className="button" onClick={ () => increment(1) }>+1</button>
			<button className="button" onClick={ () => decrement(1) }>-1</button>
			<button className="button" onClick={ () => reset(1) }>Reset</button>
		</>
	);
};

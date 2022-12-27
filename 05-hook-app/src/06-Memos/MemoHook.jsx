import { useMemo, useState } from 'react';
import { useCounter } from '../hooks';

const heavySuff = ( itearations = 100 ) => {
	for (let i = 0; i < itearations; i++) console.log('Ahí vamos...');
	return `${itearations} iterations done!`;
}

export const MemoHook = () => {
	const { counter, increment } = useCounter( 1000 );
	const [ state, setState ] = useState(true);
	const memoValue = useMemo(() => heavySuff( counter ), [counter]);

	return (
		<>
			<h1 className="title">
				Counter: { counter }
			</h1>
			<hr />

			<h4>{ memoValue }</h4>

			<button onClick={increment}>+1</button>
			<button onClick={() => setState(!state)}>
				Show/Hide {`${state}`}
			</button>
		</>
	);
};

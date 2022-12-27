import { useState } from 'react';
import { useCounter } from '../hooks';
import { Small } from './Small';

export const Memorize = () => {
	const { counter, increment } = useCounter();

	const [state, setState] = useState(true);

	return (
		<>
			<h1 className="title">
				Counter: <Small value={counter} />
			</h1>
			<hr />
			<button onClick={increment}>+1</button>
			<button onClick={() => setState(!state)}>
				Show/Hide {`${state}`}
			</button>
		</>
	);
};

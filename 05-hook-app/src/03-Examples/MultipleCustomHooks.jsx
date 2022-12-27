import { useCounter, useFetch } from '../hooks';
import { LoadingQuote, Quote } from './';

export const MultipleCustomHooks = () => {
	const { counter, increment } = useCounter(1);
	const { data, isLoading	} = useFetch(`https://api.breakingbadquotes.xyz/v1/quotes/${ counter }`);

	const { author, quote } = !isLoading && data[0];

	return <>
		{
			( isLoading ) 
				? <LoadingQuote /> 
				: <Quote quote={ quote } author={ author } />
		}
		<button onClick={ increment } disabled={ isLoading }>Next Quote</button>
	</>
};

// 
// "When you have children, you always have family. 
// They will always be your priority, your responsibility. 
// And a man, a man provides. 
// And he does it even when he's not appreciated or respected or even loved. 
// He simply bears up and he does it. 
// Because he's a man."
// 
// - Gustavo Fring -
// 
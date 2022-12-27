import { useCounter, useFetch } from '../hooks';
import { LoadingQuote, Quote } from '../03-Examples';

export const Layout = () => {
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
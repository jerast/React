import PropTypes from 'prop-types';
import { useLayoutEffect, useRef } from 'react';

export const Quote = ({ quote, author }) => {

	const quoteRef = useRef();

	useLayoutEffect(() => {
		console.log( quoteRef.current.getBoundingClientRect().height )
	}, [])

	return (
		<blockquote className="blockquote">
			<p ref={ quoteRef }>"{ quote }"</p>
			<span>- { author } -</span>
		</blockquote>
	);
};

Quote.propTypes = {
   quote: PropTypes.string.isRequired,
   author: PropTypes.string.isRequired,
};

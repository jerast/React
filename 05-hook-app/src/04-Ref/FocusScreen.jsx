import { useRef } from "react";

export const FocusScreen = () => {

	const inputRef = useRef();

	const onClickFocus = () => 
		inputRef.current.select();

	return (
		<>
			<h1 className="title">Focus Screen</h1>
			<hr />

			<input ref={ inputRef } type="text" placeholder="Your name" />
			
			<button onClick={ onClickFocus }>Set focus</button>
		</>
	);
};

import { useContext } from 'react';
import { UserContext } from '../context/UserContext';

export const LoginPage = () => {

	const { user, setUser } = useContext( UserContext );

	const onSetUser = () => setUser({
		id: 123,
		name: 'Jerast',
		email: 'jerast@github.com',
	});

	return (
		<>
			<h1 className="title">LoginPage</h1>
			<hr />

			<pre role="pre">
				{ JSON.stringify(user, null, 3) }
			</pre>

			<button onClick={ onSetUser }>
				Set User
			</button>
		</>
	);
};

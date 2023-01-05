import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "@auth";

export const LoginPage = () => {
	const { onLogin } = useContext( AuthContext );
	const navigate = useNavigate();

	const handleLogin = () => {
		const lastPath = localStorage.getItem('lastPath') || '/';

		onLogin( 'Jose Romero' );

		navigate( lastPath, { replace: true } );
	};

	return (
		<main className="grid p-8 h-screen grid-rows-[auto_1fr]">
			<h1 className="text-center">Login</h1>
			<div className="grid place-items-center ">
				<button className="button" onClick={ handleLogin }>Login</button>
			</div>
		</main>
	);
};

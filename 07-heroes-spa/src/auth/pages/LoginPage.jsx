import { useNavigate } from "react-router-dom";

export const LoginPage = () => {
	const navigate = useNavigate();

	const handleLogin = () => navigate('/marvel');

	return (
		<main className="grid p-8 h-screen grid-rows-[auto_1fr]">
			<h1 className="text-center">Login</h1>
			<div className="grid place-items-center ">
				<button className="button" onClick={ handleLogin }>Login</button>
			</div>
		</main>
	);
};

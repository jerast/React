import { useContext } from "react";
import { UserContext } from "../context/UserContext";

export const HomePage = () => {

	const { user } = useContext( UserContext );

	return (
		<>
			<h1 className="title">HomePage</h1>
			<p aria-label="p">{ user?.name ? `Hello, ${user.name}` : '' }!</p>
		</>
	);
};

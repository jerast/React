import { Link, NavLink } from "react-router-dom";

export const Navbar = () => {
   
   const handleActiveClass = ({ isActive }) => isActive ? 'active' : '';

	return (
		<div className="mb-8">
			<NavLink to="/" className={ handleActiveClass }>Home</NavLink>
			<NavLink to="/login" className={ handleActiveClass }>Login</NavLink>
			<NavLink to="/about" className={ handleActiveClass }>About</NavLink>
		</div>
	);
};

import { Link, NavLink, useNavigate } from 'react-router-dom';

export const Navbar = () => {

   const navigate = useNavigate();

   const handleLogout = () => navigate('/login', { replace: true });

   const handleActiveClass = ({ isActive }) => 
      isActive ? 'Navbar__item Navbar__item--active' : 'Navbar__item';

	return (
		<nav className="Navbar animate__animated animate__fadeInDown">
			<Link className="Navbar__brand" to="/">
				Asociaciones
			</Link>

			<ul className="Navbar__menu">
            <NavLink className={ handleActiveClass } to="/marvel">
               Marvel
            </NavLink>

            <NavLink className={ handleActiveClass } to="/dc">
               DC
            </NavLink>
			</ul>

			<ul className="Navbar__options">
            <NavLink className={ handleActiveClass } to="/search">
               <img 
                  className='invert opacity-80 mx-2 text-black' 
                  src="https://cdn-icons-png.flaticon.com/16/622/622669.png" 
                  alt="Search" 
               />
            </NavLink>
            <span className="Navbar__user">
               Jerast
            </span>
            <button 
               className="Navbar__button"
               onClick={ handleLogout }
            >
               Logout
            </button>
         </ul>
		</nav>
	);
};

import { useLocation, useNavigate } from "react-router-dom";
import queryString from 'query-string';
import { useForm } from "@hooks";
import { getHeroesByName, HeroCard, HeroNotFound } from "@heroes";

export const SearchPage = () => {

	const location = useLocation();
	const { query = '' } = queryString.parse( location.search );

	const heroes = query ? getHeroesByName( query ) : [];
	
	const form = useForm({ search: query });
	const { search, onFormChange } = form;
	
	const navigate = useNavigate();
	const onFormSubmit = ( event ) => {
		event.preventDefault();

		const value = search
			.replace(/\s+/g, ' ')
			.trim()
			.replace(' ', '_')
			.toLocaleLowerCase();

		// if ( !value ) return;
		
		navigate(`?query=${ value }`);
	}

	return (
		<main className="grid p-8 place-items-center h-min">
			<h1 className="text-start animate__animated animate__fadeIn">Search</h1>

			<form 
				className="Search animate__animated animate__fadeIn"
				onSubmit={ onFormSubmit }
			>
				<input
					type="text" 
					name="search"
					value={ search }
					onChange={ onFormChange }
					placeholder="Search a hero"
					className="Search__input"
					autoFocus
				/>
				<button 
					className="Search__button"
				>
					<img 
                  src="https://cdn-icons-png.flaticon.com/16/622/622669.png" 
                  alt="Search" 
               />
				</button>
			</form>
         
			<div className="Search__list animate__animated animate__fadeIn">
				{ 
					heroes.map( hero => 
						<HeroCard 
							key={ hero.id } 
							{ ...hero }
						/>
					) 
				}
			</div>

			{
				(query && !heroes.length) 
					&& <HeroNotFound query={ query } />
			}
		</main>
	);
};
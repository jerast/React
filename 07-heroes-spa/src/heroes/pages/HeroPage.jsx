import { useMemo } from "react";
import { Navigate, useNavigate, useParams } from "react-router-dom";
import { HeroPoster } from "../components";
import { getHeroesById } from "../helpers";

export const HeroPage = () => {

	const { id }  = useParams();
	const hero = useMemo( 
		() => getHeroesById( id ), 
		[ id ]
	); 
	
	const navigate = useNavigate();
   const handleGoBack = () => navigate(-1);
	
	if (!hero) 
		return <Navigate to="/marvel" />;

	return (
		<main className="grid gap-4 p-8 place-items-center">
			<h1 className="text-start animate__animated animate__fadeIn animate animate__slower">{ hero.superhero }</h1>
         
			<HeroPoster hero={ hero } />
			
			<button 
				className="button w-fit text-sm"
				onClick={ handleGoBack }
			>
				Go back
			</button>
		</main>
	);
};

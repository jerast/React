import { useMemo } from "react";
import { Navigate, useNavigate, useParams } from "react-router-dom";
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
         
			<div className="HeroDisplay animate__animated animate__fadeIn">
				<img className="HeroDisplay__image animate__animated animate__fadeInLeft" src={`/assets/heroes/${ id }.jpg`} alt="" />
				<div className="HeroDisplay__body animate__animated animate__fadeIn animate__delay-1s">
					<p className="HeroDisplay__info">
						<span>Alter Ego</span>
						<span>{ hero.alter_ego }</span>
					</p>
					<p className="HeroDisplay__info">
						<span>Publisher</span>
						<span>{ hero.publisher }</span>
					</p>
					<p className="HeroDisplay__info">
						<span>First Appearance</span>
						<span>{ hero.first_appearance }</span>
					</p>
					<p className="HeroDisplay__info">
						<span>Characters</span>
						<span>{ hero.characters }</span>
					</p>
				</div>
			</div>
			<button 
				className="button w-fit text-sm"
				onClick={ handleGoBack }
			>
				Go back
			</button>
		</main>
	);
};

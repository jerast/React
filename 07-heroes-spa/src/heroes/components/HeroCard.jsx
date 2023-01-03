import { Link } from "react-router-dom";

export const HeroCard = ({ id, superhero, publisher, alter_ego, first_appearance, characters }) => {

	return (
      <div className="HeroCard">
         <img className="HeroCard__image" src={`/assets/heroes/${ id }.jpg`} alt="" />
         <Link to={`/Hero/${ id }`} className="HeroCard__body">
            <span className="HeroCard__info HeroCard__info--primary">{ superhero }</span>
            <span className="HeroCard__info">{ alter_ego }</span>
            {
               // ( alter_ego !== characters ) 
               //    && <span className="HeroCard__info">{ characters }</span>
            }
            <span className="HeroCard__info">{ publisher }</span>
            <span className="HeroCard__info">{ first_appearance }</span>
         </Link>
      </div>
   );
};

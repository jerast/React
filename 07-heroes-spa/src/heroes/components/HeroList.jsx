import { useMemo } from "react";
import { HeroCard } from "./";
import { getHeroesBy } from "../helpers";

export const HeroList = ({ publisher }) => {

   const filterHeroes = useMemo( 
      () => getHeroesBy( 'publisher' , publisher ), 
      [ publisher ]
   );

	return (
      <section className="HeroList">
         {
            filterHeroes.map( hero => 
               <HeroCard 
                  key={ hero.id } 
                  { ...hero }
               /> 
            )
         }
      </section>
	);
};

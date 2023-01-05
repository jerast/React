import { useMemo } from "react";
import { HeroCard, getHeroesBy } from "@heroes";

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

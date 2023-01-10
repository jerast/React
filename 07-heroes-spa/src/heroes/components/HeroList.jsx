import { useMemo } from "react";
import { HeroCard, getHeroesByPublisher } from "@/heroes";

export const HeroList = ({ publisher }) => {

   const filterHeroes = useMemo( 
      () => getHeroesByPublisher( publisher ), 
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

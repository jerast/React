import { heroes } from "@heroes";

export const getHeroesByName = ( value ) => {
   // const regex = new RegExp(
   //    '^' + value + '+',
   //    'gi'
   // );

   return heroes.filter( hero => 
      // (/o/gi).test(hero.superhero)
      
      // hero.superhero.toLowerCase().includes( value ) 
      hero.superhero.toLowerCase().indexOf( value ) === 0
   );
}
import { heroes } from "../data/heroes";

export const getHeroesByName = ( value ) => {
   // const regex = new RegExp(
   //    '^' + value + '+',
   //    'gi'
   // );

   // return heroes.filter( hero => (/o/gi).test(hero.superhero) )

   // return heroes.filter( hero => hero.superhero.toLowerCase().includes( value ) );
   return heroes.filter( hero => hero.superhero.toLowerCase().indexOf( value ) === 0 );
}
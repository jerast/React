import { heroes } from "@/heroes";

export const getHeroesByPublisher = ( value ) => {

   const validFilters = ['DC Comics', 'Marvel Comics'];

   if (!validFilters.includes( value ))
      throw new Error(`"${ value }" is not a valid publisher`);

   return heroes.filter( hero => hero.publisher === value );;
}
import { heroes } from "@/heroes";

export const getHeroesByName = ( value ) => 
   heroes.filter( hero => hero.superhero.toLowerCase().indexOf( value ) === 0 );

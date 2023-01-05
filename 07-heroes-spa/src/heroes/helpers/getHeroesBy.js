import { heroes } from "@heroes";

export const getHeroesBy = ( filter, value ) => {

   const validFilters = ['id', 'superhero', 'publisher', 'alter_ego', 'first_appearance', 'characters'];

   if (!validFilters.includes( filter ))
      throw new Error(`"${ filter }" is not a valid filter`);

   const filterHeroes = heroes.filter( hero => hero[filter] === value );

   if (!filterHeroes.length)
      throw new Error(`"${ value }" is not a valid ${ filter }`);   

   return filterHeroes;
}
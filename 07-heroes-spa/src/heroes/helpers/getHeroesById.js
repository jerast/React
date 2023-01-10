import { heroes } from "@/heroes"; 

export const getHeroesById = ( id ) => 
   heroes.find( hero => hero.id === id );
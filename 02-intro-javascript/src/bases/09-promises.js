// import { getHeroById } from "./bases/08-import-export";

// const promesa = new Promise((resolve, reject) => {

//    setTimeout(() => {
      
//       const heroe = getHeroById(2);

//       resolve( );
//       // reject('No se pudo encontrar el heroe');

//    }, 2000);

// });

// promesa
//    .then((response) => console.log(response))
//    .catch((error) => console.error(error))
//    .finally(() => console.log(' - Promesa finalizada'));

import { getHeroById } from "./bases/08-import-export";

const getHeroByIdPromise = (id) => {
   return new Promise((resolve, reject) => {

      setTimeout(() => {
         
         const heroe = getHeroById(id);

         heroe
            ? resolve( heroe )
            : reject('No se pudo encontrar el heroe'); 
   
      }, 2000);
   
   });
}

getHeroByIdPromise(4)
   .then( console.table )
   .catch( console.warn )
   .finally( () => console.log(' - Promesa finalizada') );
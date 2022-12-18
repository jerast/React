

const persona = {
   nombre: 'Tony',
   apellido: 'Stark',
   edad: 45,
   direccion: {
      ciudad: 'New York',
      zip: 332123,
      lat: 14.53453,
      lng: 45.52352,
   }
};

// console.table( persona );

const persona2 = { ...persona };
persona2.nombre = 'Peter'

console.log( persona );
console.log( persona2 );
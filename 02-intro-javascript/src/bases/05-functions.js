

// Funciones en JS
const saludar = ( nombre ) => {
   return `Hola, ${ nombre }`;
}

const saludar2 = () => 
   `Hola Mundo`;

const getUser = () => ({
   userid: 'ABC123',
   username: 'Jerast',
})


// console.log( saludar('Jose') );
// console.log( saludar2() );
// console.log( getUser() );

const getActiveUser = ( name ) => ({
   uid: 'ABC567',
   username: name
})

const activeUser = getActiveUser('Jerast');
console.log(activeUser);
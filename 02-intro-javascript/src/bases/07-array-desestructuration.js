

const characters = [ 'Goku', 'Vegeta', 'Trunks' ]

// console.log( characters[0] );
// console.log( characters[1] );
// console.log( characters[2] );


const [ ,, char ] = characters;
// console.log( char );

const returnArray = () => 
   ['ABC', 123];

const [ value1, value2 ] = returnArray();
// console.log(value1, value2);


const usState = (value) => 
   [ value, () => {console.log('Hola, mundo')} ];


const [ name, setName ] = usState('Gokyu');
console.log(name);
setName();

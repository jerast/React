
// Desestructuración
// Asignación Desestructurante
const person = {
   name: 'Jose',
   age: 45,
   key: 'Jerast',
   pass: '100%lrao'
};

// console.log(person.name);
// console.log(person.age);
// console.log(person.key);

const { name, age, key } = person;

// console.log(name);
// console.log(age);
// console.log(key);

const useContext = ({ name, age, key, pass = '10293847' }) => 
   ({
      keyName: key,
      anios: age,
      geolocation: {
         lat: 15.63455,
         lng: 34.55656,
      }
   });

// const { keyName, anios, geolocation } = returnUser( person );
// const { lat, lng } = geolocation;

const { keyName, anios, geolocation: {lat, lng} } = useContext( person );

console.table( keyName, anios ); 
console.log( lat, lng );


const API_KEY = 'hZ9HyYKxCmJ7NTm702wo9Rdvgj3WtWsh';

const getRequest = fetch(`https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`);

getRequest
   .then( (response) => response.json() )
   .then( ({ data }) => { 
      const { url } = data?.images?.original;

      const img =  document.createElement('img');
      img.src = url;

      document.body.append( img );
   } )
   .catch( console.warn );
   
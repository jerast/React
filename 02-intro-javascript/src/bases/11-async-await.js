// const getImagePromise = () =>
//    new Promise(resolve => resolve('https://google.com.co'));

// getImagePromise()
//    .then( console.log );

const getImageAsync = async () => 'https://google.com.co';

getImageAsync().then(console.log);



// const apikey = 'hZ9HyYKxCmJ7NTm702wo9Rdvgj3WtWsh';
// const getRequest = fetch(`https://api.giphy.com/v1/gifs/random?api_key=${apikey}`);

// getRequest
//    .then( (response) => response.json() )
//    .then( ({ data }) => {
//       const { url } = data?.images?.original;

//       const img =  document.createElement('img');
//       img.src = url;
//       document.body.append( img );
//    } )
//    .catch( console.warn );

const getRequest = async () => {
	try {
		const apikey = 'hZ9HyYKxCmJ7NTm702wo9Rdvgj3WtWsh';
		const response = await fetch(`https://api.giphy.com/v1/gifs/random?api_key=${apikey}`);
		const { data } = await response.json();

		const { url } = data.images.original;

		const gift = document.createElement('img');
		gift.src = url;
		document.body.append(gift);
	} catch {
      console.warn('error');
   }
};

getRequest();

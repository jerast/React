export const getGifs = async ( category ) => {
		
	const url = `https://api.giphy.com/v1/gifs/search?api_key=9HSc2hQ5ifV15mlhjMb00yWx0ZZ3orN7&limit=10&q=${ category }`;
	const response = await fetch( url );
	const { data } = await response.json();

	const gifs = data.map( ({ id, title, images }) => ({
		id,
		title,
		url: images.downsized_medium.url,
	}));

	return gifs;
}
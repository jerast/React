import { setPokemons, startLoadingPokemons } from '@/store/slices';
import { pokemonApi } from '@/api';

export const getPokemons = (page = 0) => {

	return async (dispatch, getState) => {
		dispatch(startLoadingPokemons());

		const limit = 10;

		// const response = await
		//   fetch(`https://pokeapi.co/api/v2/pokemon?limit=${ limit }&offset=${ limit * (page - 1) }`);
		// const data = await 
      //   response.json();

		const { data } = await 
         pokemonApi.get(`/pokemon?limit=${ limit }&offset=${ limit * page }`);

		dispatch(setPokemons({ pokemons: data.results, page: page + 1 }));
	};

};

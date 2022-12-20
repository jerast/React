import { getHeroeById, getHeroesByOwner } from '../../src/bases/08-imp-exp';
import heroes from '../../src/data/heroes';

describe('Pruebas en 08-imp-exp', () => {

	test('getHeroeById debe retornar un héroe por ID', () => {
		const id = 1;
		const hero = getHeroeById(id);

		expect(hero).toEqual({
			id: 1,
			name: 'Batman',
			owner: 'DC',
		});
	});

	test('getHeroeById debe retornar un falsty cuando no exista', () => {
		const id = 100;
		const hero = getHeroeById(id);

		expect(hero).toBeFalsy();
	});


	test('getHeroesByOwner debe retornar un arreglo con los héroes de DC, de length === 3', () => {
		const owner = 'DC';
		const filterHeroes = getHeroesByOwner(owner);

      expect( filterHeroes.length ).toBe( 3 );
		// expect( filterHeroes ).toEqual([
		// 	{ id: 1, name: 'Batman', owner: 'DC' },
		// 	{ id: 3, name: 'Superman', owner: 'DC' },
		// 	{ id: 4, name: 'Flash', owner: 'DC' },
		// ]);
      expect( filterHeroes.every(item => item.owner === owner) ).toBe( true );
      expect( filterHeroes ).toEqual( heroes.filter( heroe => heroe.owner === owner ) );
	});

	test('getHeroesByOwner debe retornar un arreglo con los héroes de Marvel, de length === 2', () => {
		const owner = 'Marvel';
		const filterHeroes = getHeroesByOwner(owner);

      expect( filterHeroes.length ).toBe( 2 );
      // expect( filterHeroes ).toEqual([
      //    { id: 2, name: 'Spiderman', owner: 'Marvel' },
      //    { id: 5, name: 'Wolverine', owner: 'Marvel' }
      // ]);
		expect( filterHeroes.every(item => item.owner === owner) ).toBe( true );
      expect( filterHeroes ).toEqual( heroes.filter( heroe => heroe.owner === owner ) );
	});

});

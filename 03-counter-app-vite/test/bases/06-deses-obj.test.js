import { usContext } from '../../src/bases/06-deses-obj';

describe('Pruebas en 06-deses-obj', () => {

	test('usContext debe de retornar un objeto con multiples datos', () => {

		const persona = {
			nombre: 'Tony',
			edad: 45,
			clave: 'Ironman',
		};
		const testUsContext = {
			nombreClave: persona.clave,
			anios: persona.edad,
			latlng: {
				lat: 14.1232,
				lng: -12.3232,
			},
		};
		const contextPersona = usContext(persona);
		expect(testUsContext).toEqual(contextPersona);
      
	});

});

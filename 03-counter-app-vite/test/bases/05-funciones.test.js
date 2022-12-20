import { getUser, getUsuarioActivo } from "../../src/bases/05-funciones";

describe('Pruebas en 05-funciones', () => {

	test('getUser debe de retornar un objeto', () => {

      const testUser = {
			uid: 'ABC123',
			username: 'El_Papi1502',
		};
      const user = getUser();
      expect( user ).toEqual( testUser );

	});

	test('getUsuarioActivo debe de retornar un objeto con un nombre', () => {
      
		const nombre = 'Jerast';
      const testActiveUser = {
			uid: 'ABC567',
         username: nombre,
		};
      const activeUser = getUsuarioActivo( nombre );
      expect( activeUser ).toEqual( testActiveUser );
		
	});

});

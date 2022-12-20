import { getImagen } from "../../src/bases/11-async-await";

describe('Pruebas en 11-async-await', () => {
   
   test('getImagen debe retornar un error cuando no se encuentra la imagen', async () => {
     
      const response = await getImagen();
      expect( response ).toBe( 'No se encontró la imagen' );

   })

});
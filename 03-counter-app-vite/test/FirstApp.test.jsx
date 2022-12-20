import { render } from "@testing-library/react";
import { FirstApp } from "../src/FirstApp";


describe('Pruebas en <FisrtApp />', () => {

   // test('Debe de hacer match con el snapshot', () => {

   //    const title = 'Hola, soy Jerast';
   //    const { container } = render( <FirstApp title={ title }/> );
   //    expect( container ).toMatchSnapshot();

   // });

   test('Debe de mostrar el títlo en un elemento <h1>', () => {

      const title = 'Hola, soy Jerast';
      const { container, getByText, getByTestId } = render( 
         <FirstApp 
            title={ title }
         /> 
      );
      expect( getByText(title) ).toBeTruthy();

      const h1_Content = container.querySelector('h1').textContent;
      expect( h1_Content ).toContain( title );

      expect( getByTestId('test-title').textContent ).toContain(title);

   });

   test('Debe de mostrar el subtitulo enviado por props', () => {

      const title = 'Hola, soy Jerast';
      const subtitle = 'Soy un subtitulo';
      const { getAllByText } = render( 
         <FirstApp 
            title={ title }
            subtitle={ subtitle }
         /> 
      );
      
      expect( getAllByText(subtitle).length ).toBe( 2 );

   });

});
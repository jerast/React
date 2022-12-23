import { render, screen } from "@testing-library/react";
import { GifItem } from "../../src/components/GifItem";

describe('Testing on <GifItem /> component', () => {

   const title = "Dragon Ball GIF by Toei Animation";
   const url = "https://media0.giphy.com/media/GRSnxyhJnPsaQy9YLn/giphy.gif"

   // test('should match the snapshot', () => {
   //    const { container } = render( <GifItem title={ title } url={ url } /> );
   //    expect( container ).toMatchSnapshot();
   // });

   test('should correctly display the image with the URL and ALT ', () => {
      render( <GifItem title={ title } url={ url } /> );
      const { src, alt } = screen.getByRole('img');
      expect( src ).toBe( url );
      expect( alt ).toBe( title );
   });

   test('should display the title', () => {
      render( <GifItem title={ title } url={ url } /> );
      expect( screen.getByText( title ) ).toBeTruthy();
   })

}); 
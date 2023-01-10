import { fireEvent, render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { SearchPage } from "@/heroes";

const mockedUseNavigate = jest.fn();

jest.mock('react-router-dom', () => ({
   ...jest.requireActual('react-router-dom'),
   useNavigate: () => mockedUseNavigate,
}));

describe('Testing on <SearchPage />', () => {

   beforeEach(() => jest.clearAllMocks());

   test('should match the snapshot', () => {
      const { container } = render(
         <MemoryRouter>
            <SearchPage />
         </MemoryRouter>
      );
      
      expect( container ).toMatchSnapshot();
   });

   test('should match the snapshot', () => {
      render(
         <MemoryRouter initialEntries={['/search?query=batman']}>
            <SearchPage />
         </MemoryRouter>
      );
      
      const input = screen.getByRole('textbox');
      expect( input.value ).toBe('batman');

      const img = screen.getAllByRole('img')[1];
      expect( img.src ).toContain('/images/heroes/dc-batman.jpg');
   });
   
   test('should display if hero is not found', () => {
      render(
         <MemoryRouter initialEntries={['/search?query=batman123']}>
            <SearchPage />
         </MemoryRouter>
      );
      
      const alertText = screen.getByRole('alert');
      expect( alertText.textContent ).toContain('No heros with [ batman123 ]');

      const alertImg = screen.getAllByRole('img')[1];
      expect( alertImg.src ).toContain('/images/icons/opps.png');
   });

   test('should Navigate when form is submited', () => {
      const searchValue = 'batman';
      render(
         <MemoryRouter>
            <SearchPage />
         </MemoryRouter>
      );

      const form = screen.getByRole( 'form' );
      const formInput = screen.getByRole( 'textbox' );

      fireEvent.input( formInput, { target: { value: searchValue } } );
      fireEvent.submit( form );

      expect( mockedUseNavigate ).toHaveBeenCalledWith(`?query=${ searchValue }`);
   });

});
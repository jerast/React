import { render, screen } from '@testing-library/react';
import { GifGrid } from '../../src/components/GifGrid';
import { useFetchGifs } from '../../src/hooks/useFetchGifs';

jest.mock('../../src/hooks/useFetchGifs');

describe('Testing on <GifGrid />', () => {

	const category = 'One Punch';

	test('should display the "loading" message at start', () => {
      useFetchGifs.mockReturnValue({
         images: [],
         isLoading: true,
      });

		render(<GifGrid category={category} />);

		expect(screen.getByText(category));
		expect(screen.getByText('...Cargando'));
	});

	test('should display items when the images are loading using the useFetchGifs() hook ', () => {
      const gifs = [
         { id: 'ABC1', title: 'Saitama', url: 'https://saitama.com/1.jpg' },
         { id: 'ABC2', title: 'Goku', url: 'https://goku.com/1.jpg' },
      ]

		useFetchGifs.mockReturnValue({
         images: gifs,
         isLoading: false,
      });
      
      render(<GifGrid category={category} />);
      
      expect( screen.getAllByRole('img').length ).toBe( gifs.length );
	});

});

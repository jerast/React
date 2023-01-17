import { fileUpload } from '@/helpers';
import { v2 as cloudinary } from 'cloudinary';

cloudinary.config({
	cloud_name: 'dlgvigwlh',
	api_key: '572614815284646',
	api_secret: 'OiEnAJtq05OINFOUs9rsIH_6mFk',
	secure: true
});

describe('Testing on fileUpload.Helper.test', () => {

	test('should upload file correctly to Cloudinary', async () => {
		const imageUrl = 'https://llandscapes-10674.kxcdn.com/wp-content/uploads/2019/07/lighting.jpg'
		const response = await fetch( imageUrl );
		const blob = await response.blob();
		const file = new File([blob], 'foto.jpg');
		
		const cloudUpload = await fileUpload( file );
		expect( typeof cloudUpload.url ).toBe('string');

		const cloudDelete = await cloudinary.api.delete_resources([ cloudUpload.id ]);
	});

	test('should return null if there is no images', async () => {
		const file = new File([], 'foto.jpg');
		const response = await fileUpload( file );
		
		expect( response ).toBe(null);
	});

});
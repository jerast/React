export const fileUpload = async ( file ) => {
	if (!file) 
		throw new Error('There is no file to upload!');

	const cloudURL = 'https://api.cloudinary.com/v1_1/dlgvigwlh/upload';

	const formData = new FormData();
	formData.append('upload_preset', 'journal-app');
	formData.append('file', file);

	try {
		const response = await fetch( cloudURL, {
			method: 'POST',
			body: formData,
		});
		
		if ( !response.ok ) 
			throw new Error('Something wrong with the file upload!');

		const { public_id, secure_url } = await response.json();

		return {
			secure_url,
			public_id,
		};
	} 
	catch (error) {

		console.log( error );
		throw new Error( error.message );
	};

}
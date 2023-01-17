export const fileUpload = async ( file ) => {
	if (!file) {
		// console.error('There is no file to upload!' );
		return null;
	};

	const cloudURL = 'https://api.cloudinary.com/v1_1/dlgvigwlh/upload';

	const formData = new FormData();
	formData.append('upload_preset', 'journal-app');
	formData.append('file', file);

	try {
		const response = await fetch( cloudURL, {
			method: 'POST',
			body: formData,
		});
		
		if ( !response.ok ) {
			// console.error('Something wrong with the file upload!');
			return null;
		};

		const { public_id: id, secure_url: url } = await response.json();

		return {
			id,
			url,
		};
	} 
	catch (error) {

		// console.log( error );
		// console.error( error.message );
		return null;
	};

};
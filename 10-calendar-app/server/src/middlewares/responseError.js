export const responseError = (response, error) => {
	console.log({
		info: 'Something goes wrong with controllers',
		message: error.message,
		// log: error,
	});
	response.status(500).json({
		ok: false,
		message: 'Ha ocurrido un error,  por favor hablar con el administrador',
	});
};

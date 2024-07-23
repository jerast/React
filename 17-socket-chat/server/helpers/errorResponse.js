export const errorResponse = (error, response) =>
  // console.log(error)
	response.status(500).json({
    ok: false,
		error: 'Something goes wrong',
		// message: error.message,
		// log: error,
	})

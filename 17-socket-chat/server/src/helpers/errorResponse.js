/**
 * Sends a standardized error response.
 * @function errorResponse
 * @memberof module:Helpers
 * @param {Error} error - The error object.
 * @param {Response} response - Express response object.
 * @returns {void}
 */
export const errorResponse = (error, response) =>
  // console.log(error)
	response.status(500).json({
    ok: false,
		error: 'Something goes wrong',
		// message: error.message,
		// log: error,
	})

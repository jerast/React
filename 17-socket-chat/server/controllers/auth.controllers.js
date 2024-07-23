import { request, response } from 'express'
import bcrypt from 'bcryptjs'
import User from '../schemas/user.schema.js'
import { generateJWT } from '../jwt/jwt.js'
import { errorResponse } from '../helpers/errorResponse.js'

export const login = async (req = request, res = response) => {
  const { email, password } = req.body

  try {
    const user = await User.findOne({ email }) // validate email
		if ( !user ) return res.status(404).json({
      ok: false,
      error: 'Email / Password are not correct.',
    })

    const validPassword = bcrypt.compareSync( password, user.password ) // validate password
		if ( !validPassword ) return res.status(404).json({
			ok: false,
			error: 'Email / Password are not correct.',
		})

    const token = await generateJWT(user.toJSON()) // generate token

    return res.json({
      ok: true, 
      user,
      token
    }) 
  } catch (error) { 
    errorResponse(error, res) 
  }
}

export const renewToken = async (req = request, res = response) => {
  const { uid } = req.session

  try {
    const user = await User.findById( uid ) // verify uid

    const newToken = await generateJWT({ uid }) // generate token

    return res.json({
      ok: true,
      user,
      newToken,
    })
  } catch (error) { 
    errorResponse(error, res) 
  }
}
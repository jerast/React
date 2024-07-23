import { request, response } from 'express'
import bcrypt from 'bcryptjs'
import User from '../schemas/user.schema.js'
import { generateJWT } from '../jwt/jwt.js'
import { errorResponse } from '../helpers/errorResponse.js'

export const createUser = async (req = request, res = response) => {
  const { name, email, password, picture } = req.body

  try {
    const validUser = await User.findOne({ email }) // validate email
    if ( validUser ) return res.status(404).json({
      ok: false,
      error: 'Email already in use'
    })
    
    const cryptedPassword = bcrypt.hashSync(  // encrypt password
      password, 
      bcrypt.genSaltSync() 
    )
    
    const newUser = new User({ name, email, password: cryptedPassword, picture }) // create / save user
    await newUser.save()
    
    const token = await generateJWT( newUser.toJSON() ) // generate token
    
    return res.json({
      ok: true,
      newUser,
      token
    })
  } catch (error) { 
    errorResponse(error, res) 
  }
}
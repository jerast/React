import User from '../schemas/user.schema.js'

export const userConnect = async (uid) => {
  try {
    const user = await User.findById(uid)
    
    user.online = true
    await user.save()
    
    return {
      ok: true, 
      user,
    }
  } catch (error) {
    return {
      ok: false, 
      error,
    }
  }
}

export const userDisconnect = async (uid) => {
  try {
    const user = await User.findById(uid)
    
    user.online = false
    await user.save()
    
    return {
      ok: true,
      user,
    }
  } catch (error) {
    return {
      ok: false, 
      error,
    }
  }
}
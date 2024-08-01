import { useContext } from 'react'
import { AuthContext } from '@auth/context/AuthContext'

export const InboxSearch = () => {
  const { auth, logout } = useContext(AuthContext)

  return (
    <div className="headind_srch">
      <button 
        className="profile_img"
        onClick={logout}
      > 
        <img src={auth.user.picture || '/images/user-profile.jpg'} alt="profile" />
      </button>
      <div className="recent_heading">
        <h4>{auth.user.name}</h4>
      </div>
      <div className="srch_bar">
        <div className="stylish-input-group">
          <button 
            className="btn text-danger"
            onClick={logout}
          >
            Salir
          </button>
        </div>
      </div>
    </div>
  )
}

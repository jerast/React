import '@auth/styles/auth.css'

export const AuthLayout = ({ children }) =>
  <div className="auth-layout limiter">
    <div className="container-login100">
      <div className="wrap-login100 p-t-50 p-b-90">

        { children }

      </div>
    </div>
  </div>

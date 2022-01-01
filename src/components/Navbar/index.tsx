import { AuthContext } from 'AuthContext'
import { useContext, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { getTokenData, isAuthenticated } from 'utils/auth'
import './styles.css'

const Navbar = () => {
  const { authContextData, setAuthContextData } = useContext(AuthContext)

  useEffect(() => {
    if (isAuthenticated()) {
      setAuthContextData({
        authenticated: isAuthenticated(),
        tokenData: getTokenData(),
      })
    } else {
      setAuthContextData({
        authenticated: false,
      })
    }
  }, [setAuthContextData])

  return (
    <nav className="navbar main-nav navbar-container bg-primary">
      <div className="container-fluid">
        <Link to="/movies" className="nav-logo-text">
          <h4>MovieFlix</h4>
        </Link>
        {authContextData.authenticated && (
          <div className="nav-login-logout">
            <a href="#logout">LOGOUT</a>
          </div>
        )}
      </div>
    </nav>
  )
}

export default Navbar

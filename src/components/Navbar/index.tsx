import './styles.css'

const Navbar = () => {
  return (
    <nav className="navbar main-nav navbar-container bg-primary">
      <div className="container-fluid">
        <a href="#link" className="nav-logo-text">
          <h4>MovieFlix</h4>
        </a>
        <div className="nav-login-logout">
          <a href="#logout">LOGOUT</a>
        </div>
      </div>
    </nav>
  )
}

export default Navbar

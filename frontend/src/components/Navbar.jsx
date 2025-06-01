import './Navbar.css'

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <span role="img" aria-label="logo" className="navbar-logo-icon">🌱</span> AgriCastAI
      </div>
      <div className="navbar-links">
        <a href="#farmer-dashboard" className="navbar-link">Farmer Dashboard</a>
        <a href="#admin-panel" className="navbar-link">Admin Panel</a>
      </div>
    </nav>
  )
}

export default Navbar 
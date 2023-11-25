import './index.css'

const Header = () => (
  <nav className="nav-header">
    <div className="nav-content">
      <div className="nav-bar-content-1">
        <img
          className="logo-img"
          src="https://cdn.theorg.com/fe459660-1022-4417-94be-e2e154ec4fb9_medium.jpg"
          alt="img"
        />
        <ul className="nav-menu">
          <li className="nav-menu-item">Store</li>
          <li className="nav-menu-item">Orders</li>
          <li className="nav-menu-item">Analytics</li>
        </ul>
      </div>
      <div className="nav-bar-content-2">
        <img
          className="cart-logo-img"
          src="https://cdn-icons-png.flaticon.com/512/263/263142.png"
          alt="img"
        />
        <p className="cart-item">Hello, James </p>
      </div>
    </div>
  </nav>
)

export default Header

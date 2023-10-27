import './Navbar.css';
import { Link } from 'react-router-dom';
import Logo from '../../assets/images/Logo-Asachi.png';

function Navbar() {
  return (
    <nav className="navbar navbar-expand tuisai-nav">
      <a className="navbar-brand" href="/">
        <img src={Logo} alt="logo" />
      </a>
      <ul className="navbar-nav">
        <li className="nav-item active">
          <p className="nav-link text-white tuiasi-link">Home</p>
        </li>
        <li className="nav-item">
          <Link className="nav-link text-white tuiasi-link" href="/">
            Centre de cercetare
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link text-white tuiasi-link" href="/">
            Proiecte
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link text-white tuiasi-link" href="/">
            Cercetatori
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link text-white tuiasi-link" href="/">
            Articole
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link text-white tuiasi-link" href="/">
            Evenimente
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link text-white tuiasi-link" href="/">
            Librarie
          </Link>
        </li>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavDarkDropdown"
          aria-controls="navbarNavDarkDropdown"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarNavDarkDropdown">
          <ul className="navbar-nav">
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="/"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Dropdown
              </a>
              <ul className="dropdown-menu dropdown-menu-dark">
                <li>
                  <a className="dropdown-item" href="/">
                    Action
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="/">
                    Another action
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="/">
                    Something else here
                  </a>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </ul>
    </nav>
  );
}

export default Navbar;

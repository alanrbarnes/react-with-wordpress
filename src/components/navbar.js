import React from "react";
// import {Link} from 'react-router'
import { Link } from "react-router-dom";
// import Login from 'login';

class Navbar extends React.Component {
  render() {
    return (
      <nav className="navbar navbar-expand-lg bg-dark" data-bs-theme="dark">
        <div className="container-fluid">
          <div className="collapse navbar-collapse" id="navbarColor02">
            <ul className="navbar-nav me-auto">
              <li className="nav-link">
              {/* <Link to={{pathname:"/", search: '/', hash: '/', state: '/', key: '/'}}>About</Link> */}
                  <Link className="nav-link" to="/">Home</Link>
              </li>
              <li className="nav-link">
                  <Link className="nav-link" to="/login">Login</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    )
  }
}

export default Navbar;

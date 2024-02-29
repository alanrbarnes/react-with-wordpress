import { React, useState } from "react";
// import {Link} from 'react-router'
import { Link, Outlet, useParams, useLocation } from "react-router-dom";
import ToggleSidebarBtn  from "../../components/Dashboard/Sidebar/ToggleButton/ToggleSidebarBtn.component";
import SearchBar  from "../../components/Dashboard/SearchBar/SearchBar.component";
import UserProfileNav from "../../components/Dashboard/UserProfile/UserProfileNav.component";
// import Login from 'login';


const Navigation = ( props ) => {
    const [Dashboard, setDashboard] = useState('');

    //const routeParams = useParams();
    const path = useLocation();
    // console.log("Handlebars")
    // console.log(props.handleSidebarToggleClick);
// console.log(path.pathname.includes("/dashboard"))

    return (
      <div>
      <div>
      <nav className="navbar navbar-expand-lg bg-dark sb-topnav navbar-dark" data-bs-theme="dark">
        <a className="navbar-brand ps-3" href="/"></a>
        {/*	If on dashboard page */}
				{ path.pathname.includes("/dashboard") ? (
					<ToggleSidebarBtn
						handleSidebarToggleClick={ props.handleSidebarToggleClick }
						active={ props.active }
					/>
				) : console.log("not the dashboard") }
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
                {/*	If on dashboard page */}
				{ path.pathname.includes("/dashboard") ? (
          <SearchBar/>
				) : console.log("not the dashboard") }

        {/*	If on dashboard page */}
				{ path.pathname.includes("/dashboard") ? (
          <UserProfileNav/>
				) : console.log("not the dashboard2") }

      </nav>
      </div>
      <Outlet />
      </div>
      
    )
}


export default Navigation;

import React, { useState } from 'react';
import { getUserName } from "../../../../Functions/Functions.component";
import NavLink from "../../../NavLink/NavLink.component";
import { Link } from "react-router-dom";

const SidebarMenu = ( props ) => {

	const [ subMenuActive, setSubMenuActive ] = useState( false );
	const userName = ( getUserName() ) ? getUserName() : '';

	console.log("Sidebar Properties")
	console.log(props)

	return (
        <div>

		<nav className="sb-sidenav accordion sb-sidenav-dark" id="sidenavAccordion">
		<div className="sb-sidenav-menu">

			<div className="nav">
				<div className="sb-sidenav-menu-heading"><span>Core</span></div>

				{/* <a className="nav-link" href="index.html"> */}
					

					<div className="sidebar-header">
					    
					    <Link to={ `/dashboard/${ userName }` } className='nav-link'>
						    <div className="sb-nav-link-icon"><i className="fas fa-tachometer-alt"></i></div> Dashboard
						</Link>
				    </div>
				{/* </a> */}

                {/* Content */}
				<div className="sb-sidenav-menu-heading"><span>Content</span></div>

				{/* Pages */}
				<a className="nav-link collapsed" href="#" data-bs-toggle="collapse" data-bs-target="#collapsePages" aria-expanded="false" aria-controls="collapsePages">
					<div className="sb-nav-link-icon"><i className="fas fa-columns"></i></div> Pages <div className="sb-sidenav-collapse-arrow"><i className="fas fa-angle-down"></i></div>
				</a>
				<div className="collapse" id="collapsePages" aria-labelledby="Pages" data-bs-parent="#sidenavAccordion">
					<nav className="sb-sidenav-menu-nested nav">
					    <a className="nav-link" href="layout-static.html">All Pages</a>
					    <a className="nav-link" href="layout-sidenav-light.html">Page by title</a> 
						<a className="nav-link" href="layout-sidenav-light.html">Page by Path</a> 
						<a className="nav-link" href="layout-static.html">Create a Page</a>
					</nav>
				</div>

				{/* Posts */}
				<a className="nav-link collapsed" href="#" data-bs-toggle="collapse" data-bs-target="#collapsePosts" aria-expanded="false" aria-controls="collapsePosts">
				    <div className="sb-nav-link-icon"><i className="fas fa-book-open"></i></div> Posts <div className="sb-sidenav-collapse-arrow"><i className="fas fa-angle-down"></i></div>
				</a>
				<div className="collapse" id="collapsePosts" aria-labelledby="Posts" data-bs-parent="#sidenavAccordion">
					<nav className="sb-sidenav-menu-nested nav">
					    <a className="nav-link" href="layout-static.html">All Posts</a>
					    <a className="nav-link" href="layout-sidenav-light.html">Post by title</a> 
						<a className="nav-link" href="layout-sidenav-light.html">Post by Path</a> 
						<a className="nav-link" href="layout-static.html">Create a Post</a>
					</nav>
				</div>

                {/* User Management */} 
				<div className="sb-sidenav-menu-heading"><span>User Management</span></div>

                {/* Users */}
				<a className="nav-link collapsed" href="#" data-bs-toggle="collapse" data-bs-target="#collapseUsers" aria-expanded="false" aria-controls="collapseUsers">
				    <div className="sb-nav-link-icon"><i className="fas fa-book-open"></i></div> Get Users <div className="sb-sidenav-collapse-arrow"><i className="fas fa-angle-down"></i></div>
				</a>
				<div className="collapse" id="collapseUsers" aria-labelledby="Users" data-bs-parent="#sidenavAccordion">
					<nav className="sb-sidenav-menu-nested nav">
					    <a className="nav-link" href="layout-static.html">All Users</a>
					    <a className="nav-link" href="layout-sidenav-light.html">Administrators</a> 
						<a className="nav-link" href="layout-sidenav-light.html">Editors</a> 
						<a className="nav-link" href="layout-sidenav-light.html">Subscribers</a> 
					</nav>
				</div>

				{/* Authentication */}
				<a className="nav-link collapsed" href="#" data-bs-toggle="collapse" data-bs-target="#collapseAuthentication" aria-expanded="false" aria-controls="collapseAuthentication">
				    <div className="sb-nav-link-icon"><i className="fas fa-book-open"></i></div> User Authentication <div className="sb-sidenav-collapse-arrow"><i className="fas fa-angle-down"></i></div>
				</a>
				<div className="collapse" id="collapseAuthentication" aria-labelledby="Authentication" data-bs-parent="#sidenavAccordion">
					<nav className="sb-sidenav-menu-nested nav">
					    <a className="nav-link" href="layout-static.html">Authenticate User</a>
					    <a className="nav-link" href="layout-sidenav-light.html">Create User</a> 
						<a className="nav-link" href="layout-sidenav-light.html">Reset Password</a> 
						<a className="nav-link" href="layout-sidenav-light.html">Change Username</a> 
					</nav>
				</div>


                {/* File  Management */} 
				<div className="sb-sidenav-menu-heading"><span>User Management</span></div>

                {/* Media */}
				<a className="nav-link collapsed" href="#" data-bs-toggle="collapse" data-bs-target="#collapseMedia" aria-expanded="false" aria-controls="collapseMedia">
				    <div className="sb-nav-link-icon"><i className="fas fa-book-open"></i></div> Media <div className="sb-sidenav-collapse-arrow"><i className="fas fa-angle-down"></i></div>
				</a>
				<div className="collapse" id="collapseMedia" aria-labelledby="Media" data-bs-parent="#sidenavAccordion">
					<nav className="sb-sidenav-menu-nested nav">
					    <a className="nav-link" href="layout-static.html">All Media</a>
					    <a className="nav-link" href="layout-sidenav-light.html">All Pictures</a> 
						<a className="nav-link" href="layout-sidenav-light.html">All PDF files</a> 
					</nav>
				</div>

				<div style={{margin: '4em'}}></div>


                {/* misc */}
				{/* <div className="sb-sidenav-menu-heading"><span>Addons</span></div>
				<a className="nav-link" href="charts.html">
					<div className="sb-nav-link-icon"><i className="fas fa-chart-area"></i></div> Charts
				</a>
				<a className="nav-link" href="tables.html">
					<div className="sb-nav-link-icon"><i className="fas fa-table"></i></div> Tables
				</a> */}

				

				{/* <ul className="list-unstyled components">
					<li className="active">
						<NavLink
							to="#"
							data-toggle="collapse"
							aria-expanded={ subMenuActive }
							className={ `dropdown-toggle ${ ! subMenuActive ? 'collapsed' : '' }` }
							onClick={ ()  => setSubMenuActive( ! subMenuActive ) }
						>
							Posts
						</NavLink>
						<ul className={ `collapse list-unstyled ${ subMenuActive ? 'show' : '' }` } id="homeSubmenu">
							<li>
								<a href="#">All Posts</a>
							</li>
							<li>
								<NavLink to="/dashboard/create-post">Add New</NavLink>
							</li>
						</ul>
					</li>
					<li>
						<a href="#">Pages</a>
					</li>
					<li>
						<a href="#">Media</a>
					</li>
					<li>
						<a href="#">Users</a>
					</li>
				</ul> */}

			</div>


		</div>
		<div className="sb-sidenav-footer">
			<div className="small"><span>Logged in as:</span></div><span> {userName} </span>
		</div>
	    </nav>
		
        </div>
	)
};

export default SidebarMenu;

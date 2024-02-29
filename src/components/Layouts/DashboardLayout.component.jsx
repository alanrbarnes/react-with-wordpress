import { React, useState, useEffect } from "react";
import SidebarMenu from "../Dashboard/Sidebar/SidebarMenu/SidebarMenu.component";
import Content from "../Content/Content.component";
import Navigation from '../../Routes/Navigation/Navigation.component';

const DashboardLayout = ( ) => {
    const [active, setActive] = useState('');
	


	const handleSidebarToggleClick = (event) => {
		event.preventDefault();
		document.body.classList.toggle('sb-sidenav-toggled');
            localStorage.setItem('sb|sidebar-toggle', document.body.classList.contains('sb-sidenav-toggled'));

		setActive(!active);
	};

	return(
		// <React.Fragment key="1">
		<div>
		    {/* Top Navbar */}
		    <Navigation
		    	handleSidebarToggleClick={ handleSidebarToggleClick }
		    	active={ active }
				dashboard={true}
		    />
			<div id="layoutSidenav">
                <div id="layoutSidenav_nav">
			      <SidebarMenu
			      	active={ active }
			      />
			    </div>
                <div id="layoutSidenav_content">
			        <main>
			            <Content
			            	handleSidebarToggleClick={ handleSidebarToggleClick }
			            	active={ active }
			            >
				        </Content>
				    </main>
                    {/* <footer class="bg-light mt-auto py-4">
                        <div class="container-fluid px-4">
                            <div class="d-flex justify-content-between align-items-center small">
                                <div class="text-muted"><span>Copyright © Your Website 2023</span></div>
                                <div><a href="#">Privacy Policy</a><span> · </span><a href="#">Terms &amp; Conditions</a></div>
                            </div>
                        </div>
                    </footer> */}
				</div>
            </div>
				{/* { this.props.children } */}
		</div>

		// </React.Fragment> 
	)
}


export default DashboardLayout;

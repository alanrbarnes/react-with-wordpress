import React from 'react';

const ToggleSidebarBtn = ( props ) => {

	console.log("Togglebutton Properties")
	console.log(props)

	return (

		<button type="button" className={`btn btn-secondary ml-2 btn-link btn-sm order-1 order-lg-0 me-4 me-lg-0 ${ props.active ? 'active' : ''}`} id="sidebarToggle" onClick={ props.handleSidebarToggleClick } >
		    <i style={{color: 'f2f3f4'}} className="fas fa-bars"></i> 
			{/* fa-solid fa-bars */}
		</button>

	)
};

export default ToggleSidebarBtn;
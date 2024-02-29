import React from 'react';
import Navigation from "../../Routes/Navigation/Navigation.component";

const Content = ( props ) => {
	console.log("Content Properties")
	console.log(props)
	return (
		<div id="content" className={ props.active ? 'active' : '' }>
			

			{/* Main Content */}
			<div className="main-content">
				{ props.children }
			</div>
		</div>
	)
};

export default Content;

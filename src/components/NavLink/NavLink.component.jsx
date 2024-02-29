import React from 'react';
import { Link } from "react-router-dom";
import styled from 'styled-components';

/**
 * Reach Routers gives us access to a function called getProps.
 * Whatever is returned by getProps(), in this case style,
 * will be applied to the Link attribute as props.
 * So here {...props} will be replaced by style: {}
 *
 * @param props
 * @return {*}
 * @constructor
 */

//add a styled component called Container
const Container =  styled.a`
    display: flex;
`;

//Add a styled conponent called Pane
// const Pane = styled.div`
//     flex: ${props => props.weight};
// `;


export const NavLink = ({
    children,
    leftWeight = 1,
    rightWeight = 1,
}) => {
    const [Left, Right] = children;
    return (
        <Container>
            {/* <Link
		    getProps={({ isCurrent }) => ( { style: { color: isCurrent ? '#fff' : '#fffc' } } )}
		    className="nav-link"
	        /> */}
        </Container>
    )
}

// const NavLink = (props) => {
// 	console.log("NavLink")
// 	console.log(props)

// 	return(
// 		<Link
// 		{...props}
// 		getProps={({ isCurrent }) => ( { style: { color: isCurrent ? '#fff' : '#fffc' } } )}
// 		className="nav-link"
// 	/>
// 	)
	
// 	}

// export default NavLink;

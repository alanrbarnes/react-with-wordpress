import React from 'react';
import Navbar from './navbar';

class Dashboard extends React.Component {
    render() {
        const userName = localStorage.getItem( 'userName' );
        return(
            <div>
                <Navbar />
                <h2>Welcome {userName}!</h2>
                Dashboard
            </div>
        )
    }
}

export default Dashboard;
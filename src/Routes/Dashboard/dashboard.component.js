import { useState, useEffect } from "react";
import DashboardLayout from "../../components/Layouts/DashboardLayout.component";
import { getUserName } from "../../Functions/Functions.component";
import axios from 'axios';
import { Router, Routes, Route, useParams,  browserHistory, IndexRoute } from 'react-router-dom'

const Dashboard = ( props ) => {
	    //var url = window.location.pathname;
	const [Username, setUsername] = useState('');
    const [Password, setPassword] = useState('');
    const [UserNiceName, setUserNiceName] = useState('');
    const [UserEmail, setUserEmail] = useState('');
    const [loggedIn, setLoggedIn] = useState(false);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
    const [token, setToken] = useState([]);
    const routeParams = useParams();

	const userName = ( getUserName() ) ? getUserName() : '';

    console.log("Dashboard Properties")
	console.log(props)

	useEffect(() => {
        setLoading(true);
        setLoggedIn(localStorage.getItem('loggedIn'));
        setToken(localStorage.getItem( 'token'));
        if ( !loggedIn || (token == null) ) {
           //return redirect("/");
           console.log("redirect");
            //window.location.href = '/';
            //return ( <Redirect to={`/dashboard/${user}`} noThrow /> ) //let e = `/dashboard/${Username}`
            //return this.props.history.push("/"); //location.replace(e);///<redirect to={`/dashboard/${Username}`} noThrow />
        }
    }, []);


	return(
		<DashboardLayout>
			{ userName ? <h2>Welcome { userName }!!</h2>: '' }
		</DashboardLayout>
	)
};

export default Dashboard;

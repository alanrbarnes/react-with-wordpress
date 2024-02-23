import { useState, useEffect } from "react";
import Navigation from '../Navigation/Navigation.component';
import axios from 'axios';
import { redirect, useNavigate, useParams, browserHistory, IndexRoute  } from 'react-router-dom'
// import {withRouter} from 'react-router-dom'
// import { connect } from "react-redux";


const Login = () => {
    
    const [Username, setUsername] = useState('');
    const [Password, setPassword] = useState('');
    const [UserNiceName, setUserNiceName] = useState('');
    const [UserEmail, setUserEmail] = useState('');
    const [loggedIn, setLoggedIn] = useState(false);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
    const [token, setToken] = useState([]);
    const routeParams = useParams();
    const navigate = useNavigate();
    const user = UserNiceName ? UserNiceName : localStorage.getItem( 'userName' );
    
    useEffect(() => {
        setLoading(true);
        setLoggedIn(localStorage.getItem('loggedIn'));
        setToken(localStorage.getItem( 'token'));
        if ( loggedIn || (token != null) ) {
            
           navigate(`/dashboard/${user}`);
        //    <redirect to={`/dashboard/${user}`} noThrow />
        //    navigate('/dashboard');
           console.log("redirect");
        //    return null;

            //window.location.href = '/';
            //return ( <Redirect to={`/dashboard/${user}`} noThrow /> ) //let e = `/dashboard/${Username}`
            //return this.props.history.push("/"); //location.replace(e);///<redirect to={`/dashboard/${Username}`} noThrow />
        }
    }, []);
    

    // const redirect = () => {
    //     window.location.href = '';
    // }


    const onFormSubmit = ( event ) => {
        event.preventDefault();
        setLoading(true);

        const siteUrl = 'http://localhost:8080/codawp1/index.php/';
 
        const loginData = {
            username: Username,
            password: Password,
        }

        axios.post( `${siteUrl}/wp-json/jwt-auth/v1/token`, loginData )
        .then((response) => {
            console.warn(response.data);
            // setLoading(false);
            // setToken(response.data.token);
            // setUserNiceName(response.data.userNiceName);
            // setUserEmail(response.data.user_Email);
            // setLoggedIn(true);

            if ( undefined === response.data.token ) {
                // setError(response.error.message);
                return;
            }

            localStorage.setItem( 'token', response.data.token );
            localStorage.setItem( 'loggedIn', true );
            localStorage.setItem( 'userNiceName', response.data.user_nicename );
            localStorage.setItem( 'userName', response.data.user_display_name );
            localStorage.setItem( 'userEmail', response.data.user_email );
            // localStorage.setItem( 'userID', res.data.id );
        })
        .catch((error) => {
            setLoading(false);
            setError(JSON.stringify(error.message));
            //console.warn(error.message);
        }) 
        .finally(() => setLoading(false)); //this.setState( {loading: false, error: JSON.stringify(error.response.data.message) }))
        
    };

return (

    //const { username, password, loggedIn, userNiceName } = this.state;

    <div>
        <form onSubmit={ onFormSubmit } style={{marginLeft: '20px'}}>
            <label className='form-group'>
                Username:
                <input
                    type="text"
                    className="form-control"
                    name="username"
                    value={ Username }
                    onChange={ (e) => setUsername(e.target.value) }
                />
            </label>
            <br />
            <label className='form-group'>
                Password
                <input
                    type="password"
                    className="form-control"
                    name="password"
                    value={ Password }
                    onChange={ (e) => setPassword(e.target.value) }
                />
            </label>
            <br />
            <button className="btn btn-primary mb3" type="submit">Login</button>
            
        </form>
    </div>
);

}
export default Login;
    


// const mapStateToProps = state => {
//     return {
//       token: state.token
//     };
//   };

//   const withRouter = (Component) =>{
//     const Wrapper = (props) =>{
//         const history = useNavigate();
//         return <Component history={history} {...props}/>
//     } 
//     return Wrapper;
// };


//export default withRouter(connect(mapStateToProps)(Login));
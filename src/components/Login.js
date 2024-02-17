import React from 'react'
import Navbar from './navbar';
import axios from 'axios';
import {Route, Routes} from 'react-router'
import { useNavigate } from 'react-router-dom'
// import {withRouter} from 'react-router-dom'
// import { connect } from "react-redux";

class Login extends React.Component {

    constructor( props ) {
        super( props );
        this.state = {
            username: '',
            password: '',
            userNiceName: '',
            userEmail: '',
            loggedIn: false,
            loading: false,
            error: ''
        };
    }

    onFormSubmit = ( event ) => {
        event.preventDefault();

        const siteUrl = 'http://localhost:8080/codawp1/index.php/';

        const loginData = {
            username: this.state.username,
            password: this.state.password,
        }

        this.setState( {loading: true }, () => {
            axios.post( `${siteUrl}/wp-json/jwt-auth/v1/token`, loginData )
                .then( res=> {
                    console.warn( res.data );
                    if ( undefined === res.data.token ) {
                        this.setState( { error: res.data.message, loading: false })
                        return;
                    }

                    localStorage.setItem( 'token', res.data.token );
                    localStorage.setItem( 'userNiceName', res.data.user_nicename );
                    localStorage.setItem( 'userName', res.data.user_display_name );
                    localStorage.setItem( 'userEmail', res.data.user_email );
                    // localStorage.setItem( 'userID', res.data.id );

                    this.setState( {
                        loading: false, 
                        token: res.data.token,
                        userNiceName: res.data.userNiceName,
                        userEmail: res.data.user_Email,
                        loggedIn: true
                    })
                })
                .catch ( err => {
                    console.warn( err.response.data );
                    this.setState( {error: err.response.data, loading: false})
                })
        })
    };

    handleOnChange = ( event ) => {
        this.setState( {[event.target.name ]: event.target.value}  )
    };
    render() {
        const { username, password, loggedIn, userNiceName } = this.state;

        const user = userNiceName ? userNiceName : localStorage.getItem( 'userName' );
        if ( loggedIn || localStorage.getItem( 'token')) {
            let e = `/dashboard/${username}`
            //return this.props.history.push("/"); //location.replace(e);///<redirect to={`/dashboard/${username}`} noThrow />
        } 
        // else {
            return (
                <div>
                    <Navbar/>
                    <form onSubmit={ this.onFormSubmit } style={{marginLeft: '20px'}}>
                        <label className='form-group'>
                            Username:
                            <input
                                type="text"
                                className="form-control"
                                name="username"
                                value={ username }
                                onChange={ this.handleOnChange }
                            />
                        </label>
                        <br />
                        <label className='form-group'>
                            Password
                            <input
                                type="password"
                                className="form-control"
                                name="password"
                                value={ password }
                                onChange={ this.handleOnChange }
                            />
                        </label>
                        <br />
                        <button className="btn btn-primary mb3" type="submit">Login</button>
                        
                    </form>
                </div>
            );
        // }
        
    }
}

const mapStateToProps = state => {
    return {
      token: state.token
    };
  };

  const withRouter = (Component) =>{
    const Wrapper = (props) =>{
        const history = useNavigate();
        return <Component history={history} {...props}/>
    } 
    return Wrapper;
};

export default Login;
//export default withRouter(connect(mapStateToProps)(Login));
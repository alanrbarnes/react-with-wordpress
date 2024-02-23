import { useState, useEffect } from "react";
// import { Link } from 'react-router'
import { Link } from "react-router-dom";
import Navigation from "../Navigation/Navigation.component";
import axios from 'axios';
// import ReactDOM from 'react';
import '../../Styles.css';
import Moment from 'react-moment';
import Loader from '../../Loader.gif';
// import Login from './login';



const Home = () => {

    // const [posts, setPosts] = useState({item: []});
    const [posts, setPosts] = useState([]);
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);
        const wordPressSiteUrl = 'http://localhost:8080/codawp1/index.php';
        //const wordPressSiteUrl = 'https://krc.kingdomrunningclub.org';
        const headers = {
            'Content-Type': 'text/plain',
            'Access-Control-Allow-Origin': '*'
        };

        const res = axios.get( `${wordPressSiteUrl}/wp-json/wp/v2/posts`, headers )
        .then((response) => {
            setLoading(false);
            setPosts(...posts, response.data);
            // console.warn(response.data);
        })
        .catch((error) => {
            setLoading(false);
            setError(JSON.stringify(error.message));
            // console.warn(error);
        }) 
        .finally(() => setLoading(false)); //this.setState( {loading: false, error: JSON.stringify(error.response.data.message) }))

    }, []); //leave array empty to only load on first load

    return (
        <div>
            {/* <Navbar/> */}
            { error && <div className="alert alert-danger">{ error }</div> }
            { posts.length ? (
                <div className="mt-5 post-container">
                { posts.map( (post) => (

                    <div key={post.id} className="card border-dark mb-3" style={{ width: '50rem'}}>
                            {/* title */}
                            <div className="card-header">
                                <Link to={`/post/${post.id}` }> 
                                    {post.title.rendered}
                                </Link>
                            </div>
                            {/* Body */}
                            <div className="card-body">
                                <div className="card-text post-content">
                                    {/* this is rendering html from wordpress directly */}
                                    {/* <div dangerouslySetInnerHTML={{ __html: post.content.rendered}}></div> */}
                                    <div dangerouslySetInnerHTML={{ __html: post.excerpt.rendered}}></div>
                                </div>
                            </div>
                            {/* Footer */}
                            <div className="card-footer">
                                <Moment fromNow>{post.date}</Moment>
                                {/* <Link to={{pathname: `/post/${post.id}`, state: this.state}} className="btn btn-secondary float-right">Read More..</Link> */}
                            </div>
                            
                        </div>
                    
                    ))
                    
                }

                </div>
            ) : ''}
            { loading && <img className="loader" src={Loader} alt="Loader" />}
        </div>
    )
}

export default Home;



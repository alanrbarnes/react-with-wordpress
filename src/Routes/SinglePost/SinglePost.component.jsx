import { useState, useEffect } from "react";
import axios from 'axios';
import { Router, Routes, Route, useParams,  browserHistory, IndexRoute } from 'react-router-dom'
// import Update from '../Update';
// import Output from './Output';
// import {syncHistoryWithStore, routerReducer} from 'react-router-redux'
// import {syncHistoryWithStore, routerReducer} from 'react-router-redux'
// import { withRouter } from 'react-router-dom';
import Loader from '../../Loader.gif';
import Moment from 'react-moment';

    
const SinglePost = () => {
    //var url = window.location.pathname;
    const [id, setId] = useState('');
    const [post, setPost] = useState({});
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
    const routeParams = useParams();

    useEffect(() => {
        // setId(url.substring(url.lastIndexOf('/') + 1));
        setId(id, routeParams.id);
        setLoading(true);

        const wordPressSiteUrl = 'http://localhost:8080/codawp1/index.php';
        //const wordPressSiteUrl = 'https://krc.kingdomrunningclub.org';
        const headers = {
            'Content-Type': 'text/plain',
            'Access-Control-Allow-Origin': '*'
        };

        axios.get( `${wordPressSiteUrl}/wp-json/wp/v2/posts/${routeParams.id}`, headers )
        .then((response) => {
            setLoading(false);
            setPost(response.data);
            console.warn(response.data);
        })
        .catch((error) => {
            setLoading(false);
            setError(JSON.stringify(error.message));
            //console.warn(error.message);
        }) 
        .finally(() => setLoading(false)); //this.setState( {loading: false, error: JSON.stringify(error.response.data.message) }))

    }, []); //leave array empty to only load on first load
    // console.log(this.state.id);

        

    //const { post, error, loading } = this.state;
        return(
            <div>
            { error && <div className="alert alert-danger">{ error }</div> }
                { Object.keys( post ).length ? (
                    <div className="mt-5 post-container">
                            <div key={post.id} className="card border-dark mb-3" style={{ width: '50rem'}}>
                                {/* title */}
                                <div className="card-header">
                                {post.title.rendered}
                                </div>
                                {/* Body */}
                                <div className="card-body">
                                    <div className="card-text post-content">
                                        {/* this is rendering html from wordpress directly */}
                                        {/* <div dangerouslySetInnerHTML={{ __html: post.content.rendered}}></div> */}
                                        <div dangerouslySetInnerHTML={{ __html: post.content.rendered}}></div>
                                    </div>
                                </div>
                                {/* Footer */}
                                <div className="card-footer">
                                    <Moment fromNow>{post.date}</Moment>
                                    
                                </div>
                                
                            </div>
                    </div>
                ) : ''}
                { loading && <img className="loader" src={Loader} alt="Loader" />}
            </div>
            
        )
}

export default SinglePost;
// export withRouter(SinglePost);
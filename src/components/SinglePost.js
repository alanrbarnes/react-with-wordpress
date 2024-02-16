import React from 'react'
import Navbar from './navbar';
import axios from 'axios';
import { Router, Routes, Route, useParams,  browserHistory, IndexRoute } from 'react-router-dom'
import Update from '../Update';
// import Output from './Output';
// import {syncHistoryWithStore, routerReducer} from 'react-router-redux'
// import {syncHistoryWithStore, routerReducer} from 'react-router-redux'
import { withRouter } from 'react-router-dom';
import Loader from '../Loader.gif';
import Moment from 'react-moment';



class SinglePost extends React.Component {

    constructor( props ) {
        super( props );
        this.props = props;
        // console.log( this);
        var url = window.location.pathname;
        // var ID = url.substring(url.lastIndexOf('/') + 1);
        // console.log("id: " + id);

        this.state = {
            id: url.substring(url.lastIndexOf('/') + 1),
            loading: false,
            post: {},
            error: ''
            // id: this.props.params;
        }
    }

    componentDidMount() {
        console.log(this.state.id);

        const wordPressSiteUrl = 'http://localhost:8080/codawp1/index.php';
        //const wordPressSiteUrl = 'https://krc.kingdomrunningclub.org';
        const headers = {
            'Content-Type': 'text/plain',
            'Access-Control-Allow-Origin': '*'
        };
        this.setState( {loading: true}, () => {
            axios.get( `${wordPressSiteUrl}/wp-json/wp/v2/posts/${this.state.id}`, headers )
            // axios.get( `${wordPressSiteUrl}/wp-json/wp/v2/posts/`, headers )
            .then( res => {
                //console.warn( res.data );
                this.setState( {loading: false, post: res.data })
            })
            .catch( error => this.setState( {loading: false, error: JSON.stringify(error.response.data.message) }))
        });
    }

    render() {
        const { post, error, loading } = this.state;
        return(
            <div>
            <Navbar/>
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
}


export default SinglePost;
// export withRouter(SinglePost);
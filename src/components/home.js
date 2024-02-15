import React from "react";
// import { Link } from 'react-router'
import { Link } from "react-router-dom";
import Navbar from "./navbar";
import axios from 'axios';
// import ReactDOM from 'react';
import '../Styles.css';
import Moment from 'react-moment';


class Home extends React.Component {

    constructor( props ) {
        super( props );

        this.state = {
            loading: false,
            posts: [],
            error: ''
        }
    }
    

    componentDidMount() {
        const wordPressSiteUrl = 'http://localhost:8080/codawp1/index.php';
        //const wordPressSiteUrl = 'https://krc.kingdomrunningclub.org';
        const headers = {
            'Content-Type': 'text/plain',
            'Access-Control-Allow-Origin': '*'
        };
        this.setState( {loading: true}, () => {
            axios.get( `${wordPressSiteUrl}/wp-json/wp/v2/posts`, headers )
            .then( res => {
                //console.warn( res.data );
                this.setState( {loading: false, posts: res.data })
            })
            .catch( error => this.setState( {loading: false, error: JSON.stringify(error.response.data) }))
        });
    }

    render() {
        //console.warn( 'state', this.state );
        //const posts = this.state.posts;
        const { posts } = this.state;  //using destructuring
        // const container = document.getElementById('root');
        // const root = ReactDOM.createRoot(container);
        return (
            <div>
                <Navbar/>
                { posts.length ? (
                    <div className="mt-5 post-container">
                        { posts.map( post => (
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
                                        <div dangerouslySetInnerHTML={{ __html: post.content.rendered}}></div>
                                    </div>
                                </div>
                                {/* Footer */}
                                <div className="card-footer">
                                    <Moment fromNow>{post.date}</Moment>
                                </div>
                                
                                
                            </div>
                            
                        ))}
                    </div>
                ) : ''}
            </div>
        )
    }
}

export default Home;
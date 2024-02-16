import React from 'react';
import Home from "./components/home"
//import logo from './logo.svg';
import './App.css';
import {Route, Routes} from 'react-router'
import SinglePost from './components/SinglePost'
import Update from './Update';
// import { ReactDOM } from 'react';
import { useParams } from 'react-router-dom';



class App extends React.Component {
  render() {
    const container = document.getElementById('root');

    // const SinglePost = (props)=>{
    //     return <SinglePost pets={this.state.pets} updatePet={this.updatePet} {...props} />
    // }
    // const root = ReactDOM.createRoot(container);
    return (
        <div>
        {/* define routes in route component */}
        <Routes>
            <Route path="/" element={<Home/>}>
            </Route>

            {/* <Route path="/post/:id" Component={SinglePost} render={(routerProps => <SinglePost {...props}/> )} >
            <h1> ID: {this.props.id}</h1>
            </Route> */}
            <Route path='/post/:id' type="Nada" Component={SinglePost} render={(matchProps) => 
                <SinglePost {...matchProps} {...this.props} handleMatch={this.handleMatch} />} >
            </Route>

            {/* <Route path="/post/:id" type="Nada" render={SinglePost} Component={SinglePost} >
            </Route> */}
            
            {/* <Route path="/post/:id" render={SinglePost} Component={SinglePost} >
            </Route> */}

            
            {/* <Route path="/post/:id" Component={SinglePost} >
                <Update pets={this.state.pets} updatePet={this.updatePet} />
            </Route> */}

            {/* <Route path="/" element={<Home/>} /> */}
            {/* <Route path="/post/:id" Component={SinglePost} /> */}
            
        </Routes>
            
        </div>
        
      );
  }

}

// const App1 = (
//   <App
//       {...props}
//       params={useParams()}
//   />);

// // export default App;
// export default (props) => {
  
//   };

export default App;


import { React, ReactDOM } from 'react';
import Home from "./Routes/Home/home.component";
//import logo from './logo.svg';
import './App.css';
//import {Route, Routes} from 'react-router'
import { Route, Routes, Outlet, useParams } from 'react-router-dom';
import Login from './Routes/Login/Login.component'
import Dashboard from './Routes/Dashboard/dashboard.component';
import SinglePost from './Routes/SinglePost/SinglePost.component'
//import Update from './Update';
import Navigation from './Routes/Navigation/Navigation.component';




const App = () => {
  const container = document.getElementById('root');
  return (
      <Routes>
        <Route path='/' element={<Navigation />} dashboard="false">
            <Route index element={<Home/>} />
            <Route path='/post/:id' element={<SinglePost />} />
            <Route path="/login" element={<Login/>} />
            {/* <Route path="/dashboard/create-post" element={<CreatePost/>}/> */}
        </Route>
        <Route path="/dashboard/:username" element={<Dashboard/>} />

        
        

      </Routes>
  )
}
export default App;


/*class App extends React.Component {
  render() {
    const container = document.getElementById('root');

    // const SinglePost = (props)=>{
    //     return <SinglePost pets={this.state.pets} updatePet={this.updatePet} {...props} />
    // }
    // const root = ReactDOM.createRoot(container);
    return (
        <div>
        /* define routes in route component */
        
        /*<Routes>

            <Route path="/" element={<Home/>} />
            <Route path="/login" element={<Login/>} />
            <Route path="/dashboard/:username" element={<Dashboard/>} />*/

            {/* <Route path="/dashboard/create-post" element={<CreatePost/>}/> */}
            
            /*<Route path='/post/:id' type="Nada" Component={SinglePost} render={(matchProps) => 
                <SinglePost {...matchProps} {...this.props} handleMatch={this.handleMatch} />} >
            </Route>*/
            
             {/* <Route path="/post/:id" Component={SinglePost} render={(routerProps => <SinglePost {...props}/> )} >
            <h1> ID: {this.props.id}</h1>
            </Route> */}


            {/* <Route path="/post/:id" type="Nada" render={SinglePost} Component={SinglePost} >
            </Route> */}
            
            {/* <Route path="/post/:id" render={SinglePost} Component={SinglePost} >
            </Route> */}

            
            {/* <Route path="/post/:id" Component={SinglePost} >
                <Update pets={this.state.pets} updatePet={this.updatePet} />
            </Route> */}

            {/* <Route path="/" element={<Home/>} /> */}
            {/* <Route path="/post/:id" Component={SinglePost} /> */}
            
        /*</Routes>
            
        </div>
        
      );
  }

}*/

// const App1 = (
//   <App
//       {...props}
//       params={useParams()}
//   />);

// // export default App;
// export default (props) => {
  
//   };




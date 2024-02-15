import React from 'react';
import Home from "./components/home"
//import logo from './logo.svg';
import './App.css';
import {Route, Routes} from 'react-router'
import SinglePost from './components/SinglePost'

class App extends React.Component {
  render() {
    return (
        <div>
        {/* define routes in route component */}
        <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/post/:id" element={<SinglePost/>} />
                {/* <Home to="/"/> */}
                {/* <SinglePost path="/post/:id" /> */}
            
        </Routes>
            
        </div>
        
      );
  }

}

export default App;

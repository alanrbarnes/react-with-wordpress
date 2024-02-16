import React from "react";
import { Link, useParams } from 'react-router-dom';
import SinglePost from "./components/SinglePost";


export default function Update(props) {
    const update=()=>{

    }

    //let id = userParams().id;
    let id = parseInt(useParams().id);
    const params = useParams();
    // let index = props.pets.findIndex( pet => pet.id === id );
    // let pet = props.pets[index];
    return (
        // <WrappedComponent
        <SinglePost id={this.useParams().id}></SinglePost>

    //   />
        // <div>
        //     <h1>Update - Function Comp</h1>
        //     <Link to="/">Back To Home</Link>
        //     <hr></hr>
        //     <h3>Id: {pet.id} | Name: {pet.name} | Tpe: {pet.type}</h3>
        //     <button onClick={update}>Update</button>
        // </div>
    )
}

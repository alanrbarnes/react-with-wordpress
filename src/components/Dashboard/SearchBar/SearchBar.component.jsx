import React from 'react';


const SearchBar = ( props ) => {
    console.log("Serchbar Properties");
	console.log(props);

    return (
        <form className="d-none d-md-inline-block ms-auto form-inline me-0 me-md-3 my-2 my-md-0">
            <div className="input-group">
			    <input className="form-control form-control" type="text" aria-describedby="btnNavbarSearch" aria-label="Search for..." placeholder="Search for..." />
				<button className="btn btn-primary" id="btnNavbarSearch" type="button"><i className="fas fa-search"></i></button>
			</div>
        </form>
    )
}

export default SearchBar;
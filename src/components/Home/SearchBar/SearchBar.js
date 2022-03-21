import React from 'react';
import './SearchBar.css';

const SearchBar = () => {
    return (
        <div className='search-container'>
            <h3>When words become unclear, I shall focus with photographs.</h3>
            <div className="search-div d-flex w-50 m-auto">
                <input type="text" className="form-control" placeholder='Search..' />
                <input className='btn btn-primary' type="submit" value='Search' />
            </div>
        </div>
    );
};

export default SearchBar;
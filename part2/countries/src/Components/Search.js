import React from 'react';

const Search = ({handleSearch}) =>{
    return (
        <form onSubmit={(e) => e.preventDefault()}>
            <p>Search countries <input onChange={handleSearch}/></p>
        </form>
    )
}
export default Search;
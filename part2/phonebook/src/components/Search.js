import React from "react";


const Search = ({onSearch})=>{
    return <p>Search for: <input onChange={onSearch}/></p>
}

export default Search;
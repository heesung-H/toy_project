import React from 'react';
import SearchBar from '../content/header/search_bar/searchBar';


const Head = ({onSearch}) => {

     return (
        <SearchBar onSearch={onSearch}/>
    );
}

export default Head;
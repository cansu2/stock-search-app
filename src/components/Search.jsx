import React from 'react';

const Search = ({ onKeyPress }) => (
    <div>
        <label htmlFor="search">Search: </label>
        <input id="search" type="text" onKeyPress={onKeyPress} />
    </div>
);

export default Search;
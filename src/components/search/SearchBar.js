import React, { useState } from 'react';
import './SearchBar.css';

export function SearchBar({ onSearch }){
  const [query, setQuery] = useState('');

  const handleChange = (e) => {
    setQuery(e.target.value);
  };

  const handleSearch = () => {
    onSearch(query);
  };

  return (
    <div className="search-bar">
      <input
        type="text"
        value={query}
        onChange={handleChange}
        placeholder="Buscar músicos..."
      />
      <button onClick={handleSearch}>Buscar</button>
    </div>
  );
};

import React from 'react';
import { useSearch } from '../context/SearchContext';
import './SearchBar.css';

const SearchBar: React.FC = () => {
  const { query, setQuery, submitQuery, isLoading } = useSearch();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      submitQuery();
    }
  };

  return (
    <div className="search-container">
      <input
        type="text"
        placeholder="Search Username"
        value={query}
        onChange={handleInputChange}
        onKeyDown={handleKeyDown}
        className="search-input"
      />
      <button onClick={submitQuery} className="search-button" disabled={isLoading}>
        {isLoading ? 'Loading...' : 'Search'}
      </button>
    </div>
  );
};

export default SearchBar;

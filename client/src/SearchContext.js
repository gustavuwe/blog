import React, { createContext, useState } from 'react';

const SearchContext = createContext({
  searchTerm: '',
  setSearchTerm: () => {},
});

const SearchProvider = ({ children }) => {
  const [searchTerm, setSearchTerm] = useState('');

  return (
    <SearchContext.Provider value={{ searchTerm, setSearchTerm }}>
      {children}
    </SearchContext.Provider>
  );
};

export { SearchContext, SearchProvider };
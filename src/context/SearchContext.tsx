import React, { createContext, useContext, useState } from 'react';
import type { ReactNode } from 'react';
import { useSearchUser } from '../hooks/useSearchUser';
import type { GitHubUser } from '../models/github';

interface SearchContextType {
  query: string;
  setQuery: (query: string) => void;
  submitQuery: () => void;
  data: GitHubUser[] | undefined;
  isLoading: boolean;
  isError: boolean;
}

const SearchContext = createContext<SearchContextType | undefined>(undefined);

export const SearchProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [query, setQuery] = useState('');
  const [searchKey, setSearchKey] = useState('');

  const { data, isLoading, isError } = useSearchUser(searchKey);

  const submitQuery = () => {
    setSearchKey(query.trim());
  };

  return (
    <SearchContext.Provider
      value={{
        query,
        setQuery,
        submitQuery,
        data,
        isLoading,
        isError,
      }}
    >
      {children}
    </SearchContext.Provider>
  );
};

export const useSearch = (): SearchContextType => {
  const context = useContext(SearchContext);
  if (!context) {
    throw new Error('useSearch must be used within a SearchProvider');
  }
  return context;
};

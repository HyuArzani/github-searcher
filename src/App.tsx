import './App.css';
import { SearchProvider } from './context/SearchContext';
import SearchBar from './components/SearchBar';
import UserList from './components/Users/UserList';

function App() {
  return (
    <SearchProvider>
      <div className="page-container">
        <SearchBar />
        <UserList />
      </div>
    </SearchProvider>
  );
}

export default App;

import logo from './logo.svg';
import './App.css';
import Search from './Components/search';
import MovieList from './Components/movieList';
import { useContext } from 'react';
import { GlobalContext } from './GlobalContent';

function App() {

  const { movieList } = useContext(GlobalContext)
  
  return (
    <div className="App">
      <Search />
      <MovieList />
    </div>
  );
}

export default App;

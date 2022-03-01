import './App.css';
import { useState, useEffect } from 'react';
import Navbar from './components/Navbar'; 
import Home from './components/Home';
import Search from './components/Search'; 
import Movie from './components/Movie';
import NFPage from './components/NFPage';
import { Routes, Route } from 'react-router-dom';



function App() {

  const [searchResults, setSearchResults] = useState([]);
  const [searchText, setSearchText] = useState('');
  const [getInput, setGetInput] = useState(''); 

 useEffect(() => {
   if(searchText) {
      fetch(`https://api.themoviedb.org/3/search/movie?api_key=e2b77162f63d306b505032cf99cbb680&language=en-US&query=${searchText}&page=1&include_adult=false`)
      .then(response => response.json())
      .then(data => {
        setSearchResults(data.results)
      })
   }
  
 }, [searchText])
  
  

  return (
    <div >
       <Navbar searchText = {searchText} setSearchText = {setSearchText} getInput = {getInput} setGetInput = {setGetInput} />

        <Routes>
          <Route path="/" element = {<Home />}/>
          <Route path="/search" element={<Search keyword={searchText} searchResults = {searchResults} />} />
          <Route path="/movies/:id" element={<Movie />} />
          <Route path="*" element={<NFPage />} />


        </Routes>
      
    </div>
  );
}

export default App;

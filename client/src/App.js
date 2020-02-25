import React, { useState } from 'react';
import MovieList from './Movies/MovieList';
import Movie from './Movies/Movie';
import SavedList from './Movies/SavedList';
import { Router } from 'express';

const App = () => {
  const [savedList, setSavedList] = useState( [] );

  const addToSavedList = movie => {
    setSavedList( [...savedList, movie] );
  };

  return (
    <div>
      <SavedList list={savedList} />
      <Router path='./Movies/MovieList'>
        <MovieList/>
      </Router>
      <Router path='./Movies/Movie'>
        <Movie/>
      </Router>
    </div>
  );
};

export default App;

import React, { useReducer, useEffect } from 'react';
import './App.css';
import Header from './components/Header';
import Table from './components/Table';
import Search from './components/Search';
import { storiesReducer } from './reducers';

const items = [
  {
    objectID: 0,
    title: 'React',
    url: 'https://reactjs.org',
    author: 'Jordan Walke',
    num_comments: 3,
    points: 4,
  },
  {
    objectID: 1,
    title: 'Redux',
    url: 'https://reduxjs.org',
    author: 'Farayola Victoria',
    num_comments: 2,
    points: 5,
  }
];

function App() {
  const [ stories, dispatchStories ] = useReducer(storiesReducer, {
    searchTerm: '',
    data: [],
  });

  const fetchStories = () => {
    dispatchStories({
      type: 'SET_STORIES',
      payload: items,
    });
  };

  useEffect(fetchStories, []);


  return (
    <>
      <Header />
      <Search searchTerm={stories.searchTerm}/>
      <hr/>
      <Table data={stories.data} />
    </>
  );
}

export default App;

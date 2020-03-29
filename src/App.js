import React, { useReducer, useEffect, useState, useCallback } from 'react';
import './App.css';
import Header from './components/Header';
import Table from './components/Table';
import Loading from './components/Loading';
import Search from './components/Search';
import { storiesReducer } from './reducers';
import Axios from 'axios';

/* TODO
* position Loading component well
* work on 'Something went wrong'
* work on dynamically sizing the table
* add a filter menu
*/

const API_ENDPOINT = 'https://hn.algolia.com/api/v1/search?query=';

function App() {
  const [ stories, dispatchStories ] = useReducer(storiesReducer, {
    isLoading: false,
    isError: false,
    data: [],
  });
  
  const [ searchTerm, setSearchTerm ] = useState('react');
  const [ url, setUrl ] = useState(`${API_ENDPOINT}${searchTerm}`);

  const handleFetchStories = useCallback(() => {
    if (!searchTerm) return;

    dispatchStories({ type: 'STORIES_FETCH_INIT' });

    Axios
      .get(url)
      .then(result => dispatchStories({
        type: 'SET_STORIES',
        payload: result.data.hits,
      }))
      .catch(() => dispatchStories({
        type: 'STORIES_FETCH_ERROR',
      }));
  }, [url]);

  useEffect(handleFetchStories, [handleFetchStories]);

  return (
    <>
      <Header />
      <Search
        searchTerm={searchTerm}
        onInputChanged={event => setSearchTerm(event.target.value)}
        onSearch={() => setUrl(`${API_ENDPOINT}${searchTerm}`)}
      />
      <hr />
      {stories.isError && <p>Something went wrong...</p>}
      {stories.isLoading && <Loading />}
      <Table data={stories.data} />
    </>
  );
}

export default App;

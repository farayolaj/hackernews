import React, { useReducer, useEffect, useState, useCallback } from 'react';
import './App.css';
import Header from './components/Header';
import Table from './components/Table';
import Loading from './components/Loading';
import Search from './components/Search';
import { storiesReducer } from './reducers';
import Axios from 'axios';

/* TODO
* work on 'Something went wrong'
* add a filter menu
*/

const API_ENDPOINT = 'https://hn.algolia.com/api/v1/search?query=';
const useSemiPersistentState = (key, defValue) => {
  const [ value, setValue ] = useState(localStorage.getItem(key) || defValue);
  useEffect(() => localStorage.setItem(key, value), [ value ]);
  return [ value, setValue ];
};

function App() {
  const [stories, dispatchStories] = useReducer(storiesReducer, {
    isLoading: false,
    isError: false,
    data: [],
  });

  const [searchTerm, setSearchTerm] = useSemiPersistentState('react');
  const [url, setUrl] = useState(`${API_ENDPOINT}${searchTerm}`);

  const handleFetchStories = useCallback(() => {
    if (url === API_ENDPOINT) return;

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
      <Header>
        <Search
          searchTerm={searchTerm}
          onInputChanged={event => setSearchTerm(event.target.value)}
          onSearch={() => setUrl(`${API_ENDPOINT}${searchTerm}`)}
        />
      </Header>
      {stories.isError && <p>Something went wrong...</p>}
      {/* <Loading /> */}
      {stories.isLoading && <Loading />}
      <Table data={stories.data} />
    </>
  );
}

export default App;

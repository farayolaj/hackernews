import React, { useReducer, useEffect, useState, useCallback } from 'react';
import './App.css';
import Header from './components/Header';
import Table from './components/Table';
import Loading from './components/Loading';
import Search from './components/Search';
import { storiesReducer } from './reducers';
import Axios from 'axios';
import Alert, { AlertType } from './components/Alert';
// import SweetAlert from 'sweetalert2-react';

/* TODO
* work on 'Something went wrong'
* add a filter menu
*/

const API_ENDPOINT = 'https://hn.algolia.com/api/v1/search?query=';
const useSemiPersistentState = (key, defValue) => {
  const [value, setValue] = useState(localStorage.getItem(key) || defValue);
  useEffect(() => localStorage.setItem(key, value), [value, key]);
  return [value, setValue];
};

function App() {
  const [stories, dispatchStories] = useReducer(storiesReducer, {
    isLoading: false,
    isError: false,
    data: [],
  });

  const [searchTerm, setSearchTerm] = useSemiPersistentState('search', 'react');
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
      {/* <SweetAlert show={stories.isError} title="Error" text="Something went wrong..."/> */}
      <Alert
        type={AlertType.ERROR} 
        show={stories.isError} 
        onClose={() => dispatchStories({
          type: 'DISMISS_ERROR',
        })}
      >
        Something went wrong...
      </Alert>
      {/* <Loading /> */}
      {stories.isLoading && <Loading />}
      <Table data={stories.data} />
    </>
  );
}

export default App;

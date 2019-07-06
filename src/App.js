import React from 'react';
import logo from './logo.svg';
import './App.css';

const list = [
	{
		title: 'React',
		url: 'https://reactjs.org/',
		author: 'Jordan Walke',
		num_comments: 3,
		points: 4,
		objectID: 0,
	}, {
		title: 'Redux',
		url: 'https://redux.js.org/',
		author: 'Dan Abramov, Andrew Clark',
		num_comments: 2,
		points: 5,
		objectID: 1,
	},
];

function App() {
	var helloworld = "Welcome to the Road to Learn React";
	var user = {
		name: "Joshua",
		password: "sniper"
	}
  return (
    <div className="App">
      <h1>{helloworld}</h1>
      <p>You are {user.name} with password "{user.password}"</p>
      <div>
        {list.map(item =>
          <div key={item.objectID}>
            <span>
              <a href={item.url}>{item.title}</a>
            </span>
            <span>{item.author}</span>
            <span>{item.num_comments}</span>
            <span>{item.points}</span>
          </div>)
	}
      </div>
    </div>
  );
}

function Table() {
}
export default App;

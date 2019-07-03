import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
	var helloworld = "Welcome to the Road to Learn React";
	var user = {
		name:"Joshua",
		password: "super"
	}
  return (
    <div className="App">
      <h1>{helloworld}</h1>
      <p>You are {user.name} with password...</p>
    </div>
  );
}

export default App;

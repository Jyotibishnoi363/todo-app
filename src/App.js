import React, { useState, useEffect } from 'react';
import Todo from "./Todo";
import {Button, FormControl, Input, InputLabel} from '@material-ui/core';
import db from './firebase';
import firebase from 'firebase';
import './App.css';


const App = () => {

  const [todos, setTodos] = useState([]);

const [inputValue, setInput] = useState('');

//When the app loads, we need to listen to the database and fetch new todos as they got added/removed. 

useEffect(() => {
  db.collection('todos').orderBy('timestamp', 'desc').onSnapshot(snapshot => {
    setTodos(snapshot.docs.map(doc => doc.data().todo));
  })
}, [])

const addTodo = (event) => {
  console.log('I am working', '🔥', inputValue);
  event.preventDefault();
  db.collection('todos').add( {
    todo: inputValue,
    timestamp: firebase.firestore.FieldValue.serverTimestamp()
  })
  // setTodos([...todos, inputValue]);
  setInput('');
}

  return (
    <div className="App">
     <h1> Hello There</h1>
     <form>
      <FormControl>
    <InputLabel>✅ Write a Todo</InputLabel>
    <Input   value={inputValue}
        onChange={(event) => setInput(event.target.value)}/>
  </FormControl>
    <Button disabled={!inputValue}
    type="submit" onClick={addTodo} variant="contained" color="primary">
    Add Todo
    </Button>
      </form>
     <ul> {
       todos.map((todo, index) => {
           return <Todo todo={todo}/>
       })
     }
     </ul>
    </div>
  );
}

export default App;

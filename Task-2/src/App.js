import React from 'react';
import './App.css';
import { useState } from 'react';
import {UseEffectApi} from "./components/useEffectApi";

const App=()=>{

 const [users, setUsers] = useState('Hello');
 const loadUsers = async() =>{
   const response = await fetch ("https://reqres.in/api/users?page=1");
   const jsonresponse = await response.json;
   setUsers( jsonresponse);

 }

  return (
    <div className="App">
       <button>Get Users</button>
       <h2>Users:</h2>
       <ul>
        {users.map(({id,login}) =>
        (
          <li key={id}>Name:{login}</li>
        ))}
       </ul>
    </div>
  )
}

export default App;
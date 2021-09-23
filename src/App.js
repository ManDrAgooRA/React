import React, { useState } from 'react'
import userData from './userData'
import UserList from './Components/UserList'
import MyForm from './Components/MyForm';

import './App.css';

function App() {
  const [users, setUsers] = useState([...userData]);

  function createUser(newUser) {
    setUsers([...users, newUser])
  }

  return (
    <div className="App">
      <div className="container">
        <MyForm formName={'Добавить пользователя'} create={createUser} />
        <UserList user={users} />
      </div>
    </div>
  );
}

export default App;

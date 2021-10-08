import React, { useReducer } from 'react';
// import { v4 as uuidv4 } from 'uuid';
import Component from './components/Component';
import { Context } from './context';
import reducer from './reducers/reducer';
import './App.css';

function App() {

  const dataForm = {
    'name': '',
    'lastName': '',
    'email': '',
    'city': '',
    'street': '',
    'home': '',
    'photo': '',
    step: 1,
  }
  const [state, dispatch] = useReducer(reducer, dataForm);

  return (
    <Context.Provider value={{
      state, dispatch, dataForm
    }}>
      <Component />
    </Context.Provider >
  )

}

export default App;

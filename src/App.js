import React, { useReducer } from 'react';
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
    'image': 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJlbOV4YoZ5QCml5IIUXhj10cOdEJR2E-_Wg&usqp=CAU',
    'password': '',
    'secondPassword': '',
    step: 1,
    isDisabledPhoto: true,
    darkTheme: false,
  }

  const [state, dispatch] = useReducer(reducer, dataForm);

  return (
    <Context.Provider value={{
      state, dispatch
    }}>
      <Component />

    </Context.Provider >
  )

}

export default App;

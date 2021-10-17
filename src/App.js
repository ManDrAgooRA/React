import React, { useReducer } from 'react';
import Component from './components/Component';
import reducer from './reducers/reducer';
import { ContextProvider } from './context/context';
import './App.css';
import { dataForm } from './reducers/reducer';


function App() {
  const [state, dispatch] = useReducer(reducer, dataForm);

  return (
    <ContextProvider value={{
      state, dispatch
    }}>
      <Component />
    </ContextProvider>
  )

}

export default App;

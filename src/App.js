import React from 'react';
import { Provider } from 'react-redux'
import './App.css';
import Main from './containers/Main';
import { store } from './store';
import { BrowserRouter } from 'react-router-dom';

function App() {

  return (
    <Provider store={store}>
      <BrowserRouter>
        <Main />
      </BrowserRouter>
    </Provider>
  )
}

export default App;

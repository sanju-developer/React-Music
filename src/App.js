import React from 'react';
import './App.css';
import Header from './components/header/header';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import Entry from './components/entry/entry';
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";
import Reminder from './components/reminder/reminder';
import thunk from 'redux-thunk';
import agemeter from './components/redux-thunk/agemeter';
import rootReducer from './redux/reducers';

function App() {

  const store = createStore(rootReducer, applyMiddleware(thunk));

  return (
    <Provider store={store}>
      <div className="App">
        <Router basename="/">
          <Route path="/" exact render={() => (<Redirect to='/entry' />)} />
          <Route path='/entry' component={Entry} />
          <Route path='/entry/reminder' component={Reminder} />
          <Route path='/entry/music' component={Header} />
          <Route path='/entry/agemeter' component={agemeter} />
        </Router>
      </div>
    </Provider>
  );
}

export default App;

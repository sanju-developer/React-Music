import React from 'react';
import './App.css';
import Header from './components/header/header';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import Entry from './components/entry/entry';
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";
import Reminder from './components/reminder/reminder';
import reminderReducer from './redux/reducers/reminder_reducer';

function App() {

  const store = createStore(reminderReducer);

  return (
    <Provider store={store}>
      <div className="App">
        <Router basename="/">
          <Route path="/" exact render={() => ( <Redirect to='/entry'/> ) }/>
          <Route path='/entry' component={Entry} />
          <Route path='/entry/reminder' component={Reminder} />
          <Route path='/entry/music' component={Header} />
        </Router>
      </div>
     </Provider>
  );
}

export default App;

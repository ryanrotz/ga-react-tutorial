import React from 'react';
import ReactDOM from 'react-dom';
import ToDoContainer from './todoapp/ToDoContainer';
import SignUp from './signUp/SignUp';
import { Router, Route, Link, hashHistory } from 'react-router';
import { Provider } from 'react-redux';
import configureStore from './configureStore';

const store = configureStore();

class App extends React.Component {
  render(){
    return(
      <Provider store={store}>
        <Router history={hashHistory}>
          <Route path="/" component={ToDoContainer} />
          <Route path="/sign-up" component={SignUp} />
        </Router>
      </Provider>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
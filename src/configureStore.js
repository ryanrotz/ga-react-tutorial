import { createStore, applyMiddleware, combineReducers } from 'redux';
import createLogger from 'redux-logger'; 
import toDoApp from './todoapp/toDoModule';
// others redux things you'll probably need: Thunk, Promise

const loggerMiddleware = createLogger(); // initialize logger

const createStoreWithMiddleware = applyMiddleware(loggerMiddleware)(createStore); // apply logger to redux


const reducer = combineReducers({
  // this is used in ToDoContainer.js maptostateprops
  // toDoApp: toDoApp   can be rewritten as:
  toDoApp
})

const configureStore = (initialState) => createStoreWithMiddleware(reducer, initialState);
export default configureStore;
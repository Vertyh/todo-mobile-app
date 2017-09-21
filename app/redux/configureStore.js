import { applyMiddleware, createStore, combineReducers } from 'redux';
import todos from './reducers/todos';
import nav from './reducers/nav';
import logger from 'redux-logger';
import thunk from 'redux-thunk';

const middleware = applyMiddleware(logger, thunk);
const reducers = combineReducers({
    todos,
    nav
});

export default createStore(reducers, middleware);
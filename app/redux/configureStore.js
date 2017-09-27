import { applyMiddleware, createStore, combineReducers } from 'redux';
import items from './reducers/items';
import nav from './reducers/nav';
import logger from 'redux-logger';
import thunk from 'redux-thunk';

const middleware = applyMiddleware(logger, thunk);
const reducers = combineReducers({
    items,
    nav
});

export default createStore(reducers, middleware);
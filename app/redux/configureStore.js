import { applyMiddleware, createStore, combineReducers } from 'redux';
import items from './reducers/items';
import lists from './reducers/lists';
import nav from './reducers/nav';
import logger from 'redux-logger';
import thunk from 'redux-thunk';

const middleware = applyMiddleware(logger, thunk);
const reducers = combineReducers({
    items,
    lists,
    nav
});

export default createStore(reducers, middleware);
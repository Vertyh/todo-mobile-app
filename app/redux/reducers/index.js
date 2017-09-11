let defaultState = {
    todos: [],
    editing: false,
    editModalActive: false,
    editItem: {}
};

import * as utils from '../../utils';

export default function reducer(state=defaultState, action) {
    switch(action.type) {
        case 'FETCH_API_DATA': {
            return {
                ...state,
                todos: action.payload
            };
        }
        case 'FETCHING_ERROR': {
            return { ...state }
        }
        case 'ADD_TODO': {
            let newTodo = {
                key: utils.generateUniqueKey(),
                status: 0,
                content: action.payload
            };
            utils.saveToDb(newTodo);
            return {
                ...state,
                todos: [ ...state.todos, newTodo]
            }
        }
        case 'REMOVE_TODO': {
            let todos = utils.removeTodo(state.todos, action.payload);
            utils.removeFromDb(action.payload);
            return {
                ...state,
                todos: todos
            }
        }
        case 'EDIT_TODO': {
            let todos = utils.editTodo( [...state.todos ], action.payload);
            return {
                ...state,
                todos: todos,
                editModalActive: false
            }
        }
        case 'TOGGLE_EDIT': {
            return {
                ...state,
                editing: action.payload
            }
        }
        case 'OPEN_EDIT_MODAL': {
            return {
                ...state,
                editModalActive: true,
                editItem: action.payload
            }
        }
        case 'TOGGLE_ITEM': {
            let todos = utils.updateTodoStatus( [ ...state.todos ], action.payload);
            return {
                ...state,
                todos: todos
            }
        }
        default: {
            return state;
        }
    }
}
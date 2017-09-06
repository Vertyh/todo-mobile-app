let defaultState = {
    availableId: 1,
    todos: [],
    editing: false
};

import * as utils from '../../utils';

export default function reducer(state=defaultState, action) {
    switch(action.type) {
        case 'ADD_TODO': {
            return {
                ...state,
                availableId: state.availableId + 1,
                todos: [ ...state.todos, {
                    key: state.availableId,
                    status: 0,
                    content: action.payload
                }]
            }
        }
        case 'REMOVE_TODO': {
            let todos = utils.removeTodo(state.todos, action.payload);
            return {
                ...state,
                todos: todos
            }
        }
        case 'TOGGLE_EDIT': {
            return {
                ...state,
                editing: action.payload
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
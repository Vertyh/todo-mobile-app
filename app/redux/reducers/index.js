let defaultState = {
    availableId: 1,
    todos: []
};

export default function reducer(state=defaultState, action) {
    switch(action.type) {
        case 'ADD_TODO': {
            return {
                ...state,
                availableId: state.availableId + 1,
                todos: [ ...state.todos, {
                    key: state.availableId,
                    content: action.payload
                }]
            }
        }
        default: {
            return state;
        }
    }
}
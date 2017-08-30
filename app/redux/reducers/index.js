let defaultState = {
    todos: [
        {
            id: 1,
            content: 'First ToDo',
            status: 0
        },
        {
            id: 2,
            content: 'Second ToDo',
            status: 0
        },
        {
            id: 3,
            content: 'Third ToDo',
            status: 0
        }
    ]
};

export default function reducer(state=defaultState, action) {
    switch(action.type) {
        case 'INCREMENT': {
            return { ...state, counter: state.counter + 1}
        }
        default: {
            return state;
        }
    }
}
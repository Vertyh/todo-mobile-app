export default function reducer(state={counter: 0}, action) {
    switch(action.type) {
        case 'INCREMENT': {
            return { ...state, counter: state.counter + 1}
        }
        default: {
            return state;
        }
    }
}
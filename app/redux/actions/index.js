export function addToDo(item) {
    return function(dispatch) {
        dispatch({type: 'ADD_TODO', payload: item})
    }
}
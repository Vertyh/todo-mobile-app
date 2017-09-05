export function addToDo(item) {
    return function(dispatch) {
        dispatch({type: 'ADD_TODO', payload: item})
    }
}

export function toggleToDoItem(itemId) {
    return function(dispatch) {
        dispatch({type: 'TOGGLE_ITEM', payload: itemId})
    }
}
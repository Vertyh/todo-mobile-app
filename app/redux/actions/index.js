export function addToDo(item) {
    return function(dispatch) {
        dispatch({type: 'ADD_TODO', payload: item})
    }
}

export function removeToDo(key) {
    return function(dispatch) {
        dispatch({type: 'REMOVE_TODO', payload: key})
    }
}

export function toggleEdit(editing) {
    return function(dispatch) {
        dispatch({type: 'TOGGLE_EDIT', payload: editing})
    }
}


export function toggleToDoItem(itemId) {
    return function(dispatch) {
        dispatch({type: 'TOGGLE_ITEM', payload: itemId})
    }
}
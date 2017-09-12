export function fetchApiData() {
    return function(dispatch) {
        fetch('http://todoapp.robjed.usermd.net/get_all_tasks')
            .then((response) => response.json())
            .then((data) => {
                data.tasks.forEach((todo) => {
                   todo.key = todo.item_key;
                   delete todo.item_key;
                });
                dispatch({type: 'FETCH_API_DATA', payload: data.tasks})
            })
            .catch((err) => dispatch({type: 'FETCHING_ERROR'}))
    }
}

export function addToDo(item) {
    return function(dispatch) {
        dispatch({type: 'ADD_TODO', payload: item});
    }
}

export function removeToDo(key) {
    return function(dispatch) {
        dispatch({type: 'REMOVE_TODO', payload: key});
    }
}

export function editToDo(item) {
    return function(dispatch) {
        dispatch({type: 'EDIT_TODO', payload: item});
    }
}

export function toggleEdit(editing) {
    return function(dispatch) {
        dispatch({type: 'TOGGLE_EDIT', payload: editing});
    }
}

export function openEditModal(item) {
    return function(dispatch) {
        dispatch({type: 'OPEN_EDIT_MODAL', payload: item});
    }
}

export function toggleToDoItem(itemId) {
    return function(dispatch) {
        dispatch({type: 'TOGGLE_ITEM', payload: itemId});
    }
}
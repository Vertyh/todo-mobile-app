export function fetchApiData() {
    return function(dispatch) {
        fetch('http://todoapp.robjed.usermd.net/get_all_tasks')
            .then((response) => response.json())
            .then((data) => {
                let todos = data.tasks;
                todos.forEach((item) => {
                   item.key = item.id;
                });
                dispatch({type: 'FETCH_API_DATA', payload: todos})
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
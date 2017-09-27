export function fetchItemsData() {
    return function(dispatch) {
        fetch('http://todoapp.robjed.usermd.net/get_all_tasks')
            .then((response) => response.json())
            .then((data) => {
                data.tasks.forEach((todo) => {
                   todo.key = todo.item_key;
                   delete todo.item_key;
                });
                dispatch({type: 'FETCH_ITEMS_DATA', payload: data.tasks})
            })
            .catch((err) => dispatch({type: 'FETCHING_ITEMS_ERROR'}))
    }
}

export function addItem(item) {
    return function(dispatch) {
        dispatch({type: 'ADD_ITEM', payload: item});
    }
}

export function removeItem(key) {
    return function(dispatch) {
        dispatch({type: 'REMOVE_ITEM', payload: key});
    }
}

export function editItem(item) {
    return function(dispatch) {
        dispatch({type: 'EDIT_ITEM', payload: item});
    }
}

export function toggleEdit(editing) {
    return function(dispatch) {
        dispatch({type: 'TOGGLE_ITEM_EDIT', payload: editing});
    }
}

export function openEditModal(item) {
    return function(dispatch) {
        dispatch({type: 'OPEN_EDIT_MODAL', payload: item});
    }
}

export function toggleItem(key, status) {
    return function(dispatch) {
        dispatch({type: 'TOGGLE_ITEM', payload: {key: key, status: status}});
    }
}
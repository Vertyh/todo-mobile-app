export function fetchItemsData(listKey) {
    return function(dispatch) {
        fetch('http://todoapp.robjed.usermd.net/get_all_tasks', {
            method: 'POST',
            body: JSON.stringify({ list_key: listKey })
        })
            .then((response) => response.json())
            .then((data) => {
                data.tasks.forEach((item) => {
                    item.key = item.item_key;
                   delete item.item_key;
                });
                dispatch({type: 'FETCH_ITEMS_DATA', payload: { items: data.tasks, currentList: listKey }})
            })
            .catch((err) => dispatch({type: 'FETCHING_ITEMS_ERROR'}))
    }
}

export function cleanItemsData() {
    return function (dispatch) {
        dispatch({type: 'CLEAN_ITEMS_DATA'});
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

export function openItemAddModal() {
    return function(dispatch) {
        dispatch({type: 'OPEN_ITEM_ADD_MODAL'});
    }
}

export function closeItemAddModal() {
    return function(dispatch) {
        dispatch({type: 'CLOSE_ITEM_ADD_MODAL'});
    }
}

export function toggleEdit(editing) {
    return function(dispatch) {
        dispatch({type: 'TOGGLE_ITEM_EDIT', payload: editing});
    }
}

export function openEditModal(item) {
    return function(dispatch) {
        dispatch({type: 'OPEN_ITEM_EDIT_MODAL', payload: item});
    }
}

export function closeEditModal() {
    return function(dispatch) {
        dispatch({type: 'CLOSE_ITEM_EDIT_MODAL'});
    }
}

export function toggleItem(key, status) {
    return function(dispatch) {
        dispatch({type: 'TOGGLE_ITEM', payload: {key: key, status: status}});
    }
}
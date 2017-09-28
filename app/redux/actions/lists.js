export function addList(list) {
    return function(dispatch) {
        dispatch({type: 'ADD_LIST', payload: list});
    }
}

export function openAddModal() {
    return function(dispatch) {
        dispatch({type: 'OPEN_ADD_MODAL'});
    }
}

export function removeList(key) {
    return function (dispatch) {
        dispatch({type: 'REMOVE_LIST', payload: key});
    }
}

export function openEditModal(list) {
    return function(dispatch) {
        dispatch({type: 'OPEN_LIST_EDIT_MODAL', payload: list});
    }
}

export function editList(list) {
    return function(dispatch) {
        dispatch({type: 'EDIT_LIST', payload: list});
    }
}
export function fetchListsData() {
    return function(dispatch) {
        fetch('http://todoapp.robjed.usermd.net/get_lists')
            .then((response) => response.json())
            .then((data) => {
                data.lists.forEach((list) => {
                    list.key = list.list_key;
                    delete list.list_key;
                });
                dispatch({type: 'FETCH_LISTS_DATA', payload: data.lists})
            })
            .catch((err) => dispatch({type: 'FETCHING_LISTS_ERROR'}))
    }
}

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
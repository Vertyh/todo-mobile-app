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
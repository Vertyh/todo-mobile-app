/**
 * Edit given list
 * @param {Array} items - all lists
 * @param {Object} editedList - object containing edited list data
 * @return {Array} Updated list of lists
 */
export function editList(lists, editedList) {
    let index = lists.findIndex((list) => list.key === editedList.key);
    if(editedList.list_name !== '') {
        lists[index].list_name = editedList.list_name;
    }
    else {
        lists.splice(index, 1);
    }

    return lists;
}
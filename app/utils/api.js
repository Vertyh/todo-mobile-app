/**
 * Saves given item to remote database
 * @param {Object} item - object containing item to save
 */
export function saveItem(item) {
    fetch('http://todoapp.robjed.usermd.net/create_task', {
        method: 'POST',
        body: JSON.stringify(item)
    });
}

/**
 * Remove given item from remote database
 * @param {String} key - unique key of item to remove
 */
export function removeItem(key, listKey) {
    fetch('http://todoapp.robjed.usermd.net/delete_task', {
        method: 'POST',
        body: JSON.stringify({ item_key: key, list_key: listKey })
    });
}

/**
 * Update given item status in remote database
 * @param {String} key - unique key of item to edit
 * @param {Number} status - new item status
 */
export function updateItemStatus(key, status, listKey) {
    fetch('http://todoapp.robjed.usermd.net/change_status', {
        method: 'POST',
        body: JSON.stringify({ item_key: key, status: status, list_key: listKey })
    });
}

/**
 * Update given item content in remote database
 * @param {String} key - unique key of item to edit
 * @param {String} content - new item content
 */
export function updateItemContent(key, content, listKey) {
    fetch('http://todoapp.robjed.usermd.net/update_content', {
        method: 'POST',
        body: JSON.stringify({ item_key: key, content: content, list_key: listKey })
    });
}

/**
 * Creates given list in database
 * @param {Object} list - object containing list to create
 */
export function createList(list) {
    fetch('http://todoapp.robjed.usermd.net/create_list', {
        method: 'POST',
        body: JSON.stringify(list)
    });
}

/**
 * Remove given list from database
 * @param {String} listKey - unique key of list to remove
 */
export function removeList(listKey) {
    fetch('http://todoapp.robjed.usermd.net/delete_list', {
        method: 'POST',
        body: JSON.stringify({ list_key: listKey })
    });
}

/**
 * Update given list name in database
 * @param {String} listKey - unique key of list to edit
 * @param {String} listName - new list name
 */
export function updateListName(listKey, listName) {
    fetch('http://todoapp.robjed.usermd.net/change_list_name', {
        method: 'POST',
        body: JSON.stringify({ item_key: listKey, list_name: listName })
    });
}
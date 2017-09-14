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
export function removeItem(key) {
    fetch('http://todoapp.robjed.usermd.net/delete_task', {
        method: 'POST',
        body: JSON.stringify({ key: key })
    });
}

/**
 * Update given item status in remote database
 * @param {String} key - unique key of item to edit
 * @param {Number} status - new item status
 */
export function updateItemStatus(key, status) {
    fetch('http://todoapp.robjed.usermd.net/change_status', {
        method: 'POST',
        body: JSON.stringify({ key: key, status: status })
    });
}

/**
 * Update given item content in remote database
 * @param {String} key - unique key of item to edit
 * @param {String} content - new item content
 */
export function updateItemContent(key, content) {
    fetch('http://todoapp.robjed.usermd.net/update_content', {
        method: 'POST',
        body: JSON.stringify({ key: key, content: content })
    });
}
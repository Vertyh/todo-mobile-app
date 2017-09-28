import * as api from './api';

/**
 * Update given item status
 * @param {Array} items - list of all items
 * @param {Number} itemData - data of item to update
 * @return {Array} Updated list of items
 */
export function updateItemStatus(items, itemData, listKey) {
    let index = items.findIndex((item) => item.key === itemData.key);
    let status = items[index].status === 0 ? 1 : 0;
    items[index].status = status;
    api.updateItemStatus(itemData.key, status, listKey);

    return items;
}

/**
 * Remove given item
 * @param {Array} items - list of all items
 * @param {Number} itemId - ID of item to remove
 * @return {Array} Updated list of items
 */
export function removeItem(items, itemId) {
    return items.filter((item) => {
        return item.key !== itemId;
    });
}

/**
 * Edit given item
 * @param {Array} items - list of all items
 * @param {Object} editedItem - object containing edited item data
 * @return {Array} Updated list of items
 */
export function editItem(items, editedItem, listKey) {
    let index = items.findIndex((item) => item.key === editedItem.key);
    if(editedItem.content !== '') {
        items[index].content = editedItem.content;
        api.updateItemContent(editedItem.key, editedItem.content, listKey);
    }
    else {
        items.splice(index, 1);
        api.removeItem(editedItem.key);
    }

    return items;
}
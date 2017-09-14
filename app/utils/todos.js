import * as api from './api';

/**
 * Generate unique key
 * @return {String} Generated key
 */
export function generateUniqueKey() {
    return `key_${new Date().getTime() + Math.random().toString(36).substr(2)}`;
}

/**
 * Update given ToDo status
 * @param {Array} todos - list of all todos
 * @param {Number} todoId - ID of ToDo to update
 * @return {Array} Updated list of ToDos
 */
export function updateTodoStatus(todos, todoData) {
    let index = todos.findIndex((item) => item.key === todoData.key);
    let status = todos[index].status === 0 ? 1 : 0;
    todos[index].status = status;
    api.updateItemStatus(todoData.key, status);

    return todos;
}

/**
 * Remove given ToDo
 * @param {Array} todos - list of all todos
 * @param {Number} todoId - ID of ToDo to remove
 * @return {Array} Updated list of ToDos
 */
export function removeTodo(todos, todoId) {
    return todos.filter((item) => {
        return item.key !== todoId;
    });
}

/**
 * Edit given ToDo
 * @param {Array} todos - list of all todos
 * @param {Object} editedItem - object containing edited ToDo data
 * @return {Array} Updated list of ToDos
 */
export function editTodo(todos, editedItem) {
    let index = todos.findIndex((item) => item.key === editedItem.key);
    if(editedItem.content !== '') {
        todos[index].content = editedItem.content;
        api.updateItemContent(editedItem.key, editedItem.content);
    }
    else {
        todos.splice(index, 1);
        api.removeItem(editedItem.key);
    }

    return todos;
}
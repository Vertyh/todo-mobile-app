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
export function updateTodoStatus(todos, todoId) {
    let index = todos.findIndex((item) => item.key === todoId);
    todos[index].status = todos[index].status === 0 ? 1 : 0;

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
    }
    else {
        todos.splice(index, 1);
    }

    return todos;
}

/**
 * Saves given item to remote database
 * @param {Object} item - object containing item to save
 */
export function saveToDb(item) {
    fetch('http://todoapp.robjed.usermd.net/create_task', {
        method: 'POST',
        body: JSON.stringify(item)
    });
}

export function removeFromDb(key) {
    fetch('http://todoapp.robjed.usermd.net/delete_task', {
        method: 'POST',
        body: JSON.stringify({ key: key })
    });
}